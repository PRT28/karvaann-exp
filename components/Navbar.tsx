import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-[#493628] flex flex-row justify-between items-center px-10 py-4 border-b-[2px] border-[#FFC709]">
            <Image src="/logo.svg" width={150} height={150} alt="Karvaann Logo" />

            <div className="flex flex-row gap-8 items-center font-sans font-medium text-[#FFF]">
                <Link href="/">Home</Link>
                <Link href="about">About us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/customised">Customised</Link>
                <Link href="tel:+919540001036" className="border-[1px] p-2 rounded-[45px] border-white flex flex-row items-center gap-3">
                    <Image src="call.svg" width={15} height={15} alt="Call" />
                    <p>+91 95400 01036</p>
                </Link>
            </div>

            

        </nav>
    );
}