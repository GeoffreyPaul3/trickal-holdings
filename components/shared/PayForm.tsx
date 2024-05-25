import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PayForm = () => {
  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardDescription>
            Select an amount between $20.00 - $1,000.00
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">To</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Full Name</Label>
              <Input id="full-name" placeholder="Robinson Banda" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Phone Number</Label>
              <Input id="phone-number" type="number" />
            </div>
            <Button type="submit" className="w-full">
              Purchase card
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PayForm;
