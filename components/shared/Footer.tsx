import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-green-600 bg-gradient-to-r from-violet-500 to-green-600">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/Trickal.png" alt="logo" width={80} height={80} />
          <span className="text-2xl font-bold tracking-tight ">
            Trickal Holdings
          </span>
        </Link>

        <p className="text-white">2024 Trickal Holdings. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
