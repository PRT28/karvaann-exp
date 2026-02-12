import data from "@/data/terms.json";

export default function ServicesPage() {
  return (
    <main className="font-sans text-[#4b3b2b]">
      <section className="relative min-h-[280px] md:min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553709724-ccfb0930663f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8 md:px-20 py-16 md:py-24">
          <div className="font-heading uppercase text-[#FFC709] text-[70px] md:text-[96px] leading-none tracking-wide">
            T&amp;C
          </div>
          <div className="w-[800px] mt-8 bg-[#FFC709] h-[2px]" />
        </div>
      </section>

      <section className="px-6 md:px-20 py-16">
        <div className="max-w-5xl">
          <div className="inline-flex font-bold items-center gap-3 bg-[#FFC709] text-[#3b2a1f] font-sans uppercase px-4 py-2 rounded-sm text-[20px]">
            Terms &amp; Conditions
          </div>
          <p className="mt-6 text-[15px] md:text-[16px] leading-7 font-sans">
            Please read these terms carefully before confirming your travel. By booking with Karvaann Experiences, you agree to the policies below.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 max-w-5xl">
          {data.terms.map((section) => (
            <div key={section.title} className="border-b border-[#E7D9B0] pb-10">
              <h3 className="font-sans uppercase text-[26px] md:text-[30px] text-[#3f2f23]">
                {section.title}
              </h3>
              <div className="mt-4 space-y-3 text-[15px] md:text-[16px] leading-7 font-sans">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-7 font-sans">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
