import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Karvaann hero background"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center scale-x-[-1]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-1/2 -translate-y-2/3 left-4 md:left-14 right-4 font-heading font-bold text-[#FFF] flex flex-col md:flex-row items-stretch gap-3 md:gap-4 uppercase">
        <p className="text-[28px] md:text-[38px] pt-0 md:pt-[0px]">Tired of the</p>
        <div className="text-[40px] md:text-[50px] leading-[1.05]">
          <p>
            <span className="tw tw-1">SAME HOTEL</span>
          </p>
          <p>
            <span className="tw tw-2">SAME SIGHTSEEING LISTS</span>
          </p>
          <p>
            <span className="tw tw-3">SAME COPY-PASTE TRIPS ?</span>
          </p>

          <p className="font-sans font-medium text-[16px] md:text-[24px] mt-4 md:mt-8 mb-2">This is where your Experience begins</p>

          <Link
            href="/customised"
            className="bg-[#FFD425] hover:bg-[#FFF2BF] transition duration-200 ease-in-out font-medium rounded-[4px] font-sans text-[#333333] text-[16px] md:text-[24px] px-4 py-2"
          >
            Know More
          </Link>
        </div>
      </div>

      <Image
        src="quote.svg"
        className="left-1/2 -translate-x-1/2 absolute bottom-10 md:bottom-24 w-[220px] md:w-[400px]"
        width={400}
        height={200}
        alt="For Travellers By Travllers"
      />
    </section>
  );
}
