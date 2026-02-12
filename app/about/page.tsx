import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative min-h-[280px] md:min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553709724-ccfb0930663f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8 md:px-20 py-16 md:py-24">
          <div className="font-heading uppercase text-[#FFC709] text-[70px] md:text-[96px] leading-none tracking-wide">
            About Us
          </div>
          <div className="w-[800px] mt-8 bg-[#FFC709] h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-20 py-16">
        <div className="inline-flex font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
            About Us
        </div>
        <div className="flex flex-row items-center justify-between">
            <p className="font-sans text-[18px] w-1/2">
                Karvaann Experiences is an experiential travel company built on the belief that travel should be personal, immersive, and meaningful, not rushed or transactional. We specialise in creating customised travel experiences for travellers who seek depth, comfort, and authenticity in every journey.<br /><br />

                From thoughtfully designed leisure holidays to curated corporate travel solutions, our approach goes beyond standard itineraries. Every journey is crafted with attention to detail, balancing comfort with discovery and iconic highlights with offbeat experiences.<br /><br />

                Run by travellers, for travellers, Karvaann Experiences focuses on designing journeys that leave lasting impressions on people, not places.<br /><br />
            </p>
            <Image
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
                width={800}
                height={600}
                className="w-1/3 h-100 object-cover rounded-[12px]"
            />
        </div>
      </section>
      <section className="px-6 md:px-20 py-16 flex flex-row items-center justify-between gap-10">
        <div className="relative w-[25%] flex flex-col items-center bg-white shadow-md rounded-[12px] p-12 text-center">
            <Image
                src="/about/vision.svg"
                alt="vision"
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-[-50px]"
            />
            <h3 className="text-[20px] font-bold mt-8 mb-8">Vision</h3>
            <p>To redefine travel by creating meaningful, immersive experiences that connect people to culture, nature and communities. We aim to transform every journey into an experience that makes you fall in love with travel all over again.</p>
            <div className="w-18 h-2 bg-[#9747FF] mt-8 rounded-lg " />
        </div>
        <div className="relative w-[25%] flex flex-col items-center bg-white shadow-md rounded-[12px] p-12 text-center">
            <Image
                src="/about/mission.svg"
                alt="mission"
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-[-50px]"
            />
            <h3 className="text-[20px] font-bold mt-8 mb-8">Mission</h3>
            <p>To make travel seamless, enriching and accessible by curating authentic experiences worldwide. We focus on culture-driven, eco-friendly adventures that go beyond sightseeing, ensuring every trip leaves a lasting impact on both the traveller and the world.</p>
            <div className="w-18 h-2 bg-[#9747FF] mt-8 rounded-lg " />
        </div>
        <div className="relative w-[25%] flex flex-col items-center bg-white shadow-md rounded-[12px] p-12 text-center">
            <Image
                src="/about/usp.svg"
                alt="usp"
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-[-50px]"
            />
            <h3 className="text-[20px] font-bold mt-8 mb-8">USP</h3>
            <p>Our USP lies in our Limitless trips that leave a lasting impression. We don&apos;t just plan your journey; we add a hint of magic to make your experience unforgettable. Our attention to detail is unmatched as we custom-craft your trip to give you jaw-dropping moments you&apos;ll cherish forever.</p>
            <div className="w-18 h-2 bg-[#9747FF] mt-8 rounded-lg " />
        </div>
      </section>
      <section className="px-6 md:px-20 py-16">
        <div className="inline-flex font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
            Why Karvaann?
        </div>
        <div className="flex flex-row items-center justify-between">
            <p className="font-sans text-[18px] w-1/2">
                At Karvaann, we craft journeys that stay with you. Designed with care and authenticity, our focus is on creating immersive travel experiences that make you pause and say “wow”, the kind that stay with you long after your trip ends.<br /><br />

                We&apos;ve built a community of like-minded travellers who believe in exploring destinations deeply and meaningfully. Our curated itineraries allow you to truly experience a place, its stories, culture, and rhythm, rather than simply visiting it.<br /><br />

                If you&apos;re looking for a journey that feels personal, enriching and unforgettable, Karvaann Experiences is where you belong.
            </p>
            <Image
                src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Why Karvaann"
                width={800}
                height={600}
                className="w-1/3 h-100 object-cover rounded-[12px]"
            />
        </div>
      </section>
      <section className="px-6 md:px-20 py-16">
        <div className="inline-flex font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
            Our Approach?
        </div>
        <div className="flex flex-row items-center justify-between">
            <p className="font-sans text-[18px] w-1/2">
                Every journey begins with understanding the traveller. We take the time to learn your travel style, expectations and priorities before crafting a customised itinerary that aligns with your vision.<br /><br />

                From destination planning and accommodation selection to transfers, experiences, and on-trip support, our team ensures clarity, transparency, and seamless execution at every stage of the journey.<br /><br />

                No fixed templates. No rushed decisions. Just thoughtfully designed travel experiences.
            </p>
            <Image
                src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Why Karvaann"
                width={500}
                height={500}
                className="w-1/3 h-100 object-cover rounded-[12px]"
            />
        </div>
      </section>
      <section className="px-6 md:px-20 py-16">
        <h1 className="text-[#493628] font-bold font-heading text-[100px]">Meet the minds behind the experiences</h1>
        <div className="flex flex-row mt-48 items-center gap-8">
            <Image
                src="/founders/vishwanath.svg"
                alt="Vishwanath Manocha"
                width={500}
                height={500}
            />
            <div className="">
                <h1 className="font-heading text-[#493628] font-bold text-[60px]">Vishwanath Manocha</h1>
                <div className="inline-flex mt-8 mb-12 font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
                    Founder
                </div>
                <p>Presenting Vishwanath, our founder who left his B.Tech background behind to revolutionize travel in India. Spotting a gap in over-commercialized tourism, he founded Karvaann to offer culturally rich and sustainable experiences. At 27, he&apos;sredefining authentic travel. When he&apos;s not curating journeys, you&apos;ll find him on the cricket or football field</p>
            </div>
        </div>
        <div className="flex flex-row mt-48 items-center gap-8">
            <Image
                src="/founders/yash.svg"
                alt="Yash Manocha"
                width={500}
                height={500}
            />
            <div className="">
                <h1 className="font-heading text-[#493628] font-bold text-[60px]">Yash Manocha</h1>
                <div className="inline-flex mt-8 mb-12 font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
                    Co-Founder
                </div>
                <p>Yash, our adventure-loving co-founder, has a mountaineering certification and an insatiable passion for travel. A social butterfly with a sharp eye for detail, he balances fun and work effortlessly. His boundless energy ensures every Karvaann trip is as thrilling as it is unforgettable.</p>
            </div>
        </div>
        <div className="flex flex-row mt-48 items-center gap-8">
            <Image
                src="/founders/shivam.svg"
                alt="Shivam Manocha"
                width={600}
                height={600}
            />
            <div className="">
                <h1 className="font-heading text-[#493628] font-bold text-[60px]">Shivam Manocha</h1>
                <div className="inline-flex mt-8 mb-12 font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
                    Co-Founder
                </div>
                <p>Yash, our adventure-loving co-founder, has a mountaineering certification and an insatiable passion for travel. A social butterfly with a sharp eye for detail, he balances fun and work effortlessly. His boundless energy ensures every Karvaann trip is as thrilling as it is unforgettable.</p>
            </div>
        </div>
      </section>

    </main>
  );
}
