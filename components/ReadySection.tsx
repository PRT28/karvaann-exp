export default function ReadySection() {
  return (
    <section className="bg-transparent px-20 py-16 my-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <h1 className="font-heading uppercase text-[124px] text-[#4b3b2b] font-extrabold">
            Ready for your next Karvaann?
          </h1>
          
        </div>
        <form className="bg-[#FFF4C7] rounded-md px-6 py-12 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <div className="space-y-4">
            <input
              className="w-full border border-[#E4D6A8] bg-white rounded-sm px-3 py-2 text-[14px] font-sans"
              placeholder="Destination"
              type="text"
            />
            <input
              className="w-full border border-[#E4D6A8] bg-white rounded-sm px-3 py-2 text-[14px] font-sans"
              placeholder="Travel Date"
              type="date"
            />
            <input
              className="w-full border border-[#E4D6A8] bg-white rounded-sm px-3 py-2 text-[14px] font-sans"
              placeholder="Whatsapp Number"
              type="tel"
            />
            <input
              className="w-full border border-[#E4D6A8] bg-white rounded-sm px-3 py-2 text-[14px] font-sans"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="w-full border border-[#E4D6A8] bg-white rounded-sm px-3 py-2 text-[14px] font-sans min-h-[90px]"
              placeholder="Tell us about your trip"
            />
            <button
              type="button"
              className="w-full bg-[#F3C300] hover:bg-[#FFD425] transition text-[#2f241b] font-semibold rounded-sm py-2 font-sans"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
