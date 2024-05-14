import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b border-green-500 bg-gradient-to-r from-violet-500 to-green-600">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/Trickal.png"
            width={80}
            height={80}
            alt="Trickal logo"
          />
          <span className="text-2xl font-bold tracking-tight">
            Trickal Holdings
          </span>
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
