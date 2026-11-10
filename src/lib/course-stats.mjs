/**
 * Course facts derived from the docs sidebar (src/config/sidebar.mjs).
 *
 * The sidebar is what learners can actually navigate, so it is the one place
 * lesson counts and course entry points come from. Hand-typed counts drifted
 * badly before this existed: the JavaScript card said 9 lessons while the
 * course had 36.
 *
 * Plain ESM with no Astro imports, so astro.config.mjs can use it too.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";

import { sidebar } from "../config/sidebar.mjs";

const collectSlugs = (items = []) =>
  items.flatMap((item) => {
    if (item.items) return collectSlugs(item.items);
    return item.slug ? [item.slug] : [];
  });

/**
 * One entry per course, in sidebar order.
 * @type {{ label: string, dir: string, href: string, lessonCount: number }[]}
 */
export const courses = sidebar.map((group) => {
  const slugs = collectSlugs(group.items);
  const dirs = new Set(slugs.map((slug) => slug.split("/")[0]));
  if (dirs.size !== 1) {
    throw new Error(
      `Sidebar group "${group.label}" mixes course folders (${[...dirs].join(", ")}). ` +
        "Each top-level group must hold one course.",
    );
  }
  const [dir] = dirs;
  return {
    label: group.label,
    dir,
    // Where a course card should send a learner: the first page in the sidebar.
    href: `/${slugs[0]}`,
    // A course's own overview page (slug equal to the folder name) introduces
    // the course; it is not a lesson.
    lessonCount: slugs.filter((slug) => slug !== dir).length,
  };
});

const byDir = new Map(courses.map((course) => [course.dir, course]));

/** Course facts for a folder name such as "git-course", or undefined. */
export const courseFor = (dir) => byDir.get(dir);

/** Course folder from a site path such as "/git-course/introduction/why-git". */
export const courseDirOf = (path) => path.split("/").filter(Boolean)[0] ?? "";

/** Lesson count for a folder name. Throws on unknown folders so typos fail the build. */
export const lessonCountFor = (dir) => {
  const course = byDir.get(dir);
  if (!course) throw new Error(`No sidebar group for course folder "${dir}".`);
  return course.lessonCount;
};

export const totalLessons = courses.reduce((sum, course) => sum + course.lessonCount, 0);

const hasOverviewPage = (dir) =>
  ["index.mdx", "index.md"].some((file) =>
    // process.cwd() rather than import.meta.url: during the build this module
    // is bundled, which moves import.meta.url away from src/.
    existsSync(join(process.cwd(), "src/content/docs", dir, file)),
  );

/**
 * Bare course URLs without an overview page, mapped to the course's first
 * lesson: { "/git-course": "/git-course/introduction/why-git", ... }.
 * astro.config.mjs turns these into 301s. Those only match the no-slash form,
 * so the 404 page reads this same map to forward "/git-course/" too.
 * Build-time only (it reads the filesystem): import it from .astro files and
 * astro.config.mjs, never from a client component.
 */
export const courseRootRedirects = Object.fromEntries(
  courses
    .filter(({ dir }) => !hasOverviewPage(dir))
    .map(({ dir, href }) => [`/${dir}`, href]),
);
