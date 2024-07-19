declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "about";
  data: InferEntrySchema<"about">
} & { render(): Render[".md"] };
};
"authors": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"john-doe.md": {
	id: "john-doe.md";
  slug: "john-doe";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"mark-dinn.md": {
	id: "mark-dinn.md";
  slug: "mark-dinn";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
};
"blog": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"business-magnate.md": {
	id: "business-magnate.md";
  slug: "business-magnate";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cool-the-audits.md": {
	id: "cool-the-audits.md";
  slug: "cool-the-audits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"economics-meter.md": {
	id: "economics-meter.md";
  slug: "economics-meter";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"finance-my-business.md": {
	id: "finance-my-business.md";
  slug: "finance-my-business";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"money-and-money.md": {
	id: "money-and-money.md";
  slug: "money-and-money";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"new-hugo-post.md": {
	id: "new-hugo-post.md";
  slug: "new-hugo-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"contact": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
};
"homepage": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "homepage";
  data: InferEntrySchema<"homepage">
} & { render(): Render[".md"] };
};
"pages": {
"elements.mdx": {
	id: "elements.mdx";
  slug: "elements";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] };
"privacy-policy.md": {
	id: "privacy-policy.md";
  slug: "privacy-policy";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};
"policy": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "policy";
  data: any
} & { render(): Render[".md"] };
};
"pricing": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "pricing";
  data: any
} & { render(): Render[".md"] };
};
"products": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "products";
  data: any
} & { render(): Render[".md"] };
"docusage.md": {
	id: "docusage.md";
  slug: "docusage";
  body: string;
  collection: "products";
  data: any
} & { render(): Render[".md"] };
"offgrid-ai.md": {
	id: "offgrid-ai.md";
  slug: "offgrid-ai";
  body: string;
  collection: "products";
  data: any
} & { render(): Render[".md"] };
"ragworks.md": {
	id: "ragworks.md";
  slug: "ragworks";
  body: string;
  collection: "products";
  data: any
} & { render(): Render[".md"] };
"web-concierge.md": {
	id: "web-concierge.md";
  slug: "web-concierge";
  body: string;
  collection: "products";
  data: any
} & { render(): Render[".md"] };
};
"projects": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-1.md": {
	id: "project-1.md";
  slug: "project-1";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-2.md": {
	id: "project-2.md";
  slug: "project-2";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-3.md": {
	id: "project-3.md";
  slug: "project-3";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-4.md": {
	id: "project-4.md";
  slug: "project-4";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-5.md": {
	id: "project-5.md";
  slug: "project-5";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-6.md": {
	id: "project-6.md";
  slug: "project-6";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-7.md": {
	id: "project-7.md";
  slug: "project-7";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"project-8.md": {
	id: "project-8.md";
  slug: "project-8";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"sections": {
"call-to-action.md": {
	id: "call-to-action.md";
  slug: "call-to-action";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"docusage.md": {
	id: "docusage.md";
  slug: "docusage";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"mission-vision.md": {
	id: "mission-vision.md";
  slug: "mission-vision";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"offgridai.md": {
	id: "offgridai.md";
  slug: "offgridai";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"our-expertise.md": {
	id: "our-expertise.md";
  slug: "our-expertise";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"ragworks.md": {
	id: "ragworks.md";
  slug: "ragworks";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"testimonial.md": {
	id: "testimonial.md";
  slug: "testimonial";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
"webconcierge.md": {
	id: "webconcierge.md";
  slug: "webconcierge";
  body: string;
  collection: "sections";
  data: any
} & { render(): Render[".md"] };
};
"services": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"business-automations.md": {
	id: "business-automations.md";
  slug: "business-automations";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"business-consulting.md": {
	id: "business-consulting.md";
  slug: "business-consulting";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"data-driven-decision-support.md": {
	id: "data-driven-decision-support.md";
  slug: "data-driven-decision-support";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"market-strategy.md": {
	id: "market-strategy.md";
  slug: "market-strategy";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"strategic-business-consultation.md": {
	id: "strategic-business-consultation.md";
  slug: "strategic-business-consultation";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"targeted-marketing-strategies.md": {
	id: "targeted-marketing-strategies.md";
  slug: "targeted-marketing-strategies";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"valuable-idea.md": {
	id: "valuable-idea.md";
  slug: "valuable-idea";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
};
"solutions": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "solutions";
  data: any
} & { render(): Render[".md"] };
"ai-automotive.md": {
	id: "ai-automotive.md";
  slug: "ai-automotive";
  body: string;
  collection: "solutions";
  data: any
} & { render(): Render[".md"] };
"ai-e-commerce.md": {
	id: "ai-e-commerce.md";
  slug: "ai-e-commerce";
  body: string;
  collection: "solutions";
  data: any
} & { render(): Render[".md"] };
"ai-finance.md": {
	id: "ai-finance.md";
  slug: "ai-finance";
  body: string;
  collection: "solutions";
  data: any
} & { render(): Render[".md"] };
"ai-hr.md": {
	id: "ai-hr.md";
  slug: "ai-hr";
  body: string;
  collection: "solutions";
  data: any
} & { render(): Render[".md"] };
"ai-manufacturing.md": {
	id: "ai-manufacturing.md";
  slug: "ai-manufacturing";
  body: string;
  collection: "solutions";
  data: any
} & { render(): Render[".md"] };
};
"team": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"Alex-Cagar.md": {
	id: "Alex-Cagar.md";
  slug: "alex-cagar";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"Alisha-Mayar.md": {
	id: "Alisha-Mayar.md";
  slug: "alisha-mayar";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"Andrew-Givson.md": {
	id: "Andrew-Givson.md";
  slug: "andrew-givson";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"Joseph-Pullin.md": {
	id: "Joseph-Pullin.md";
  slug: "joseph-pullin";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"Phillip-Wilson.md": {
	id: "Phillip-Wilson.md";
  slug: "phillip-wilson";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"Steve-Woah.md": {
	id: "Steve-Woah.md";
  slug: "steve-woah";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
