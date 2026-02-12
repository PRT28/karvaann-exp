import Image from "next/image";

const testimonials = [
  {
    name: "Aparna Verma",
    place: "New Delhi",
    text: "The planning was seamless and every detail felt personalized. We never felt rushed, just cared for.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "N. Sharma",
    place: "Chandigarh",
    text: "Hotels, transfers, activities -- all perfectly timed. Karvaann made our family trip effortless.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Aditi Rana",
    place: "Bengaluru",
    text: "The local experiences were unforgettable. It felt curated by someone who truly knows travel.",
    img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-transparent px-6 md:px-20 py-16">
      <div className="max-w-6xl">
        <h2 className="font-heading uppercase text-[42px] md:text-[56px] text-[#4b3b2b]">
          Testimonials
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#FFF5DA] rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-heading uppercase text-[18px] text-[#3f2f23]">{t.name}</p>
                  <p className="text-[13px] text-[#6a594d] font-sans">{t.place}</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-6 font-sans text-[#5b4b3f]">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
