"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectInputProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
};

export default function SelectInput({
  value,
  onValueChange,
  options,
  placeholder = "Select Option",
  className = "",
  disabled = false,
  required = false,
  name,
}: SelectInputProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = useMemo(
    () => options.find((option) => option.value === value)?.label ?? "",
    [options, value]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={[
          "w-full h-full min-h-[42px] rounded-[10px] border border-[#C8C8C8] bg-[#FFF] px-5 pr-12",
          "text-left text-[12px] md:text-[16px] font-sans text-[#8D95A2]",
          "focus:outline-none focus:border-[#F3C300] focus:ring-2 focus:ring-[#F3C300]/25",
          open ? "border-[#F3C300]" : "",
          "disabled:opacity-60 disabled:cursor-not-allowed",
        ].join(" ")}
      >
        {selectedLabel || placeholder}
        <svg
          viewBox="0 0 20 20"
          width="16"
          height="16"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#787878]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={open ? "m5 12 5-5 5 5" : "m5 7 5 5 5-5"} />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute z-30 mt-1 w-full overflow-hidden rounded-[10px] border border-[#C8C8C8] bg-[#FFF] shadow-[0_6px_14px_rgba(0,0,0,0.08)]"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  onValueChange(option.value);
                  setOpen(false);
                }}
                className={[
                  "w-full px-5 py-3 text-left text-[14px] md:text-[16px] text-[#1F1F1F] font-sans",
                  "border-b border-[#C8C8C8] last:border-b-0",
                  value === option.value ? "bg-[#F3C300] text-[#1F1F1F]" : "hover:bg-[#F3C300]/35",
                ].join(" ")}
                role="option"
                aria-selected={value === option.value}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {required && !value ? (
        <span className="sr-only" aria-live="polite">
          Selection required
        </span>
      ) : null}
    </div>
  );
}
