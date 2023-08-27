import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <h1 className="text-4xl font-bold">Hi! 👋</h1>
            <p className="text-muted-foreground pt-2">
              Welcome to MacPaw Bootcamp 2023
            </p>
          </article>

          <article className="grid pt-12">
            <h2 className="font-medium">Lets start using The Cat API</h2>
            <div className="grid gap-4 pt-6">
              <Button variant="default">
                <Link href="/voting">voting</Link>
              </Button>
              <Button variant="default">
                <Link href="/breeds">breeds</Link>
              </Button>
              <Button variant="default">
                <Link href="/gallery">gallery</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
