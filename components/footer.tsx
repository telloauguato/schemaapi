import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-14">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <p className="text-center">
          Build by{" "}
          <Link
            className="px-1 underline underline-offset-2"
            href="https://github.com/telloauguato"
          >
            telloauguato
          </Link>
          . The source code is available on{" "}
          <Link
            className="px-1 underline underline-offset-2"
            href="https://github.com/telloauguato/schemaapi"
          >
            GitHub
          </Link>
          .
        </p>
        {
          //<div className="gap-4 items-center hidden sm:flex">
          //  <FooterButtons />
          //</div>
        }

      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
