import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "@/components/pages/posts";
import Social from "@/components/shared/social";
import { Slide } from "@/components/animations/slide";
import PageHeading from "@/components/shared/pageHeading";

export const metadata: Metadata = {
  title: "Blog | Billy Brown",
  metadataBase: new URL("https://dekoubrown.dev/blog"),
  description: "Read latest stories from Billy Brown's Blog",
  openGraph: {
    title: "Blog | Billy Brown",
    url: "https://dekoubrown.dev/blog",
    description: "Read latest stories from Billy Brown's Blog",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm hacking on and just general findings. I also write for other publications."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}