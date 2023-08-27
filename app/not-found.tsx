import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <main className="min-h-screen">
        <div className="grid p-4">
          <Link href="/" className="w-24">
            <Image
              src="/logo.svg"
              alt="logo image"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </Link>

          <article className="grid pt-16">
            <h1 className="text-4xl font-bold">Whoops... 😿</h1>
            <p className="text-muted-foreground pt-2">
              The page you are looking for does not exist. We are so sorry for
              the inconvenience
            </p>
            <Button variant="default" className="mt-6">
              <Link href="/">Go back home</Link>
            </Button>
          </article>
        </div>
      </main>
    </>
  );
};

export default NotFound;
