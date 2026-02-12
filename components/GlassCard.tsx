import Image from "next/image";
import Link from "next/link";

type GlassCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
};

export default function GlassCard({
  title,
  description,
  imageSrc,
  href = "#",
}: GlassCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[32px] bg-neutral-200 w-full"
    >
      {/* Image */}
      <div className="relative h-[360px] sm:h-[420px] md:h-[500px] w-full max-w-[450px] overflow-hidden rounded-[32px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition duration-500"
          sizes="450px"
        />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20 transition duration-500" />

        {/* Arrow Button */}
        <div className="absolute top-4 md:top-6 right-4 md:right-16 z-20">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-white transition duration-300 group-hover:bg-white/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>

        {/* Bottom Glass Panel */}
        <div className="absolute bottom-0 left-0 w-full transition-all duration-500 ease-out
                        h-[110px] group-hover:h-[150px]">

          {/* Glass blur background */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md 
                          group-hover:bg-white/25 transition duration-500" />

          {/* Text Content */}
          <div className="relative z-10 px-6 md:px-8 py-4 text-white">
            <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>

            <p
              className="mt-3 md:mt-4 text-sm md:text-lg line-clamp-1 overflow-hidden opacity-100 translate-y-0 transition-all duration-500
                          group-hover:opacity-100 group-hover:translate-y-0 group-hover:line-clamp-none"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
