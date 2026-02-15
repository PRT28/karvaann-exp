import type { Metadata } from "next";
import CustomisedEnquiryForm from "@/components/forms/CustomisedEnquiryForm";

export const metadata: Metadata = {
  title: "Customised Travel | Karvaann Experiences",
  description: "Plan your next customized trip with Karvaann Experiences. Share destination, dates, and preferences for a tailored itinerary.",
  keywords: [
    "customised travel",
    "tailored itinerary",
    "trip planning",
    "personalized travel form",
    "Karvaann custom trips",
  ],
  openGraph: {
    title: "Customised Travel | Karvaann Experiences",
    description: "Plan your next customized trip with Karvaann Experiences. Share destination, dates, and preferences for a tailored itinerary.",
    siteName: "Karvaann Experiences",
    type: "website",
    locale: "en_IN",
    url: "/customised",
  },
};

type CustomisedPageProps = {
  searchParams?: Promise<{
    destination?: string;
  }>;
};

export default async function CustomisedPage({ searchParams }: CustomisedPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const destination = resolvedSearchParams?.destination ?? "";

  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative min-h-[260px] md:min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533856797653-6f6dbf370efc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 px-6 md:px-28 py-16 md:py-24">
          <div className="font-heading uppercase text-[#FFC709] text-[40px] md:text-[96px] leading-tight tracking-wide">
            READY FOR YOUR NEXT
            <br />
            KARVAANN ?
          </div>
          <div className="w-[220px] md:w-[520px] mt-4 bg-white/80 h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-28 py-12 md:py-16">
        <div className="max-w-5xl mx-auto bg-[#fff7df] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-12">
          <CustomisedEnquiryForm initialDestination={destination} />
        </div>
      </section>

      <section className="px-6 md:px-28 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[20px] md:text-[28px] font-semibold text-[#6a594d]">
            Prefer a call or WhatsApp?
          </h2>
          <p className="text-[16px] text-[#8a7a6d] mt-2">Reach us at</p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-[#9b9086]">
            <span>+91 9540001036</span>
            <span className="hidden md:inline-block w-[1px] h-4 bg-[#c4b8ac]" />
            <span>+91 70423 21010</span>
          </div>
          <button
            type="button"
            className="mt-6 bg-[#F3C300] hover:bg-[#FFD425] transition text-[#2f241b] font-semibold rounded-sm px-6 py-2"
          >
            contact now
          </button>
        </div>
      </section>
    </main>
  );
}
