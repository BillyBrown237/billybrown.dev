import { profileQuery } from "@/lib/sanity/sanity.query";
import type { Profile } from "@/types";
import HeroSvg from "@/assets/icons/HeroSvg";
import Job from "@/components/pages/job";
import Social from "@/components/shared/social";
import { Slide } from "@/components/animations/slide";
import { sanityFetch } from "@/lib/sanity/sanity.client";
import ContributionGraph from "@/components/pages/githubCalendarComponent";

export default async function Home() {
  const profile: Profile = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div key={profile?._id} className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-175 min-w-full">
              {profile?.headline ?? "Job Title"}
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              {profile?.shortBio ?? "Short bio description"}
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <ContributionGraph />
      <Job />
    </main>
  );
}