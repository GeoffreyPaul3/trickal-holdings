import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
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
          <Separator className="border border-gray-50" />
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Dashboard
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
