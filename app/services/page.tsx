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


function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="relative flex flex-col items-center w-full bg-[#f0ece3] shadow-[0_4px_10px_rgba(0,0,0,0.14)] rounded-[12px] px-8 md:px-12 pt-16 pb-8 text-center border border-[#e3ddd2] min-h-[430px]">
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="mb-6"
      />
      <h3 className="text-[18px] font-bold leading-none mb-4 text-[#1f1f1f]">{title}</h3>
      <p className="text-[12px] leading-[1.45] text-[#676767] whitespace-pre-line">{description}</p>
      <div className="w-14 h-[5px] bg-[#9747FF] mt-8 mx-auto rounded-full" />
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

      <div className="px-6 md:px-28 py-12 md:py-16 font-[600] text-[14px] md:text-[16px] leading-6">
        <p>
          At Karvaann Experiences, we design travel solutions that are thoughtful, seamless, and experience-led. Our services are structured across two core verticals: leisure travel and corporate travel, each crafted with the same attention to detail and commitment to quality.
        </p>
        <p className="mt-4">
          Whether you are planning a personal journey or managing business travel at scale, we ensure every experience feels effortless and well-executed.
        </p>
      </div>

      <section className="px-6 md:px-28 pb-14 md:pb-20">
        <div className="inline-flex font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
          Leisure Travel Services
        </div>
        <p className="mt-6 mb-6 text-[16px] text-[#6a6a6a] leading-[1.3]">
          Our leisure travel services are built for travellers who want journeys that feel personal, immersive, and memorable. From complete trip planning to individual travel components, we offer flexible solutions based on how you like to travel.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <ServiceCard
            title="Limitless Services"
            icon="/services/limitless.svg"
            description={`Limitless Trips are the heart of Karvaann Experiences. These are fully customised journeys designed around your preferences, pace and travel style.

We handpick accommodations, experiences, activities and routes to create itineraries that feel seamless and immersive. Whether you are travelling solo, as a couple, with family, or in a group, every Limitless Trip is custom-crafted so you don't have to worry about planning or coordination.

There are no fixed packages. Every journey is designed from scratch to deliver moments that leave a lasting impression.`}
          />
          <ServiceCard
            title="Standalone Services"
            icon="/services/standalone-service.svg"
            description={`For travellers who prefer flexibility or need specific services, we offer standalone travel solutions across destinations worldwide. These services can be booked independently or combined with a larger itinerary.

Our standalone services include:
- Visa assistance
- Accommodation bookings
- Transportation services including cabs, buses, trains, flights and car rentals
- Adventure and activity bookings
- Theme park, show and attraction tickets

Each service is handled with the same level of care and reliability that defines a Karvaann experience.`}
          />
        </div>

        <div className="mt-10 inline-flex font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
          Corporate Travel Services
        </div>
        <p className="mt-6 text-[16px] text-[#6a6a6a] leading-[1.3]">
          Karvaann Experiences offers end-to-end corporate travel and event solutions designed to make business travel efficient, smooth, and impactful. From executive movements to large-scale corporate events, we manage logistics with clarity and precision.
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <ServiceCard
            title="Business Travel Solutions"
            icon="/services/business-travel-solutions.svg"
            description={`We take the stress out of corporate travel with efficient and cost-effective solutions tailored for professionals on the move.

Our corporate travel services include:
- Flight, train and ground transportation bookings with flexible policies
- Premium hotel partnerships with special corporate rates
- Executive stays and meeting-friendly accommodations
- Visa assistance for corporate travellers

Every corporate journey is planned to ensure comfort, productivity and seamless execution.`}
          />
          <ServiceCard
            title="MICE (Meetings, Incentives, Conferences & Exhibitions)"
            icon="/services/mice.svg"
            description={`With over three years of experience executing MICE travel, we curate corporate events that go beyond logistics and deliver meaningful experiences.

Meetings & Conferences
Venue sourcing, AV setup, speaker coordination, and complete event management for smooth and professional execution.

Incentive Travel
Handpicked retreats and immersive travel experiences designed to reward top performers and strengthen team bonding.

Corporate Exhibitions
End-to-end exhibition management including stall design, logistics, hospitality and on-ground coordination for a strong brand presence.

Whether it's a group of 40 or 400+, we ensure flawless planning and execution at every scale.`}
          />
        </div>

        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="w-full lg:w-[74%]">
            <ServiceCard
              title="Value-Added Corporate Services"
              icon="/services/value-added.svg"
              description={`To support long-term corporate partnerships, we also offer value-added services that enhance efficiency and optimise costs.

These include:
- GST input credit support on corporate bookings
- Flexible credit limits for regular corporate clients
- Dedicated relationship managers for pre-event, on-ground and post-event support
- 24/7 assistance for real-time issue resolution
- Complimentary upgrades and exclusive benefits for frequent business travellers`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
