import data from "@/data/terms.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Karvaann Experiences",
  description: "Read the Terms & Conditions and Privacy Policy for bookings, services, cancellations, and data handling at Karvaann Experiences.",
  keywords: [
    "terms and conditions",
    "privacy policy",
    "booking policy",
    "refund policy",
    "travel legal terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Karvaann Experiences",
    description: "Read the Terms & Conditions and Privacy Policy for bookings, services, cancellations, and data handling at Karvaann Experiences.",
    siteName: "Karvaann Experiences",
    type: "website",
    locale: "en_IN",
    url: "/terms-conditions",
  },
};

export default function ServicesPage() {
  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative h-[160px] md:h-[260px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553709724-ccfb0930663f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-28 py-14 md:py-24">
          <div className="font-heading uppercase text-[#FFC709] text-[52px] md:text-[96px] leading-none tracking-wide">
            T&amp;C
          </div>
          <div className="w-[220px] md:w-[800px] mt-6 md:mt-8 bg-[#FFC709] h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-28 py-6 md:py-10">
        <div className="max-w-5xl">
          <div className="inline-flex font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[16px] md:text-[18px]">
            Terms &amp; Conditions
          </div>
          <p className="mt-6 text-[14px] text-[#808080] md:text-[16px] leading-7 font-sans">
            We craft personalized itineraries tailored to each traveller&apos;s preferences, whether solo or in a group. This includes handpicking tailored accommodations and activities for your budget and interests, so that you don&apos;t have to stress planning it allWebsite.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 max-w-5xl">
          {data.terms.map((section) => (
            <div key={section.title} className="">
              <h3 className="font-sans font-semibold text-[22px] md:text-[16px] text-[#333333]">
                {section.title}
              </h3>
              <div className="mt-4 space-y-0 text-[#808080] text-[14px] md:text-[16px] leading-7 font-sans">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc text-[#808080] list-inside space-y-0 text-[14px] md:text-[16px] leading-7 font-sans">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
        <div className="inline-flex mt-10 font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[16px] md:text-[18px]">
          Privacy Policy
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 max-w-5xl">
          {data.privacy.map((section) => (
            <div key={section.title} className="">
              <h3 className="font-sans font-semibold text-[22px] md:text-[16px] text-[#333333]">
                {section.title}
              </h3>
              <div className="mt-4 space-y-0 text-[#808080] text-[14px] md:text-[16px] leading-7 font-sans">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc text-[#808080] list-inside space-y-0 text-[14px] md:text-[16px] leading-7 font-sans">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
