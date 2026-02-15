"use client";

import { useState } from "react";
import Card from "@/components/Card";
import DestinationLeadModal from "@/components/DestinationLeadModal";

type TripItem = {
  name: string;
  img: string;
};

type HomeTripGridProps = {
  title: string;
  trips: TripItem[];
  className?: string;
};

export default function HomeTripGrid({ title, trips, className = "" }: HomeTripGridProps) {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <>
      <section className={className}>
        <h1 className="text-[#493628] font-bold font-heading text-[44px] md:text-[90px]">{title}</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trips.map((item) => (
            <Card
              title={item.name}
              imageSrc={item.img}
              rating={5.0}
              key={item.name}
              onClick={() => setSelectedDestination(item.name)}
            />
          ))}
        </div>
      </section>
      <DestinationLeadModal
        open={selectedDestination !== null}
        destination={selectedDestination ?? ""}
        onClose={() => setSelectedDestination(null)}
      />
    </>
  );
}
