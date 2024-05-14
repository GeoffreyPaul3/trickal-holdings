import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-violet-500 to-green-600 py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Empowering Your Digital Gifting Experience
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-white">
              Explore APIs for streamlined digital gift card delivery. Join a
              diverse community of businesses, from startups to large
              enterprises, in effortlessly distributing mobile top-ups and gift
              cards across the globe.
            </p>

            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Get Started</Link>
            </Button>
          </div>

          <Image
            src="/assets/Photo.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain rounded-xl object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
    </>
  );
}
