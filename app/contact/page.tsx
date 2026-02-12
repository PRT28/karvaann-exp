export default function ContactPage() {
  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative min-h-[260px] md:min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 px-6 md:px-20 py-16 md:py-24">
          <div className="font-heading uppercase text-[#FFC709] text-[44px] md:text-[96px] leading-tight tracking-wide">
            Contact Us
          </div>
          <div className="w-[220px] md:w-[520px] mt-4 bg-[#FFC709] h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 md:py-16 text-center">
        <div className="inline-flex font-bold items-center gap-3 bg-[#FFE9A6] text-[#3b2a1f] font-sans px-6 py-2 rounded-md text-[14px] md:text-[16px] shadow-sm">
          Let’s start a conversation
        </div>
        <p className="mt-6 md:mt-8 text-[15px] md:text-[18px] text-[#7a6a5d] max-w-3xl mx-auto leading-7">
          Whether you’re planning your next journey, exploring corporate travel solutions, or simply have a question, we’re here to help. Reach out to us and our team will guide you every step of the way.
        </p>
      </section>

      <section className="px-6 md:px-20 py-6 md:py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[22px] md:text-[32px] font-semibold text-[#6a594d]">Get in Touch</h2>
          <p className="text-[16px] text-[#8a7a6d] mt-2">Call or WhatsApp</p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-[#9b9086]">
            <span>+91 95400 01036</span>
            <span className="hidden md:inline-block w-[1px] h-4 bg-[#c4b8ac]" />
            <span>+91 70423 21010</span>
          </div>
          <div className="mt-6 h-[1px] bg-[#d9cdbf]" />
          <p className="mt-4 text-[#9b9086]">info@karvaannexperiences.com</p>
          <div className="mt-4 h-[1px] bg-[#d9cdbf]" />
          <button
            type="button"
            className="mt-6 bg-[#F3C300] hover:bg-[#FFD425] transition text-[#2f241b] font-semibold rounded-sm px-6 py-2"
          >
            contact now
          </button>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[22px] md:text-[32px] font-semibold text-[#6a594d]">Business Hours</h2>
          <p className="mt-4 text-[#8a7a6d]">Monday to Saturday</p>
          <div className="mt-4 h-[1px] bg-[#d9cdbf]" />
          <p className="mt-4 text-[#8a7a6d]">10:00 AM – 7:00 PM (IST)</p>
        </div>
      </section>
    </main>
  );
}
