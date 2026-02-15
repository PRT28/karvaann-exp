import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Karvaann Experiences",
  description: "Discover leisure and corporate travel services, including limitless trips, standalone bookings, and MICE solutions.",
  keywords: [
    "travel services",
    "leisure travel services",
    "corporate travel services",
    "MICE services",
    "standalone booking",
  ],
  openGraph: {
    title: "Our Services | Karvaann Experiences",
    description: "Discover leisure and corporate travel services, including limitless trips, standalone bookings, and MICE solutions.",
    siteName: "Karvaann Experiences",
    type: "website",
    locale: "en_IN",
    url: "/services",
  },
};

const leisureCards = [
  {
    title: "Limitless",
    description:
      "Limitless Trips are the heart of Karvaann Experiences. These are fully customised journeys designed around your preferences, pace and travel style.",
    icon: "/services/limitless.svg",
  },
  {
    title: "Standalone Services",
    description:
      "For travellers who prefer flexibility, we offer standalone travel solutions across destinations worldwide. These can be booked independently or combined with a larger itinerary.",
    icon: "/services/standalone-service.svg",
  },
];

const corporateCards = [
  {
    title: "Business Travel Solutions",
    description:
      "We take the stress out of corporate travel with efficient and cost-effective solutions tailored for professionals on the move.",
    icon: "/services/business-travel-solutions.svg",
  },
  {
    title: "MICE (Meetings, Incentives, Conferences & Exhibitions)",
    description:
      "With over three years of experience executing MICE travel, we curate corporate events that go beyond logistics and deliver meaningful experiences.",
    icon: "/about/vision.svg",
  },
  {
    title: "Value-Added Corporate Services",
    description:
      "To support long-term corporate partnerships, we also offer value-added services that enhance efficiency and optimise costs.",
    icon: "/services/value-added.svg",
  },
];

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="relative w-full sm:w-[300px] bg-[#f4efe6] shadow-md rounded-[12px] px-6 pt-16 pb-8 text-center">
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-18 h-18 md:w-20 md:h-20 rounded-full bg-[#FFC709] flex items-center justify-center">
        <Image src={icon} alt={title} width={38} height={38} />
      </div>
      <h3 className="text-[15px] md:text-[16px] font-bold mb-4">{title}</h3>
      <p className="text-[12px] leading-6 text-[#6a594d]">{description}</p>
      <div className="w-10 h-[3px] bg-[#9747FF] mt-6 mx-auto rounded-lg" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative h-[160px] md:h-[260px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557652696-0fd8a35b0d62?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 md:px-28 py-14 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="font-heading font-bold text-[#FFC709] text-[52px] md:text-[96px] leading-none">
              Our Services
            </div>
            <div className="w-[220px] md:w-[520px] mt-4 bg-white/80 h-[2px]" />
          </div>
        </div>
      </section>

      <div className="px-6 md:px-28 py-12 md:py-16 font-[600] text-[12px] md:text-[12px] leading-6">
        <p>
          At Karvaann Experiences, we design travel solutions that are thoughtful, seamless, and experience-led. Our services are structured across two core verticals: leisure travel and corporate travel, each crafted with the same attention to detail and commitment to quality.
        </p>
        <p className="mt-4">
          Whether you are planning a personal journey or managing business travel at scale, we ensure every experience feels effortless and well-executed.
        </p>
      </div>

      <section className="px-6 md:px-28 py-0 md:py-0">
        <div className="inline-flex font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[16px] md:text-[18px]">
          Leisure Travel Services
        </div>
        <p className="mt-6 text-[14px] md:text-[15px] text-[#6a594d] max-w-3xl leading-7">
          Our leisure travel services are built for travellers who want journeys that feel personal, immersive, and memorable. From complete trip planning to individual travel components, we offer flexible solutions based on how you like to travel.
        </p>
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
          {leisureCards.map((card) => (
            <ServiceCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-28 py-12 md:py-16">
        <div className="inline-flex font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[16px] md:text-[18px]">
          Corporate Travel Services
        </div>
        <p className="mt-6 text-[14px] md:text-[15px] text-[#6a594d] max-w-4xl leading-7">
          Karvaann Experiences offers end-to-end corporate travel and event solutions designed to make business travel efficient, smooth, and impactful. From executive movements to large-scale corporate events, we manage logistics with clarity and precision.
        </p>
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 flex-wrap">
          {corporateCards.map((card) => (
            <ServiceCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
