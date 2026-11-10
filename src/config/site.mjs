/**
 * Site-wide identity, used by astro.config.mjs and by pages at build time.
 *
 * SITE is the origin Vercel actually serves. takkatho.dev redirects to
 * www.takkatho.dev (Vercel's recommended setup, with www as the primary
 * domain), so canonical tags, sitemap URLs and Open Graph URLs must all use
 * www. Before this, every one of them pointed at an address that redirected.
 * If the primary domain ever changes in Vercel, change it here only.
 */
export const SITE = "https://www.takkatho.dev";

export const SITE_NAME = "Takkatho";
export const SITE_NAME_MY = "တက္ကသိုလ်";

export const DEFAULT_DESCRIPTION =
  "မြန်မာဘာသာဖြင့် အခမဲ့ Programming သင်ခန်းစာများ။ HTML, CSS, JavaScript, TypeScript, Python, SQL, Docker, Linux နှင့် Software Architecture ကို နက်နက်ရှိုင်းရှိုင်း လေ့လာပါ။";

/** 1200x630, the size Facebook and X expect for a large preview card. */
export const OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Takkatho, a free programming learning platform in Burmese",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61579983700365",
  youtube: "https://www.youtube.com/@takkatho",
  github: "https://github.com/WaiyanPhyoaung/takkatho",
};
