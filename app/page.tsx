import Card from "@/components/Card";
import Image from "next/image";
import data from "@/data/data.json";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center scale-x-[-1]" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute top-1/2 -translate-y-2/3 left-7 font-heading font-bold text-[#FFF] flex items-start gap-4 uppercase">
          <p className="text-[48px] pt-[12px]">Tired of the</p>
          <div className="text-[70px]">
            <p>
              <span className="tw tw-1">SAME HOTEL</span>
            </p>
            <p>
              <span className="tw tw-2">SAME SIGHTSEEING LISTS,</span>
            </p>
            <p>
              <span className="tw tw-3">SAME COPY-PASTE TRIPS ?</span>
            </p>

            <p className="font-sans text-[30px] mt-8 mb-2">This is where your Experience begins</p>

            <button className="bg-[#FFD425] hover:bg-[#FFF2BF] transition duration-200 ease-in-out font-medium rounded-[4px] font-sans text-[#333333] text-[24px] px-4 py-2">Know More</button>
          </div>
        </div>

        <Image src="quote.svg" className="left-1/2 -translate-x-1/2 absolute bottom-24" width={400} height={200} alt="For Travellers By Travllers" />


      </section>
      <section className="px-28 py-18">
        <h1 className="text-[#493628] font-bold font-heading text-[108px]">INTERNATIONAL TRIPS</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            data.international.map(items => 
            <Card
              title={items.name}
              imageSrc={items.img}
              rating={5.0}
              key={items.name}
            />
          )
          }
        </div>
      </section>
      <section className="px-28 py-18">
        <h1 className="text-[#493628] font-bold font-heading text-[108px]">INDIA TRIPS</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            data.india.map(items => 
            <Card
              title={items.name}
              imageSrc={items.img}
              rating={5.0}
              key={items.name}
            />
          )
          }
        </div>
      </section>
      <section className="relative h-[300px] mx-28 my-18 rounded-[33px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="limitless"
          className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
          width={2000}
          height={2000}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-12 py-8">
          <h1 className="text-[#FFF] font-bold font-heading text-[60px]">Don&apos;t have a destination in mind?</h1>
          <h4 className="text-[#FFF] font-medium font-sans text-[32px]">Good. That&apos;s where limitless journeys begin</h4>
          <button className="mt-8 bg-[#FFD425] hover:bg-[#FFF2BF] transition duration-200 ease-in-out font-medium rounded-[4px] font-sans text-[#333333] text-[24px] px-4 py-2">Know More</button>
        </div>
      </section>
      
      <section className="px-28 py-18">
        <div className="flex flex-row items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-[#493628] font-bold font-heading text-[100px]">WHY KARVAANN?</h1>
            <p className="font-sans text-[18px]">
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
            className="w-1/3 h-100 object-cover rounded-[12px]"
          />
        </div>
        
        <div className="grid mt-18 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/trust.svg"
              alt="trust"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-28 h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[18px] text-center text-[#0D0D0D]">Trust &<br />Discretion</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/exp.svg"
              alt="exp"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-28 h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[18px] text-[#0D0D0D]">Experience<br />First Travel</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/authenticity.svg"
              alt="Authenticity"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-28 h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[18px] text-[#0D0D0D]">Authenticity</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/detail.svg"
              alt="Detail"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-28 h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[18px] text-[#0D0D0D]">Attention to Detail</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/why/personalize.svg"
              alt="Personalisation"
              className=" bg-[#FFEB99] hover:bg-[#FFF2BF] p-4 rounded-full w-28 h-28 hover:w-[9rem] hover:h-[9rem] transition-all duration-200 ease-in-out"
              width={100}
              height={100}
            />
            <p className="font-sans text-[18px] text-[#0D0D0D]">Personalisation</p>
          </div>

        </div>
        
      </section>

      <section className="px-28 py-18">
        <h1 className="text-[#493628] font-bold font-heading text-[108px]">OUR SERVICES</h1>
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
