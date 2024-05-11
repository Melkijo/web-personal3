import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="w-full h-[0.25px] bg-white"></div>
      <div className="flex justify-start gap-6 flex-col md:flex-row text-sm pb-5 mt-6 md:justify-between">
        <div className="flex gap-3 text-gray-400  font-semibold ">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/#portfolio" className="hover:text-primary">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
        <p className="text-gray-400  font-semibold ">
          &copy; {year} Build with 💖 by Mejo
        </p>
      </div>
    </>
  );
}
