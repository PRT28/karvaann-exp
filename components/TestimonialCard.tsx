import { normalizeImageUrl } from "@/lib/helper";
import Image from "next/image";

export type TestimonialCardData = {
  image: string;
  name: string;
  profilePicSrc: string;
  comment: string;
  location: string;
  googleCommentLink: string;
};

type TestimonialCardProps = {
  testimonial: TestimonialCardData;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <a
      href={testimonial.googleCommentLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden w-120"
      aria-label={`Open Google testimonial by ${testimonial.name}`}
    >
      <div className="w-90 relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden md:h-[360px] lg:h-[430px]">
          <Image
            src={normalizeImageUrl(testimonial.image)}
            alt={`${testimonial.location} testimonial background`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
      </div>
        
        <div className="absolute w-[270px] z-10  bottom-4 md:inset-y-7 md:right-[5px]">
            <div className="h-full rounded-[24px] bg-[#FFFFFF] p-4 shadow-[0_12px_24px_rgba(0,0,0,0.16)] flex flex-col">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d3d3d9]">
                  <Image
                    src={normalizeImageUrl(testimonial.profilePicSrc)}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
                <h3 className="font-sans text-[18px] font-bold text-[#6F2DBD]">
                  {testimonial.name}
                </h3>
              </div>

              <p className="mt-5 text-[12px] text-[#00000] font-sans whitespace-pre-line">
                {testimonial.comment}
              </p>

              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="font-sans text-[18px] font-bold text-[#6F2DBD]">
                  {testimonial.location}
                </span>
                <Image
                  src="/google.svg"
                  alt="Google Link"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
    </a>
  );
}
