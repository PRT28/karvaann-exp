"use client";

import DatePicker from "react-datepicker";

type DateInputProps = {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function DateInput({
  value,
  onValueChange,
  placeholder = "Select Date",
  className = "",
}: DateInputProps) {
  const selectedDate = value ? new Date(`${value}T00:00:00`) : null;

  return (
    <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => {
          if (!date) {
            onValueChange("");
            return;
          }

          const yyyy = date.getFullYear();
          const mm = `${date.getMonth() + 1}`.padStart(2, "0");
          const dd = `${date.getDate()}`.padStart(2, "0");
          onValueChange(`${yyyy}-${mm}-${dd}`);
        }}
        dateFormat="MMMM d, yyyy"
        placeholderText={placeholder}
        popperPlacement="bottom-start"
        calendarClassName="karvaann-datepicker"
        wrapperClassName="w-full"
        className={[
          "w-full rounded-xl border border-[#D8D8D8] bg-[#F2F2F2] px-5 pr-11 h-[42px]",
          "text-[12px] md:text-[16px] leading-none font-sans text-[#222]",
          "focus:border-[#F3C300] focus:ring-2 focus:ring-[#F3C300]/25 outline-none",
          className,
        ].join(" ")}
      />
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#787878]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3.5" y="4.5" width="17" height="16" rx="1.8" />
        <path d="M3.5 9.5h17M8 2.8v3.4M16 2.8v3.4" />
      </svg>
    </div>
  );
}
