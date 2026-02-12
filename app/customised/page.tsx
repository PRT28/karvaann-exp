export default function CustomisedPage() {
  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative min-h-[260px] md:min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 px-6 md:px-20 py-16 md:py-24">
          <div className="font-heading uppercase text-[#FFC709] text-[40px] md:text-[96px] leading-tight tracking-wide">
            READY FOR YOUR NEXT
            <br />
            KARVAANN ?
          </div>
          <div className="w-[220px] md:w-[520px] mt-4 bg-white/80 h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto bg-[#fff7df] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-12">
          <form className="space-y-5">
            <div>
              <label className="text-[13px] font-semibold">Destination</label>
              <div className="relative mt-2">
                <input
                  className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 pr-12 text-[14px]"
                  placeholder="India"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#7a6a5d] border border-[#E4D6A8] rounded-sm px-2 py-[2px]">
                  IND
                </div>
              </div>
            </div>

            <div>
              <label className="text-[13px] font-semibold">Travel Date</label>
              <div className="relative mt-2">
                <input
                  type="date"
                  className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px]"
                />
              </div>
            </div>

            <div>
              <label className="text-[13px] font-semibold">Whatsapp number</label>
              <div className="relative mt-2">
                <input
                  className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px]"
                  placeholder="+91"
                />
              </div>
            </div>

            <div>
              <label className="text-[13px] font-semibold">Email</label>
              <input
                className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px] mt-2"
                placeholder="Example@gmail.com"
              />
            </div>

            <div>
              <label className="text-[13px] font-semibold">Trip Notes</label>
              <textarea
                className="w-full border border-[#E4D6A8] bg-white rounded-md px-4 py-2 text-[14px] mt-2 min-h-[110px]"
                placeholder="Notes -"
              />
            </div>

            <button
              type="button"
              className="w-full bg-[#F3C300] hover:bg-[#FFD425] transition text-[#2f241b] font-semibold rounded-sm py-2"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-16 md:pb-24">
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
