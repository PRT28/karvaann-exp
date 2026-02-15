import type { Metadata } from "next";
import Image from "next/image";
import data from "@/data/data.json";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import HomeTripGrid from "@/components/HomeTripGrid";

export const metadata: Metadata = {
  title: "Home | Karvaann Experiences",
  description: "Explore curated international and India trips, immersive travel stories, and personalized journeys by Karvaann Experiences.",
  keywords: [
    "Karvaann home",
    "international trips",
    "India trips",
    "travel packages",
    "personalized journeys",
  ],
  openGraph: {
    title: "Home | Karvaann Experiences",
    description: "Explore curated international and India trips, immersive travel stories, and personalized journeys by Karvaann Experiences.",
    siteName: "Karvaann Experiences",
    type: "website",
    locale: "en_IN",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTripGrid
        title="INTERNATIONAL TRIPS"
        trips={data.international}
        className="px-20 md:px-28 py-10 md:py-6 [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
      />
      <HomeTripGrid
        title="INDIA TRIPS"
        trips={data.india}
        className="px-6 md:px-28 py-10 md:py-6 [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
      />
      <section className="relative h-[220px] md:h-[300px] mx-6 md:mx-28 my-10 md:my-6 rounded-[33px] overflow-hidden [content-visibility:auto] [contain-intrinsic-size:1px_320px]">
        <Image
          src="https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="limitless"
          className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
          width={2000}
          height={2000}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-6 md:px-12 py-6 md:py-8">
          <h1 className="text-[#FFF] font-bold font-heading text-[28px] md:text-[60px]">Don&apos;t have a destination in mind?</h1>
          <h4 className="text-[#FFF] mb-4 md:mb-8 font-medium font-sans text-[16px] md:text-[32px]">Good. That&apos;s where limitless journeys begin</h4>
          <Link href="/customised" className="mt-4 md:mt-8 bg-[#FFD425] hover:bg-[#FFF2BF] transition duration-200 ease-in-out font-medium rounded-[4px] font-sans text-[#333333] text-[16px] md:text-[24px] px-4 py-2">Know More</Link>
        </div>
      </section>
      
      <section className="px-6 md:px-28 py-10 md:py-6 [content-visibility:auto] [contain-intrinsic-size:1px_1200px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-[#493628] font-bold font-heading text-[44px] md:text-[90px]">WHY KARVAANN?</h1>
            <p className="font-sans text-[16px] md:text-[14px]">
              At Karvaann, we craft journeys that stay with you. Designed with care and authenticity, our focus is on creating immersive travel experiences that make you pause and say “wow”, the kind that stay with you long after your trip ends.<br /><br />

              We&apos;ve built a community of like-minded travellers who believe in exploring destinations deeply and meaningfully. Our curated itineraries allow you to truly experience a place, its stories, culture, and rhythm, rather than simply visiting it.<br /><br />

              If you&apos;re looking for a journey that feels personal, enriching and unforgettable, Karvaann Experiences is where you belong.
            </p>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="limitless"
            width={800}
            height={600}
            className="w-full md:w-1/3 h-100 object-cover rounded-[12px]"
          />
        </div>
        
        <div className="grid mt-10 md:mt-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/trust.svg"
              alt="trust"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-24 h-24 md:w-28 md:h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[16px] md:text-[18px] text-center text-[#0D0D0D]">Trust &<br />Discretion</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/exp.svg"
              alt="exp"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-24 h-24 md:w-28 md:h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[16px] md:text-[18px] text-[#0D0D0D]">Experience<br />First Travel</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/authenticity.svg"
              alt="Authenticity"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-24 h-24 md:w-28 md:h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[16px] md:text-[18px] text-[#0D0D0D]">Authenticity</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/detail.svg"
              alt="Detail"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-24 h-24 md:w-28 md:h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[16px] md:text-[18px] text-[#0D0D0D]">Attention to Detail</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/personalize.svg"
              alt="Personalisation"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-24 h-24 md:w-28 md:h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[16px] md:text-[18px] text-[#0D0D0D]">Personalisation</p>
          </div>

        </div>
        
      </section>

      <section className="px-6 md:px-28 py-10 md:py-18 [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
        <h1 className="text-[#493628] font-bold font-heading text-[44px] md:text-[108px]">OUR SERVICES</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <GlassCard
            title="Limitless"
            description="Personalized itineraries tailored to each traveller&apos;s preferences"
            imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <GlassCard
            title="Standalone Services"
            description="Personalized itineraries tailored to each traveller&apos;s preferences"
            imageSrc="https://images.unsplash.com/photo-1603881359318-e2bc03deaaee?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <GlassCard
            title="Corporate Travel"
            description="Personalized itineraries tailored to each traveller&apos;s preferences"
            imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>


    </>
  );
}
