"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

const READY_TEXT = "Ready for your next Karvaann?";

type ReadyFormState = {
  destination: string;
  travelDate: string;
  whatsappNumber: string;
  email: string;
  tripNotes: string;
  serviceType: string;
};

const readyInitialForm: ReadyFormState = {
  destination: "",
  travelDate: "",
  whatsappNumber: "",
  email: "",
  tripNotes: "",
  serviceType: "",
};

export default function ReadySection() {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<ReadyFormState>(readyInitialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const page = useMemo(() => pathname || "/", [pathname]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || done) return;

    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(READY_TEXT.slice(0, index));

      if (index >= READY_TEXT.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 85);

    return () => clearInterval(timer);
  }, [done, isInView]);

  const updateField = (field: keyof ReadyFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "ready_section",
          page,
        }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Unable to submit form");
      }

      setStatus("success");
      setForm(readyInitialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit form");
    }
  };

  return (
    <section ref={sectionRef} className="bg-transparent px-6 md:px-28 py-12 md:py-16 my-10 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <h1 className="min-h-[96px] md:min-h-[248px] font-heading uppercase text-[40px] md:text-[110px] text-[#4b3b2b] font-extrabold leading-tight">
            {typedText}
            {!done ? <span className="inline-block animate-pulse">|</span> : null}
          </h1>
        </div>
        <form className="bg-[#FFF4C7] rounded-md px-6 py-8 md:py-12 shadow-[0_10px_24px_rgba(0,0,0,0.12)]" onSubmit={handleSubmit}>
          <div>
            <label className="text-[13px] font-semibold">Destination</label>
            <div className="relative mt-2">
              <input
                className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 pr-12 text-[14px]"
                placeholder="India"
                value={form.destination}
                onChange={(e) => updateField("destination", e.target.value)}
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#7a6a5d] border border-[#E4D6A8] rounded-sm px-2 py-[2px]">
                IND
              </div>
            </div>
          </div>

          <div>
            <label className="text-[13px] font-semibold">Travel Date</label>
            <div className="relative mt-2">
              <input
                type="date"
                className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px]"
                value={form.travelDate}
                onChange={(e) => updateField("travelDate", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-[13px] font-semibold">Whatsapp number</label>
            <div className="relative mt-2">
              <select
                className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px]"
                value={form.serviceType}
                onChange={(e) => updateField("serviceType", e.target.value)}
                required
              >
                <option>Leisure Travel</option>
                <option>Corporate Travel</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[13px] font-semibold">Whatsapp number</label>
            <div className="relative mt-2">
              <input
                className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px]"
                placeholder="+91"
                value={form.whatsappNumber}
                onChange={(e) => updateField("whatsappNumber", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[13px] font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px] mt-2"
              placeholder="Example@gmail.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-[13px] font-semibold">Remarks</label>
            <textarea
              className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px] mt-2 min-h-[110px]"
              placeholder="Notes -"
              value={form.tripNotes}
              onChange={(e) => updateField("tripNotes", e.target.value)}
            />
          </div>

          {status === "success" ? (
            <p className="text-[13px] text-green-700">Submitted successfully.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-[13px] text-red-700">{errorMessage}</p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#F3C300] hover:bg-[#FFD425] transition text-[#2f241b] font-semibold rounded-sm py-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
