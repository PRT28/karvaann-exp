"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import DateInput from "@/components/forms/DateInput";
import SelectInput from "@/components/forms/SelectInput";

type DestinationLeadModalProps = {
  open: boolean;
  destination: string;
  onClose: () => void;
};

type FormState = {
  destination: string;
  travelDate: string;
  whatsappNumber: string;
  email: string;
  tripNotes: string;
  serviceType: string
};

function isBottomSheetMode(): boolean {
  if (typeof window === "undefined") return false;
  const smallScreen = window.matchMedia("(max-width: 767px)").matches;
  const tabletPortrait = window.matchMedia("(max-width: 1023px) and (orientation: portrait)").matches;
  return smallScreen || tabletPortrait;
}

export default function DestinationLeadModal({ open, destination, onClose }: DestinationLeadModalProps) {
  const pathname = usePathname();
  const [bottomSheet, setBottomSheet] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    destination: destination || "",
    travelDate: "",
    whatsappNumber: "",
    email: "",
    tripNotes: "",
    serviceType: ""
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      destination: destination || "",
    }));
  }, [destination]);

  useEffect(() => {
    setBottomSheet(isBottomSheetMode());
    const onResize = () => setBottomSheet(isBottomSheetMode());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const page = useMemo(() => pathname || "/", [pathname]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const closeAndReset = () => {
    setStatus("idle");
    setErrorMessage("");
    onClose();
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
          source: "destination_form",
          page,
        }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Unable to submit form");
      }

      setStatus("success");
      setTimeout(() => {
        closeAndReset();
        setForm({
          destination: destination || "",
          travelDate: "",
          whatsappNumber: "",
          email: "",
          tripNotes: "",
          serviceType: ""
        });
      }, 700);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit form");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="absolute inset-0 bg-black/45 modal-overlay-enter"
        aria-label="Close popup overlay"
        onClick={closeAndReset}
      />

      <div className={`relative font-sans h-full w-full flex ${bottomSheet ? "items-end justify-stretch" : "items-center justify-center p-4 md:p-8"}`}>
        <section
          role="dialog"
          aria-modal="true"
          aria-label="Destination enquiry form"
          className={[
            "relative bg-[#F3EED8] shadow-[0_18px_60px_rgba(0,0,0,0.35)] modal-slide-up-enter",
            bottomSheet
              ? "w-full rounded-t-[28px] px-5 pt-5 pb-6 max-h-[90vh] overflow-y-auto"
              : "w-full max-w-[560px] rounded-2xl px-8 md:px-12 pt-8 pb-10",
          ].join(" ")}
        >
          <button
            type="button"
            onClick={closeAndReset}
            aria-label="Close popup"
            className="absolute top-4 left-4 md:top-6 md:left-6 text-[#7f7f7f] hover:text-[#5d5d5d] transition"
          >
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <h2 className="text-center font-sans text-[#0E1013] font-bold leading-[1.06] text-[24px] md:text-[24px] mt-10 md:mt-8">
            Let&apos;s turn your idea into an<br />experience!
          </h2>

          <form className="mt-8 md:mt-10 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-[16px] leading-none font-sans text-[#171717]">Destination</label>
              <input
                className="w-full rounded-xl py-2 border border-[#D8D8D8] bg-[#F2F2F2] px-5 text-[12px] md:text-[16px] leading-none font-sans text-[#222]"
                placeholder="India"
                value={form.destination}
                onChange={(e) => updateField("destination", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] leading-none font-sans text-[#171717]">Travel Date</label>
              <DateInput
                className="py-2"
                value={form.travelDate}
                onValueChange={(value) => updateField("travelDate", value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] leading-none font-sans text-[#171717]">Service Type</label>
              <SelectInput
                className="py-2"
                value={form.serviceType}
                onValueChange={(value) => updateField("serviceType", value)}
                options={[
                  { label: "Leisure Travel", value: "Leisure Travel" },
                  { label: "Corporate Travel", value: "Corporate Travel" },
                ]}
                placeholder="Select Service Type"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] leading-none font-sans text-[#171717]">Whatsapp number</label>
              <input
                type="tel"
                className="w-full py-2 rounded-xl border border-[#D8D8D8] bg-[#F2F2F2] px-5 text-[12px] md:text-[16px] leading-none font-sans text-[#222]"
                placeholder="+91"
                value={form.whatsappNumber}
                onChange={(e) => updateField("whatsappNumber", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] leading-none font-sans text-[#171717]">Email</label>
              <input
                type="email"
                className="w-full py-2 rounded-xl border border-[#D8D8D8] bg-[#F2F2F2] px-5 text-[12px] md:text-[16px] leading-none font-sans text-[#222]"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-[16px] leading-none font-sans text-[#171717]">Remarks</label>
              <textarea
                className="w-full py-2 rounded-xl border border-[#D8D8D8] bg-[#F2F2F2] px-5 text-[12px] md:text-[16px] leading-none font-sans text-[#222] min-h-[90px]"
                placeholder="Tell us about your trip"
                value={form.tripNotes}
                onChange={(e) => updateField("tripNotes", e.target.value)}
              />
            </div>
            

            {status === "error" ? <p className="text-[16px] text-red-700 font-sans">{errorMessage}</p> : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full mt-3 py-2 rounded-md bg-[#F3C300] hover:bg-[#FFD425] transition font-sans text-[16px] text-[#222] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting..." : status === "success" ? "Submitted" : "Submit"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
