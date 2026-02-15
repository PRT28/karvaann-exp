import testimonials from "@/data/testimonials.json";
import TestimonialCard, { type TestimonialCardData } from "@/components/TestimonialCard";

export default function Testimonials() {
  const testimonialItems = testimonials as TestimonialCardData[];

  return (
    <section className="bg-transparent px-6 md:px-28 py-16">
      <div className="max-w-6xl">
        <h2 className="font-heading uppercase text-[42px] md:text-[56px] text-[#4b3b2b]">
          Testimonials
        </h2>
        <div className="mt-10 w-[80vw] overflow-x-scroll">
          <div style={{width: 'fit-content'}} className="flex flex-nowrap gap-8  pb-2">
            {testimonialItems.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-${testimonial.location}`} testimonial={testimonial} />
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
