import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

const Cards = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
      </div>
    </main>
  );
};

export default Cards;
