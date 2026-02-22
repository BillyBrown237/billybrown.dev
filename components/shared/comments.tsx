"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";
import { giscusRepoId, giscusCategoryId } from "@/lib/env.api";

export default function Comments() {
  const theme = useTheme();
  const giscusTheme =
    theme.theme === "light"
      ? "light"
      : theme.theme === "dark"
      ? "transparent_dark"
      : "dark";

  return (
    <Giscus
      id="comments"
      repo="billybrown237/billybrown.dev"
      repoId={giscusRepoId}
      category="Announcements"
      categoryId={giscusCategoryId}
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={giscusTheme}
      lang="en"
      loading="lazy"
    />
  );
}

/**
 * <script src="https://giscus.app/client.js"
        data-repo="billybrown237/billybrown.dev"
        data-repo-id=""
        data-category="General"
        data-category-id="DIC_kwDORVqJJM4C28wh"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
 */