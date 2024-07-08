import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Toc from "@/components/toc";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { cache } from "react";

type PageProps = {
  params: { slug: string[] };
};


export default async function Page({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  
  return (
    <div className="flex items-start gap-12 ">
      <div className="flex-[3] py-10 ">
        <DocsBreadcrumb paths={slug} />
      </div>
      <Toc path={pathName} />
    </div>
  );
}
