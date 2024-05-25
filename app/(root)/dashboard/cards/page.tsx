import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const CardsPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Trickal Holdings</span>
          </Link>
          <Link
            href="/dashboard"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/cards"
            className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            Gift-cards
          </Link>
          <Link
            href="/dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Reports
          </Link>
          <Link
            href="/dashboard/promotion"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Promotions
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Trickal Holdings</span>
              </Link>
              <Link href="/dashboard" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="/dashboard/cards"
                className="text-muted-foreground hover:text-foreground whitespace-nowrap"
              >
                Gift-cards
              </Link>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground"
              >
                Reports
              </Link>
              <Link
                href="/dashboard/promotion"
                className="text-muted-foreground hover:text-foreground"
              >
                Promotions
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search gift card..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Link href="/dashboard/details">
            <Card x-chunk="dashboard-01-chunk-0 shadow-md transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium"></CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/assets/images/card1.jpg"
                  width={400}
                  height={1000}
                  alt="card"
                />
              </CardContent>
            </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-1 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card2.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-2 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card3.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-3 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card4.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-3 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card5.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-3 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card6.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-3 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card7.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-3 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card8.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard/details">
          <Card x-chunk="dashboard-01-chunk-3 shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/card8.jpg"
                width={1000}
                height={1000}
                alt="card"
              />
            </CardContent>
          </Card>
          </Link>
          
        </div>
      </main>
    </div>
  );
};

export default CardsPage;
