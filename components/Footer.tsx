import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      aria-label={label}
      className="w-10 h-10 rounded-md border border-white/70 flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#4b3628] text-white">
      <div className="p-18">
        <div className="">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Image src="/logo.svg" width={140} height={160} alt="Karvaann Experiences" />
            <p className="text-[16px] md:text-[18px] font-sans text-white/90 max-w-xl">
              Join Karvaann Experiences&apos; Whatsapp community &amp; stay upto date on special offers and events.
            </p>
            <button
              type="button"
              className="bg-[#FFD32A] text-[#2f241b] font-semibold rounded-md px-8 py-3 flex items-center gap-4 min-w-[220px] w-1/3 justify-center"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1fb64f]">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="white">
                  <path d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.9 12.1l-.3.6a8 8 0 0 1-8.6 3.8l-.5-.1-2.9.7.8-2.8-.1-.5A8 8 0 0 1 12 4zm-3.1 4.3c-.2 0-.5 0-.7.2-.3.2-.9.8-1 1.5-.1.7.1 1.5.4 2.1.3.6 1.2 2.1 2.9 3.5 1.7 1.3 3.1 1.7 3.7 1.8.6.1 1.3.1 1.8-.2.5-.3 1.1-1 1.2-1.4.1-.4.1-.7 0-.8-.1-.1-.3-.2-.6-.4l-1.4-.7c-.2-.1-.4-.1-.6.1l-.5.7c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.5.1-.2.1-.4 0-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5z" />
                </svg>
              </span>
              Join now
            </button>
          </div>

          <div className="mt-8 border-t border-white/70" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-[16px]">
            <div>
              <p className="font-semibold mb-4">About Karvaann Experiences</p>
              <div className="space-y-2 text-white/90">
                <p>About us</p>
                <p>Contact us</p>
                <p>Other services</p>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">For Travellers</p>
              <div className="space-y-2 text-white/90">
                <p>Limitless Booking</p>
                <p>Standalone Booking</p>
                <p>Corporate Booking</p>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Terms &amp; Condition</p>
              <div className="space-y-2 text-white/90">
                <p>T&amp;C</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Follow Us</p>
              <div className="flex items-center gap-3 mb-6">
                <SocialIcon label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.6">
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17" cy="7" r="1.2" fill="white" stroke="none" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Facebook">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                    <path d="M14 8h3V5h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v5h3v-5H17l.5-3H13.5V8.7c0-.4.3-.7.7-.7z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="YouTube">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M21 8.2c-.2-1-1-1.8-2-2-1.8-.4-5-.4-7-.4s-5.2 0-7 .4c-1 .2-1.8 1-2 2C3 10 3 12 3 12s0 2 .3 3.8c.2 1 1 1.8 2 2 1.8.4 5 .4 7 .4s5.2 0 7-.4c1-.2 1.8-1 2-2 .3-1.8.3-3.8.3-3.8s0-2-.3-3.8z" />
                    <path d="M10 9.5v5l5-2.5-5-2.5z" fill="#4b3628" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M6.5 9.5H4v10h2.5v-10zM5.2 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10 9.5h2.4v1.4h.1c.3-.6 1.1-1.6 2.6-1.6 2.8 0 3.3 1.8 3.3 4.1v6.1H16v-5.4c0-1.3 0-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9v5.5H10v-10z" />
                  </svg>
                </SocialIcon>
              </div>
              <div className="space-y-2 text-white/90">
                <p>infoKarvaannexperiences@gmail.com</p>
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
