import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

function SocialIcon({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-md border border-white/70 flex items-center justify-center"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#4b3628] text-white">
      <div className="px-6 md:px-28 py-10">
        <div className="">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Image
              src="/logo.svg"
              width={126}
              height={61}
              alt="Karvaann Experiences"
              className="w-[140px] h-auto [image-rendering:-webkit-optimize-contrast]"
            />
            <p className="text-[16px] md:text-[18px] font-sans text-white/90 max-w-xl">
              Join Karvaann Experiences&apos; Whatsapp community &amp; stay upto date on special offers and events.
            </p>
            <Link
              type="button"
              href={SOCIAL_LINKS.whatsapp}
              className="bg-[#FFD32A] text-[#2f241b] font-semibold rounded-md px-8 py-3 flex items-center gap-4 w-full md:w-auto md:min-w-[220px] justify-center"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1fb64f]">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="white">
                  <path d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.9 12.1l-.3.6a8 8 0 0 1-8.6 3.8l-.5-.1-2.9.7.8-2.8-.1-.5A8 8 0 0 1 12 4zm-3.1 4.3c-.2 0-.5 0-.7.2-.3.2-.9.8-1 1.5-.1.7.1 1.5.4 2.1.3.6 1.2 2.1 2.9 3.5 1.7 1.3 3.1 1.7 3.7 1.8.6.1 1.3.1 1.8-.2.5-.3 1.1-1 1.2-1.4.1-.4.1-.7 0-.8-.1-.1-.3-.2-.6-.4l-1.4-.7c-.2-.1-.4-.1-.6.1l-.5.7c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.5.1-.2.1-.4 0-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5z" />
                </svg>
              </span>
              Join now
            </Link>
          </div>

          <div className="mt-8 border-t border-white/70" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-[16px]">
            <div>
              <p className="font-semibold mb-4">About Karvaann Experiences</p>
              <div className="space-y-2 flex flex-col gap-2 text-white/90">
                <Link href="/about">About us</Link>
                <Link href="/contact">Contact us</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">For Travellers</p>
              <div className="space-y-2 flex flex-col gap-2 text-white/90">
                <Link href="/services">Leisure Travel</Link>
                <Link href="/services">Corporate Travel</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Terms &amp; Condition</p>
              <div className="space-y-2 flex flex-col gap-2 text-white/90">
                <Link href="/terms-conditions">T&amp;C</Link>
                <Link href="/terms-conditions">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Follow Us</p>
              <div className="flex items-center gap-3 mb-6">
                <SocialIcon label="Google" href={SOCIAL_LINKS.google}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path d="M20.5 12.2c0-.6-.1-1.2-.2-1.7H12v3.3h4.8c-.2 1.1-.9 2.1-2 2.7v2.3h3.2c1.8-1.7 2.5-4 2.5-6.6z" fill="white" />
                    <path d="M12 21c2.3 0 4.3-.8 5.8-2.2l-3.2-2.3c-.9.6-2 .9-2.6.9-2 0-3.8-1.3-4.4-3.2H4.2v2.4C5.7 19.2 8.6 21 12 21z" fill="white" fillOpacity="0.8" />
                    <path d="M7.6 14.2a5.3 5.3 0 0 1 0-4.4V7.4H4.2a8.9 8.9 0 0 0 0 9.2l3.4-2.4z" fill="white" fillOpacity="0.7" />
                    <path d="M12 6.7c1.3 0 2.4.4 3.3 1.2l2.5-2.5A8.9 8.9 0 0 0 4.2 7.4l3.4 2.4C8.2 8 10 6.7 12 6.7z" fill="white" fillOpacity="0.9" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Instagram" href={SOCIAL_LINKS.instagram}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.6">
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17" cy="7" r="1.2" fill="white" stroke="none" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Facebook" href={SOCIAL_LINKS.facebook}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                    <path d="M14 8h3V5h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v5h3v-5H17l.5-3H13.5V8.7c0-.4.3-.7.7-.7z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="YouTube" href={SOCIAL_LINKS.youtube}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M21 8.2c-.2-1-1-1.8-2-2-1.8-.4-5-.4-7-.4s-5.2 0-7 .4c-1 .2-1.8 1-2 2C3 10 3 12 3 12s0 2 .3 3.8c.2 1 1 1.8 2 2 1.8.4 5 .4 7 .4s5.2 0 7-.4c1-.2 1.8-1 2-2 .3-1.8.3-3.8.3-3.8s0-2-.3-3.8z" />
                    <path d="M10 9.5v5l5-2.5-5-2.5z" fill="#4b3628" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="LinkedIn" href={SOCIAL_LINKS.linkedin}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M6.5 9.5H4v10h2.5v-10zM5.2 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10 9.5h2.4v1.4h.1c.3-.6 1.1-1.6 2.6-1.6 2.8 0 3.3 1.8 3.3 4.1v6.1H16v-5.4c0-1.3 0-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9v5.5H10v-10z" />
                  </svg>
                </SocialIcon>
              </div>
              <div className="space-y-2 text-white/90">
                <p>info@karvaanexperiences.com</p>
                <p>+91 95400 01036</p>
              </div>
            </div>
          </div>

          <Image src="/mountains.svg" className="w-full" width={140} height={160} alt="Karvaann Experiences" />
          <div className="mt-0 border-t border-white/70" />
          <div className="flex flex-row items-center justify-center mt-8 mb-4">
            <Link href="/terms-conditions">Terms & Condition | Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-mountains" aria-hidden="true" />
      <div className="h-[1px] bg-white/60" />
    </footer>
  );
}
