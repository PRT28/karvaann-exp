import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-[#493628] flex flex-col md:flex-row justify-between items-center px-6 md:px-28 py-3 md:py-2 border-b-[2px] border-[#FFC709] gap-4 md:gap-0">
            <Image src="/logo.svg" width={80} height={80} alt="Karvaann Logo" className="shrink-0" />

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 items-center font-sans font-medium text-[#FFF] text-[12px] md:text-[12px]">
                <Link href="/" className="border-b-2 border-transparent hover:border-white transition-colors">Home</Link>
                <Link href="/about" className="border-b-2 border-transparent hover:border-white transition-colors">About us</Link>
                <Link href="/services" className="border-b-2 border-transparent hover:border-white transition-colors">Our Services</Link>
                <Link href="/contact" className="border-b-2 border-transparent hover:border-white transition-colors">Contact Us</Link>
                <Link href="tel:+919540001036" className="border-[1px] px-2 py-1 rounded-[45px] border-white flex flex-row items-center gap-2 text-[12px] md:text-[12px]">
                    <Image src="/call.svg" width={10} height={10} alt="Call" />
                    <p>+91 95400 01036</p>
                </Link>
            </div>
        </nav>
    );
}
