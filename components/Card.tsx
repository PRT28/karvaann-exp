// components/Card.tsx
import Image from "next/image";

type CardProps = {
  title: string;
  imageSrc: string;
  rating?: number;
};

export default function Card({
  title,
  imageSrc,
  rating = 5.0
}: CardProps) {
  return (
      <div className="relative w-full max-w-[320px] overflow-hidden rounded-[24px] aspect-[3/4]">

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* Background image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={false}
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 320px"
        />

        {/* Soft top highlight (like the screenshot) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent" />

        {/* Rating pill */}
        <div className="absolute top-5 z-11 right-5">
          <div className="flex items-center gap-3 rounded-[10px] bg-[#141414] px-4 py-2">
            <span className="text-[18px] font-extrabold leading-none text-[#FFD54A]">
              {rating.toFixed(1)}
            </span>
            <StarIcon className="h-5 w-5 text-[#FFD54A]" />
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 z-11 bottom-0">
          {/* subtle readability fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

          <div className="relative flex items-end justify-between px-6 pb-6">
            <div className="text-white">
              <div className="text-[24px] font-bold tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                {title}
              </div>
            </div>

            <button
              type="button"
              aria-label={`Open ${title}`}
              className={[
                "h-8 w-8 rounded-full",
                "border-[4px] border-[#FFD54A]",
                "grid place-items-center",
                "bg-black/0 hover:bg-black/10 active:scale-[0.98]",
                "transition",
              ].join(" ")}
            >
              <ArrowRightIcon className="h-6 w-6 text-[#FFD54A]" />
            </button>
          </div>
        </div>
      </div>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.94 6.13 6.76.98-4.9 4.78 1.16 6.73L12 18.9l-6.0 3.22 1.16-6.73-4.9-4.78 6.76-.98L12 2.5z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
