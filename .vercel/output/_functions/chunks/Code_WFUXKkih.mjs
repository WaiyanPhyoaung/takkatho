import { A as AstroUserError, a as createComponent, c as createAstro, m as maybeRenderHead, f as addAttribute, r as renderComponent, d as renderSlot, b as renderTemplate, F as Fragment, s as spreadAttributes, u as unescapeHTML, g as renderScript } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { I as Icons, $ as $$Icon, d as definitions } from './Icon_CK40Z_jw.mjs';
import * as z from 'zod';
/* empty css                                                             */
/* empty css                                                            */
import 'clsx';
/* empty css                                                                */
import './Tabs_astro_astro_type_style_index_0_lang.95b565c7_l0sNRNKZ.mjs';
import { select } from 'hast-util-select';
import { rehype } from 'rehype';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';
/* empty css                                                                */
import rehypeFormat from 'rehype-format';
/* empty css                                                             */
import { h, s } from 'hastscript';
import { fromHtml } from 'hast-util-from-html';
import { toString } from 'hast-util-to-string';
import './FileTree_astro_astro_type_style_index_0_lang.34c8bf22_l0sNRNKZ.mjs';
import './LinkButton_astro_astro_type_style_index_0_lang.bcaa4ddd_l0sNRNKZ.mjs';
import { addClassName, toHtml } from 'rehype-expressive-code/hast';

function parseWithFriendlyErrors(schema, input, message) {
  return processParsedData(schema.safeParse(input, { errorMap }), message);
}
async function parseAsyncWithFriendlyErrors(schema, input, message) {
  return processParsedData(await schema.safeParseAsync(input, { errorMap }), message);
}
function processParsedData(parsedData, message) {
  if (!parsedData.success) {
    throw new AstroUserError(message, parsedData.error.issues.map((i) => i.message).join("\n"));
  }
  return parsedData.data;
}
const errorMap = (baseError, ctx) => {
  const baseErrorPath = flattenErrorPath(baseError.path);
  if (baseError.code === "invalid_union") {
    const typeOrLiteralErrByPath = /* @__PURE__ */ new Map();
    for (const unionError of baseError.unionErrors.map((e) => e.errors).flat()) {
      if (unionError.code === "invalid_type" || unionError.code === "invalid_literal") {
        const flattenedErrorPath = flattenErrorPath(unionError.path);
        if (typeOrLiteralErrByPath.has(flattenedErrorPath)) {
          typeOrLiteralErrByPath.get(flattenedErrorPath).expected.push(unionError.expected);
        } else {
          typeOrLiteralErrByPath.set(flattenedErrorPath, {
            code: unionError.code,
            received: unionError.received,
            expected: [unionError.expected]
          });
        }
      }
    }
    const messages = [prefix(baseErrorPath, "Did not match union.")];
    const details = [...typeOrLiteralErrByPath.entries()].filter(([, error]) => error.expected.length === baseError.unionErrors.length).map(
      ([key, error]) => key === baseErrorPath ? (
        // Avoid printing the key again if it's a base error
        `> ${getTypeOrLiteralMsg(error)}`
      ) : `> ${prefix(key, getTypeOrLiteralMsg(error))}`
    );
    if (details.length === 0) {
      const expectedShapes = [];
      for (const unionError of baseError.unionErrors) {
        const expectedShape = [];
        for (const issue of unionError.issues) {
          if (issue.code === "invalid_union") {
            return errorMap(issue, ctx);
          }
          const relativePath = flattenErrorPath(issue.path).replace(baseErrorPath, "").replace(leadingPeriod, "");
          if ("expected" in issue && typeof issue.expected === "string") {
            expectedShape.push(
              relativePath ? `${relativePath}: ${issue.expected}` : issue.expected
            );
          } else {
            expectedShape.push(relativePath);
          }
        }
        if (expectedShape.length === 1 && !expectedShape[0]?.includes(":")) {
          expectedShapes.push(expectedShape.join(""));
        } else {
          expectedShapes.push(`{ ${expectedShape.join("; ")} }`);
        }
      }
      if (expectedShapes.length) {
        details.push("> Expected type `" + expectedShapes.join(" | ") + "`");
        details.push("> Received `" + stringify(ctx.data) + "`");
      }
    }
    return {
      message: messages.concat(details).join("\n")
    };
  } else if (baseError.code === "invalid_literal" || baseError.code === "invalid_type") {
    return {
      message: prefix(
        baseErrorPath,
        getTypeOrLiteralMsg({
          code: baseError.code,
          received: baseError.received,
          expected: [baseError.expected]
        })
      )
    };
  } else if (baseError.message) {
    return { message: prefix(baseErrorPath, baseError.message) };
  } else {
    return { message: prefix(baseErrorPath, ctx.defaultError) };
  }
};
const getTypeOrLiteralMsg = (error) => {
  if (typeof error.received === "undefined" || error.received === "undefined") return "Required";
  const expectedDeduped = new Set(error.expected);
  switch (error.code) {
    case "invalid_type":
      return `Expected type \`${unionExpectedVals(expectedDeduped)}\`, received \`${stringify(
        error.received
      )}\``;
    case "invalid_literal":
      return `Expected \`${unionExpectedVals(expectedDeduped)}\`, received \`${stringify(
        error.received
      )}\``;
  }
};
const prefix = (key, msg) => key.length ? `**${key}**: ${msg}` : msg;
const unionExpectedVals = (expectedVals) => [...expectedVals].map((expectedVal) => stringify(expectedVal)).join(" | ");
const flattenErrorPath = (errorPath) => errorPath.join(".");
const stringify = (val) => JSON.stringify(val, null, 1).split(newlinePlusWhitespace).join(" ");
const newlinePlusWhitespace = /\n\s*/;
const leadingPeriod = /^\./;

const badgeBaseSchema = z.object({
  variant: z.enum(["note", "danger", "success", "caution", "tip", "default"]).default("default"),
  class: z.string().optional()
});
const badgeSchema = badgeBaseSchema.extend({
  text: z.string()
});
const i18nBadgeSchema = badgeBaseSchema.extend({
  text: z.union([z.string(), z.record(z.string())])
});
const BadgeComponentSchema = badgeSchema.extend({
  size: z.enum(["small", "medium", "large"]).default("small")
}).passthrough();
const BadgeConfigSchema = () => z.union([z.string(), badgeSchema]).transform((badge) => {
  if (typeof badge === "string") {
    return { variant: "default", text: badge };
  }
  return badge;
}).optional();
const I18nBadgeConfigSchema = () => z.union([z.string(), i18nBadgeSchema]).optional();

function throwInvalidAsideIconError(icon) {
  throw new AstroUserError(
    "Invalid aside icon",
    `An aside custom icon must be set to the name of one of Starlight’s built-in icons, but received \`${icon}\`.

See https://starlight.astro.build/reference/icons/#all-icons for a list of available icons.`
  );
}

const $$Astro$a = createAstro("https://takkatho.dev");
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Aside;
  const asideVariants = ["note", "tip", "caution", "danger"];
  const icons = { note: "information", tip: "rocket", caution: "warning", danger: "error" };
  let { type = "note", title, icon } = Astro2.props;
  if (!asideVariants.includes(type)) {
    throw new AstroUserError(
      "Invalid `type` prop passed to the `<Aside>` component.\n",
      `Received: ${JSON.stringify(type)}
Expected one of ${asideVariants.map((i) => JSON.stringify(i)).join(", ")}`
    );
  }
  if (icon && !Icons[icon]) throwInvalidAsideIconError(icon);
  if (!title) {
    title = Astro2.locals.t(`aside.${type}`);
  }
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(title, "aria-label")}${addAttribute(`starlight-aside starlight-aside--${type}`, "class")}> <p class="starlight-aside__title" aria-hidden="true"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon || icons[type], "class": "starlight-aside__icon" })}${title} </p> <div class="starlight-aside__content"> ${renderSlot($$result, $$slots["default"])} </div> </aside>`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/Aside.astro", void 0);

const $$Astro$9 = createAstro("https://takkatho.dev");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    text,
    variant,
    size,
    class: customClass,
    ...attrs
  } = parseWithFriendlyErrors(
    BadgeComponentSchema,
    Astro2.props,
    "Invalid prop passed to the `<Badge/>` component."
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-avdet4wd" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<span${addAttribute([["sl-badge", variant, size, customClass], "astro-avdet4wd"], "class:list")}${spreadAttributes(attrs)}>${text}</span>` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/Badge.astro", void 0);

const $$Astro$8 = createAstro("https://takkatho.dev");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card sl-flex astro-v5tidmuc"> <p class="title sl-flex astro-v5tidmuc"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "icon astro-v5tidmuc", "size": "1.333em" })}`} <span class="astro-v5tidmuc">${unescapeHTML(title)}</span> </p> <div class="body astro-v5tidmuc">${renderSlot($$result, $$slots["default"])}</div> </article> `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/Card.astro", void 0);

const $$Astro$7 = createAstro("https://takkatho.dev");
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const { stagger = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([["card-grid", { stagger }], "astro-zntqmydn"], "class:list")}>${renderSlot($$result, $$slots["default"])}</div> `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/CardGrid.astro", void 0);

const TabItemTagname = "starlight-tab-item";
const focusableElementSelectors = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]",
  "[tabindex]:not([disabled])"
].map((selector) => `${selector}:not([hidden]):not([tabindex="-1"])`).join(",");
let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
const tabsProcessor = rehype().data("settings", { fragment: true }).use(function tabs() {
  return (tree, file) => {
    file.data.panels = [];
    let isFirst = true;
    visit(tree, "element", (node) => {
      if (node.tagName !== TabItemTagname || !node.properties) {
        return CONTINUE;
      }
      const { dataLabel, dataIcon } = node.properties;
      const ids = getIDs();
      const panel = {
        ...ids,
        label: String(dataLabel)
      };
      if (dataIcon) panel.icon = String(dataIcon);
      file.data.panels?.push(panel);
      delete node.properties.dataLabel;
      delete node.properties.dataIcon;
      node.tagName = "div";
      node.properties.id = ids.panelId;
      node.properties["aria-labelledby"] = ids.tabId;
      node.properties.role = "tabpanel";
      const focusableChild = select(focusableElementSelectors, node);
      if (!focusableChild) {
        node.properties.tabindex = 0;
      }
      if (isFirst) {
        isFirst = false;
      } else {
        node.properties.hidden = true;
      }
      return SKIP;
    });
  };
});
const processPanels = (html) => {
  const file = tabsProcessor.processSync({ value: html });
  return {
    /** Data for each tab panel. */
    panels: file.data.panels,
    /** Processed HTML for the tab panels. */
    html: file.toString()
  };
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://takkatho.dev");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { syncKey } = Astro2.props;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  const isSynced = syncKey !== void 0;
  const didRenderSyncedTabsRestoreScriptSymbol = Symbol.for("starlight:did-render-synced-tabs-restore-script");
  const shouldRenderSyncedTabsRestoreScript = isSynced && Astro2.locals[didRenderSyncedTabsRestoreScriptSymbol] !== true;
  if (isSynced) {
    Astro2.locals[didRenderSyncedTabsRestoreScriptSymbol] = true;
  }
  return renderTemplate`${shouldRenderSyncedTabsRestoreScript && renderTemplate(_a || (_a = __template([`<script>
(() => {
	class StarlightTabsRestore extends HTMLElement {
		connectedCallback() {
			const starlightTabs = this.closest('starlight-tabs');
			if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
			const syncKey = starlightTabs.dataset.syncKey;
			if (!syncKey) return;
			const label = localStorage.getItem(\`starlight-synced-tabs__\${syncKey}\`);
			if (!label) return;
			const tabs = [...starlightTabs?.querySelectorAll('[role="tab"]')];
			const tabIndexToRestore = tabs.findIndex(
				(tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
			);
			const panels = starlightTabs?.querySelectorAll(':scope > [role="tabpanel"]');
			const newTab = tabs[tabIndexToRestore];
			const newPanel = panels[tabIndexToRestore];
			if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
			tabs[0]?.setAttribute('aria-selected', 'false');
			tabs[0]?.setAttribute('tabindex', '-1');
			panels?.[0]?.setAttribute('hidden', 'true');
			newTab.removeAttribute('tabindex');
			newTab.setAttribute('aria-selected', 'true');
			newPanel.removeAttribute('hidden');
		}
	}
	customElements.define('starlight-tabs-restore', StarlightTabsRestore);
})()
<\/script>`], [`<script>
(() => {
	class StarlightTabsRestore extends HTMLElement {
		connectedCallback() {
			const starlightTabs = this.closest('starlight-tabs');
			if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
			const syncKey = starlightTabs.dataset.syncKey;
			if (!syncKey) return;
			const label = localStorage.getItem(\\\`starlight-synced-tabs__\\\${syncKey}\\\`);
			if (!label) return;
			const tabs = [...starlightTabs?.querySelectorAll('[role="tab"]')];
			const tabIndexToRestore = tabs.findIndex(
				(tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
			);
			const panels = starlightTabs?.querySelectorAll(':scope > [role="tabpanel"]');
			const newTab = tabs[tabIndexToRestore];
			const newPanel = panels[tabIndexToRestore];
			if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
			tabs[0]?.setAttribute('aria-selected', 'false');
			tabs[0]?.setAttribute('tabindex', '-1');
			panels?.[0]?.setAttribute('hidden', 'true');
			newTab.removeAttribute('tabindex');
			newTab.setAttribute('aria-selected', 'true');
			newPanel.removeAttribute('hidden');
		}
	}
	customElements.define('starlight-tabs-restore', StarlightTabsRestore);
})()
<\/script>`])))}${renderComponent($$result, "starlight-tabs", "starlight-tabs", { "data-sync-key": syncKey, "class": "astro-esqgolmp" }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content astro-esqgolmp"> <ul role="tablist" class="astro-esqgolmp"> ${panels.map(({ icon, label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab astro-esqgolmp"> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} class="astro-esqgolmp"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "astro-esqgolmp" })}`} ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ${isSynced && renderTemplate`${renderComponent($$result, "starlight-tabs-restore", "starlight-tabs-restore", { "class": "astro-esqgolmp" })}`} ` })}  ${renderScript($$result, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/Tabs.astro", void 0);

const $$Astro$5 = createAstro("https://takkatho.dev");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TabItem;
  const { icon, label } = Astro2.props;
  if (!label) {
    throw new Error("Missing prop `label` on `<TabItem>` component.");
  }
  return renderTemplate`${renderComponent($$result, "TabItemTagname", TabItemTagname, { "data-label": label, "data-icon": icon }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/TabItem.astro", void 0);

const $$Astro$4 = createAstro("https://takkatho.dev");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sl-link-card astro-mf7fz2mj"> <span class="sl-flex stack astro-mf7fz2mj"> <a${spreadAttributes(attributes, void 0, { "class": "astro-mf7fz2mj" })}> <span class="title astro-mf7fz2mj">${unescapeHTML(title)}</span> </a> ${description && renderTemplate`<span class="description astro-mf7fz2mj">${unescapeHTML(description)}</span>`} </span> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-arrow", "size": "1.333em", "class": "icon rtl:flip astro-mf7fz2mj" })} </div> `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/LinkCard.astro", void 0);

const prettyPrintProcessor = rehype().data("settings", { fragment: true }).use(rehypeFormat);
const prettyPrintHtml = (html) => prettyPrintProcessor.processSync({ value: html }).toString();
const stepsProcessor = rehype().data("settings", { fragment: true }).use(function steps() {
  return (tree, vfile) => {
    const rootElements = tree.children.filter((item) => item.type === "element");
    const [rootElement] = rootElements;
    if (!rootElement) {
      throw new StepsError(
        "The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found no child elements."
      );
    } else if (rootElements.length > 1) {
      throw new StepsError(
        "The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found multiple child elements: " + rootElements.map((element) => `\`<${element.tagName}>\``).join(", ") + ".",
        vfile.value.toString()
      );
    } else if (rootElement.tagName !== "ol") {
      throw new StepsError(
        `The \`<Steps>\` component expects its content to be a single ordered list (\`<ol>\`) but found the following element: \`<${rootElement.tagName}>\`.`,
        vfile.value.toString()
      );
    }
    rootElement.properties.role = "list";
    if (!Array.isArray(rootElement.properties.className)) {
      rootElement.properties.className = ["sl-steps"];
    } else {
      rootElement.properties.className.push("sl-steps");
    }
    if (typeof rootElement.properties.start === "number") {
      const styles = [`--sl-steps-start: ${rootElement.properties.start - 1}`];
      if (rootElement.properties.style) styles.push(String(rootElement.properties.style));
      rootElement.properties.style = styles.join(";");
    }
  };
});
const processSteps = (html) => {
  const file = stepsProcessor.processSync({ value: html });
  return { html: file.toString() };
};
class StepsError extends AstroUserError {
  constructor(message, html) {
    let hint = "To learn more about the `<Steps>` component, see https://starlight.astro.build/components/steps/";
    if (html) {
      hint += "\n\nFull HTML passed to `<Steps>`:\n" + prettyPrintHtml(html);
    }
    super(message, hint);
  }
}

const $$Astro$3 = createAstro("https://takkatho.dev");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Steps;
  const content = await Astro2.slots.render("default");
  const { html } = processSteps(content);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/Steps.astro", void 0);

const folderIcon = makeSVGIcon(Icons["seti:folder"]);
const defaultFileIcon = makeSVGIcon(Icons["seti:default"]);
function processFileTree(html, directoryLabel) {
  const file = fileTreeProcessor.processSync({ data: { directoryLabel }, value: html });
  return file.toString();
}
const fileTreeProcessor = rehype().data("settings", { fragment: true }).use(function fileTree() {
  return (tree, file) => {
    const { directoryLabel } = file.data;
    validateFileTree(tree);
    visit(tree, "element", (node) => {
      node.children = node.children.filter(
        (child) => child.type === "comment" || child.type !== "text" || !/^\n+$/.test(child.value)
      );
      if (node.tagName !== "li") return CONTINUE;
      const [firstChild, ...otherChildren] = node.children;
      const comment = [];
      if (firstChild?.type === "text") {
        const [filename, ...fragments] = firstChild.value.split(" ");
        firstChild.value = filename || "";
        const textComment = fragments.join(" ").trim();
        if (textComment.length > 0) {
          comment.push(fragments.join(" "));
        }
      }
      const subTreeIndex = otherChildren.findIndex(
        (child) => child.type === "element" && child.tagName === "ul"
      );
      const commentNodes = subTreeIndex > -1 ? otherChildren.slice(0, subTreeIndex) : [...otherChildren];
      otherChildren.splice(0, subTreeIndex > -1 ? subTreeIndex : otherChildren.length);
      comment.push(...commentNodes);
      const firstChildTextContent = firstChild ? toString(firstChild) : "";
      const isDirectory = /\/\s*$/.test(firstChildTextContent) || otherChildren.some((child) => child.type === "element" && child.tagName === "ul");
      const isPlaceholder = /^\s*(\.{3}|…)\s*$/.test(firstChildTextContent);
      const isHighlighted = firstChild?.type === "element" && firstChild.tagName === "strong";
      const icon = h("span", isDirectory ? folderIcon : getFileIcon(firstChildTextContent));
      if (isDirectory) {
        icon.children.unshift(h("span", { class: "sr-only" }, directoryLabel));
      }
      node.properties.class = isDirectory ? "directory" : "file";
      if (isPlaceholder) node.properties.class += " empty";
      const treeEntryChildren = [
        h("span", { class: isHighlighted ? "highlight" : "" }, [
          isPlaceholder ? null : icon,
          firstChild
        ])
      ];
      if (comment.length > 0) {
        treeEntryChildren.push(makeText(" "), h("span", { class: "comment" }, ...comment));
      }
      const treeEntry = h("span", { class: "tree-entry" }, ...treeEntryChildren);
      if (isDirectory) {
        const hasContents = otherChildren.length > 0;
        node.children = [
          h("details", { open: hasContents }, [
            h("summary", treeEntry),
            ...hasContents ? otherChildren : [h("ul", h("li", "…"))]
          ])
        ];
        return CONTINUE;
      }
      node.children = [treeEntry, ...otherChildren];
      return SKIP;
    });
  };
});
function makeText(value = "") {
  return { type: "text", value };
}
function makeSVGIcon(svgString) {
  return s(
    "svg",
    {
      width: 16,
      height: 16,
      class: "tree-icon",
      "aria-hidden": "true",
      viewBox: "0 0 24 24"
    },
    fromHtml(svgString, { fragment: true })
  );
}
function getFileIcon(fileName) {
  const name = getFileIconName(fileName);
  if (!name) return defaultFileIcon;
  if (name in Icons) {
    const path = Icons[name];
    return makeSVGIcon(path);
  }
  return defaultFileIcon;
}
function getFileIconName(fileName) {
  let icon = definitions.files[fileName];
  if (icon) return icon;
  icon = getFileIconTypeFromExtension(fileName);
  if (icon) return icon;
  for (const [partial, partialIcon] of Object.entries(definitions.partials)) {
    if (fileName.includes(partial)) return partialIcon;
  }
  return icon;
}
function getFileIconTypeFromExtension(fileName) {
  const firstDotIndex = fileName.indexOf(".");
  if (firstDotIndex === -1) return;
  let extension = fileName.slice(firstDotIndex);
  while (extension !== "") {
    const icon = definitions.extensions[extension];
    if (icon) return icon;
    const nextDotIndex = extension.indexOf(".", 1);
    if (nextDotIndex === -1) return;
    extension = extension.slice(nextDotIndex);
  }
  return;
}
function validateFileTree(tree) {
  const rootElements = tree.children.filter(isElementNode);
  const [rootElement] = rootElements;
  if (rootElements.length === 0) {
    throwFileTreeValidationError(
      "The `<FileTree>` component expects its content to be a single unordered list but found no child elements."
    );
  }
  if (rootElements.length !== 1) {
    throwFileTreeValidationError(
      `The \`<FileTree>\` component expects its content to be a single unordered list but found multiple child elements: ${rootElements.map((element) => `\`<${element.tagName}>\``).join(" - ")}.`
    );
  }
  if (!rootElement || rootElement.tagName !== "ul") {
    throwFileTreeValidationError(
      `The \`<FileTree>\` component expects its content to be an unordered list but found the following element: \`<${rootElement?.tagName}>\`.`
    );
  }
  const listItemElement = select("li", rootElement);
  if (!listItemElement) {
    throwFileTreeValidationError(
      "The `<FileTree>` component expects its content to be an unordered list with at least one list item."
    );
  }
}
function isElementNode(node) {
  return node.type === "element";
}
function throwFileTreeValidationError(message) {
  throw new AstroUserError(
    message,
    "To learn more about the `<FileTree>` component, see https://starlight.astro.build/components/file-tree/"
  );
}

const $$Astro$2 = createAstro("https://takkatho.dev");
const $$FileTree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FileTree;
  const fileTreeHtml = await Astro2.slots.render("default");
  const html = processFileTree(fileTreeHtml, Astro2.locals.t("fileTree.directory"));
  return renderTemplate`${renderComponent($$result, "starlight-file-tree", "starlight-file-tree", { "class": "not-content astro-p67cqifm", "data-pagefind-ignore": true }, { "default": () => renderTemplate`${unescapeHTML(html)}` })} `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/FileTree.astro", void 0);

const $$Astro$1 = createAstro("https://takkatho.dev");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const {
    class: className,
    icon,
    iconPlacement = "end",
    variant = "primary",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([["sl-link-button not-content", variant, className], "astro-xwgiixxa"], "class:list")}${spreadAttributes(attrs)}> ${icon && iconPlacement === "start" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5rem", "class": "astro-xwgiixxa" })}`} ${renderSlot($$result, $$slots["default"])} ${icon && iconPlacement === "end" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5rem", "class": "astro-xwgiixxa" })}`} </a> `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/user-components/LinkButton.astro", void 0);

const pageDataMap = /* @__PURE__ */ new Map();
function getPageData(request) {
  let data = pageDataMap.get(request);
  if (!data) {
    data = {
      url: request.url,
      blockGroupIndex: -1
    };
    pageDataMap.set(request, data);
  }
  return data;
}

let cachedRenderer = void 0;
async function getRenderer() {
  if (!cachedRenderer) {
    cachedRenderer = createRenderer();
  }
  return await cachedRenderer;
}
async function createRenderer() {
  const { astroConfig, ecConfigFileOptions, ecIntegrationOptions = {} } = await import('./config_CkyF9rGh.mjs');
  const { createAstroRenderer, mergeEcConfigOptions } = await import('./index_B-ElIKNd.mjs');
  if (typeof mergeEcConfigOptions !== "function") {
    throw new Error(
      `You are trying to use Expressive Code's \`<Code>\` component, but the Expressive Code
			Astro integration is not enabled in your project.

			If you are using Starlight, ensure that its default Expressive Code integration
			was not disabled by you or your themes or plugins.

			If you are not a Starlight user, ensure that Expressive Code was added to
			\`integrations\` in your Astro config file.

			In case you don't want to use Expressive Code, you can import Astro's own \`<Code>\`
			component from \`astro:components\` instead.`.split(/\r?\n[ \t]*\r?\n/).map((s) => s.replace(/\s+/g, " ").trim()).join("\n\n")
    );
  }
  const strIntegrationOptions = JSON.stringify(ecIntegrationOptions);
  if (strIntegrationOptions.includes('"[Function]"') || strIntegrationOptions.includes("'[Circular]'")) {
    throw new Error(
      `Your Astro config file contains Expressive Code options that are not serializable to JSON.
			To use the \`<Code>\` component, please create a separate config file called \`ec.config.mjs\`
			in your project root, move your Expressive Code options object into the config file,
			and export it as the default export.`.replace(/\s+/g, " ")
    );
  }
  let mergedEcConfig = mergeEcConfigOptions(ecIntegrationOptions, ecConfigFileOptions);
  try {
    const { default: preprocessEcConfig } = await import('./preprocess-config_B94JZSW6.mjs');
    mergedEcConfig = await preprocessEcConfig({ ecConfig: mergedEcConfig, astroConfig }) || mergedEcConfig;
  } catch (error) {
    const msg = error instanceof Error ? error.message : error;
    throw new Error(`Failed to preprocess Expressive Code config for the Code component: ${msg}`, { cause: error });
  }
  const astroRenderer = await createAstroRenderer({
    astroConfig,
    ecConfig: mergedEcConfig
  });
  return {
    ...astroRenderer,
    // Also return any config options that are normally processed by `rehype-expressive-code`
    // and need to be processed by `astro-expressive-code` when using the `Code` component
    tabWidth: mergedEcConfig.tabWidth,
    getBlockLocale: mergedEcConfig.getBlockLocale
  };
}

const $$Astro = createAstro("https://takkatho.dev");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  function formatMessage(...messageParts) {
    return messageParts.map((part) => part.replace(/\s+/g, " ")).join("\n\n");
  }
  async function renderToHtml() {
    const defaultSlotContent = await Astro2.slots.render("default");
    if (defaultSlotContent?.trim().length) {
      throw new Error(
        formatMessage(
          `Unsupported child content was found inside the component.
				The code to render must be passed to the \`code\` prop as a string.`,
          `Please remove the following child content:
${defaultSlotContent}`
        )
      );
    }
    let { code, lang = "", meta = "", locale, class: className, ...props } = Astro2.props;
    if (!code || !code.trim().length) {
      throw new Error("Missing code to render. The `code` prop must be set to a non-empty string.");
    }
    const pageData = getPageData(Astro2.request);
    const groupIndex = ++pageData.blockGroupIndex;
    const renderer = await getRenderer();
    const tabWidth = renderer.tabWidth ?? 2;
    if (tabWidth > 0) code = code.replace(/\t/g, " ".repeat(tabWidth));
    const input = {
      code,
      language: lang,
      meta,
      locale,
      parentDocument: {
        sourceFilePath: Astro2.request.url,
        positionInDocument: {
          groupIndex
        }
      },
      props
    };
    if (!locale && renderer.getBlockLocale) {
      const file = {
        url: Astro2.url,
        // Provide default values for all required properties we don't have access to
        path: "",
        cwd: "/",
        data: {}
      };
      input.locale = await renderer.getBlockLocale({ input, file });
    }
    const { renderedGroupAst } = await renderer.ec.render(input);
    if (renderedGroupAst?.type === "element") {
      if (className) {
        const classNames = className.split(" ");
        classNames.forEach((className2) => addClassName(renderedGroupAst, className2));
      }
    }
    return toHtml(renderedGroupAst);
  }
  let html = "";
  try {
    html = await renderToHtml();
  } catch (err) {
    const prefix = `Failed to render a \`<Code>\` component on page ${Astro2.request.url}:`;
    const error = err instanceof Error ? err : new Error(String(err));
    throw new Error(`${prefix}

${error.message}`, { cause: error });
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/astro-expressive-code/components/Code.astro", void 0);

export { $$Badge as $, BadgeConfigSchema as B, I18nBadgeConfigSchema as I, parseWithFriendlyErrors as a, $$Aside as b, $$CardGrid as c, $$LinkCard as d, $$Card as e, $$Code as f, parseAsyncWithFriendlyErrors as p };
