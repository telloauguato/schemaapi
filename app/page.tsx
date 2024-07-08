import { buttonVariants } from "@/components/ui/button";
import { models_router, page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/telloauguato/schemaapi"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
      A powerful and versatile tool designed to generate mock data for prototype systems.
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        SchemaAPI is a tool that allows you to define and manage data schemas for your applications. It provides a way to create simulated data based on these schemas, which can be useful for testing, prototyping, and application development.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href={`/docs/${models_router[0].href}`}
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Models
        </Link>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> ~ npm install -D schemaapi@latest
      </span>
    </div>
  );
}
