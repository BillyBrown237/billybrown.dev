import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity/sanity.query";
import type { Profile } from "@/types";
import { sanityFetch } from "@/lib/sanity/sanity.client";
import {CustomPortableTextFavicon} from "@/components/shared/customPortableTextFavicon";

export default async function Usage() {
  const profile: Profile = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <PortableText
        value={profile?.usage}
        components={CustomPortableTextFavicon}
      />
    </section>
  );
}