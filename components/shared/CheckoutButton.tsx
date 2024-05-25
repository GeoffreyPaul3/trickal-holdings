"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CheckoutButton = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <div className="flex items-center gap-3">
      <>
        <SignedOut>
          <Button asChild className="button rounded-full" size="lg">
            <Link href="/sign-in">Get Cards</Link>
          </Button>
        </SignedOut>

        <SignedIn></SignedIn>
      </>
    </div>
  );
};

export default CheckoutButton;
