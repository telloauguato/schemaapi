import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Toc from "@/components/toc";

type PageProps = {
  params: { slug: string[] };
};


export default async function Page({ params: { slug = [] } }: PageProps) {

  return (
    <div className="flex items-start gap-12 ">
      <div className="flex-[3] py-10 ">
        <DocsBreadcrumb paths={slug} />
      </div>
    </div>
  );
}
