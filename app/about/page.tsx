import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Karvaann Experiences",
  description: "Learn about Karvaann Experiences, our travel philosophy, our approach, and the team behind curated journeys.",
  keywords: [
    "about Karvaann",
    "travel company",
    "travel philosophy",
    "curated experiences",
    "travel founders",
  ],
  openGraph: {
    title: "About Us | Karvaann Experiences",
    description: "Learn about Karvaann Experiences, our travel philosophy, our approach, and the team behind curated journeys.",
    siteName: "Karvaann Experiences",
    type: "website",
    locale: "en_IN",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="font-sans">
      <section className="relative h-[160px] md:h-[260px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-28 py-14 md:py-24">
          <div className="font-heading text-[#FFC709] text-[52px] md:text-[96px] leading-none font-semibold">
            About Us
          </div>
          <div className="w-[220px] md:w-[800px] mt-6 md:mt-8 bg-[#FFC709] h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-28 py-12 md:py-16">
        <div className="inline-flex font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
            About Us
        </div>
        <div className="flex mt-10 flex-col md:flex-row items-start justify-between gap-8">
            <p className="font-sans text-[#808080] text-[12px] md:text-[16px] w-full md:w-1/2">
                Karvaann Experiences is an experiential travel company built on the belief that travel should be personal, immersive, and meaningful, not rushed or transactional. We specialise in creating customised travel experiences for travellers who seek depth, comfort, and authenticity in every journey.<br /><br />

                From thoughtfully designed leisure holidays to curated corporate travel solutions, our approach goes beyond standard itineraries. Every journey is crafted with attention to detail, balancing comfort with discovery and iconic highlights with offbeat experiences.<br /><br />

                Run by travellers, for travellers, Karvaann Experiences focuses on designing journeys that leave lasting impressions on people, not places.<br /><br />
            </p>
            <Image
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
                width={800}
                height={600}
                className="w-full md:w-1/3 h-100 object-cover rounded-[12px]"
            />
        </div>
      </section>
      <section className="px-6 md:px-28 py-12 md:py-16 flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="relative w-full md:w-[25%] flex flex-col items-center bg-white shadow-md rounded-[12px] p-10 md:p-12 text-center">
            <Image
                src="/about/vision.svg"
                alt="vision"
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-[-45px]"
            />
            <h3 className="text-[16px] font-semibold mt-8 mb-8">Vision</h3>
            <p className="text-[10px] text-[#808080]">To redefine travel by creating meaningful, immersive experiences that connect people to culture, nature and communities. We aim to transform every journey into an experience that makes you fall in love with travel all over again.</p>
            <div className="w-10 h-[4px] bg-[#9747FF] mt-8 rounded-lg " />
        </div>
        <div className="relative w-full md:w-[25%] flex flex-col items-center bg-white shadow-md rounded-[12px] p-10 md:p-12 text-center">
            <Image
                src="/about/mission.svg"
                alt="mission"
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-[-45px]"
            />
            <h3 className="text-[16px] font-semibold mt-8 mb-8">Mission</h3>
            <p className="text-[10px] text-[#808080]">To make travel seamless, enriching and accessible by curating authentic experiences worldwide. We focus on culture-driven, eco-friendly adventures that go beyond sightseeing, ensuring every trip leaves a lasting impact on both the traveller and the world.</p>
            <div className="w-10 h-[4px] bg-[#9747FF] mt-8 rounded-lg " />
        </div>
        <div className="relative w-full md:w-[25%] flex flex-col items-center bg-white shadow-md rounded-[12px] p-10 md:p-12 text-center">
            <Image
                src="/about/usp.svg"
                alt="usp"
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-[-45px]"
            />
            <h3 className="text-[16px] font-semibold mt-8 mb-8">USP</h3>
            <p className="text-[10px] text-[#808080]">Our USP lies in our Limitless trips that leave a lasting impression. We don&apos;t just plan your journey; we add a hint of magic to make your experience unforgettable. Our attention to detail is unmatched as we custom-craft your trip to give you jaw-dropping moments you&apos;ll cherish forever.</p>
            <div className="w-10 h-[4px] bg-[#9747FF] mt-8 rounded-lg " />
        </div>
      </section>
      <section className="px-6 md:px-28 py-12 md:py-16">
        <div className="inline-flex font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
            Why Karvaann?
        </div>
        <div className="flex mt-10 flex-col md:flex-row items-start justify-between gap-8">
            <p className="font-sans text-[#808080] text-[12px] md:text-[16px] w-full md:w-1/2">
                At Karvaann, we craft journeys that stay with you. Designed with care and authenticity, our focus is on creating immersive travel experiences that make you pause and say “wow”, the kind that stay with you long after your trip ends.<br /><br />

                We&apos;ve built a community of like-minded travellers who believe in exploring destinations deeply and meaningfully. Our curated itineraries allow you to truly experience a place, its stories, culture, and rhythm, rather than simply visiting it.<br /><br />

                If you&apos;re looking for a journey that feels personal, enriching and unforgettable, Karvaann Experiences is where you belong.
            </p>
            <Image
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Why Karvaann"
                width={800}
                height={600}
                className="w-full md:w-1/3 h-100 object-cover rounded-[12px]"
            />
        </div>
      </section>
      <section className="px-6 md:px-28 py-12 md:py-16">
        <div className="inline-flex font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
            Our Approach?
        </div>
        <div className="flex mt-10 flex-col md:flex-row items-start justify-between gap-8">
            <p className="font-sans text-[#808080] text-[12px] md:text-[16px] w-full md:w-1/2">
                Every journey begins with understanding the traveller. We take the time to learn your travel style, expectations and priorities before crafting a customised itinerary that aligns with your vision.<br /><br />

                From destination planning and accommodation selection to transfers, experiences, and on-trip support, our team ensures clarity, transparency, and seamless execution at every stage of the journey.<br /><br />

                No fixed templates. No rushed decisions. Just thoughtfully designed travel experiences.
            </p>
            <Image
                src="https://images.unsplash.com/photo-1699341574231-622da2d942d0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Why Karvaann"
                width={500}
                height={500}
                className="w-full md:w-1/3 h-100 object-cover rounded-[12px]"
            />
        </div>
      </section>
      <section className="px-6 md:px-28 py-12 md:py-16">
        <h1 className="text-[#493628] font-bold font-heading text-[40px] md:text-[90px]">Meet the minds behind the experiences</h1>
        <div className="flex flex-col md:flex-row mt-12 md:mt-16 items-start gap-8">
            <Image
                src="/founders/vishwanath.svg"
                alt="Vishwanath Manocha"
                width={270}
                height={270}
            />
            <div className="">
                <h1 className="font-heading text-[#493628] font-semibold text-[36px] md:text-[50px]">Vishwanath Manocha</h1>
                <div className="inline-flex mt-4 mb-8 font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
                    Founder
                </div>
                <p className="text-[#808080]">Presenting Vishwanath, our founder who left his B.Tech background behind to revolutionize travel in India. Spotting a gap in over-commercialized tourism, he founded Karvaann to offer culturally rich and sustainable experiences. At 27, he&apos;sredefining authentic travel. When he&apos;s not curating journeys, you&apos;ll find him on the cricket or football field</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row mt-16 md:mt-28 items-center gap-8">
            <Image
                src="/founders/yash.svg"
                alt="Yash Manocha"
                width={270}
                height={270}
            />
            <div className="">
                <h1 className="font-heading text-[#493628] font-semibold text-[36px] md:text-[50px]">Yash Manocha</h1>
                <div className="inline-flex mt-4 mb-8 font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
                    Co-Founder
                </div>
                <p className="text-[#808080]">Yash, our adventure-loving co-founder, has a mountaineering certification and an insatiable passion for travel. A social butterfly with a sharp eye for detail, he balances fun and work effortlessly. His boundless energy ensures every Karvaann trip is as thrilling as it is unforgettable.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row mt-16 md:mt-28 items-center gap-8">
            <Image
                src="/founders/shivam.svg"
                alt="Shivam Manocha"
                width={270}
                height={270}
            />
            <div className="">
                <h1 className="font-heading text-[#493628] font-semibold text-[36px] md:text-[50px]">Shivam Manocha</h1>
                <div className="inline-flex mt-4 mb-8 font-semibold items-center gap-3 bg-[#FFD426] text-[#3b2a1f] font-sans px-4 py-2 rounded-sm text-[18px]">
                    Co-Founder
                </div>
                <p className="text-[#808080]">Yash, our adventure-loving co-founder, has a mountaineering certification and an insatiable passion for travel. A social butterfly with a sharp eye for detail, he balances fun and work effortlessly. His boundless energy ensures every Karvaann trip is as thrilling as it is unforgettable.</p>
            </div>
        </div>
      </section>

    </main>
  );
}
