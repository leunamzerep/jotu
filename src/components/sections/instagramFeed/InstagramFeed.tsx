import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INSTAGRAM_FEED_URL } from "@/config/site";

const extractInstagramPostId = (url: string): string | null => {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/);
  return match ? match[1] : null;
};

/**
 * Últimas publicaciones de Instagram (Inicio). Se piden a INSTAGRAM_FEED_URL al
 * cargar la página; si no llegan, la sección no aparece (como antes).
 */
export const InstagramFeed = () => {
  const { t } = useTranslation();
  const [postIds, setPostIds] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(INSTAGRAM_FEED_URL);
        const json = await res.json();

        if (Array.isArray(json.posts)) {
          const ids = json.posts
            .map(extractInstagramPostId)
            .filter((id: string | null): id is string => Boolean(id));

          setPostIds(ids);
        }
      } catch (err) {
        console.error("Failed to load Instagram posts", err);
      }
    })();
  }, []);

  if (postIds.length === 0) return null;

  return (
    <Section tone="white">
      <Container>
        <SectionHeading title={t("home.invitation")} align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {postIds.map((id) => (
            <iframe
              key={id}
              title={`${t("alt.instagramPost")} ${id}`}
              src={`https://www.instagram.com/p/${id}/embed`}
              width="100%"
              height="500"
              loading="lazy"
              className="w-full rounded-card border-0 bg-jotu-mist"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
