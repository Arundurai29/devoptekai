import { defineCollection, z } from "astro:content";

// Home Page collection schema
const homepage = defineCollection({
  schema: z.object({
    banner_slider: z
      .object({
        enable: z.boolean(),
        slider_item: z.array(
          z.object({
            bg_image: z.string(),
            subtitle: z.string().optional(),
            title: z.string(),
            content: z.string(),
            paginationIcon: z.string().optional(),
            paginationName: z.string(),
            button: z.object({
              enable: z.boolean(),
              label: z.string(),
              link: z.string(),
            }),
          }),
        ),
      })
      .optional(),
    service: z
      .object({
        enable: z.boolean(),
        title: z.string(),
       
        subtitle: z.string().optional(),
      })
      .optional(),
    about: z
      .object({
        enable: z.boolean(),
        bg_image: z.string(),
        title: z.string(),
        content: z.string(),
        bulletPoint: z.array(z.string()).optional(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
      .optional(),
    our_expertise: z
      .object({
        enable: z.boolean(),
        subtitle: z.string().optional(),
        title: z.string(),
        content: z.string(),
        funfacts: z
          .array(
            z
              .object({
                icon: z.string().optional(),
                title: z.string(),
                count: z.number(),
              })
              .optional(),
          )
          .optional(),
        progressbar: z
          .array(
            z
              .object({
                title: z.string(),
                progress: z.string(),
              })
              .optional(),
          )
          .optional(),
      })
      .optional(),
    project: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string().optional(),
      })
      .optional(),
    mission: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    promo_video: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        bg_image: z.string(),
        videoURL: z.string(),
        videoTitle: z.string(),
      })
      .optional(),
    testimonial: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    call_to_action: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    blog: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string().optional(),
      })
      .optional(),
    clients_logo_slider: z
      .object({
        enable: z.boolean(),
        clientLogos: z
          .array(
            z
              .object({
                logo: z.string(),
                link: z.string().optional(),
              })
              .optional(),
          )
          .optional(),
      })
      .optional(),
  }),
});

// About Page schema
const aboutpage = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    image: z.string().optional(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean(),

    philosophy: z
      .object({
        enable: z.boolean(),
        subtitle: z.string().optional(),
        title: z.string(),
        content: z.string(),
        image: z.string(),
      })
      .optional(),

    ceo: z
      .object({
        enable: z.boolean(),
        bg_image: z.string(),
        title: z.string(),
        content: z.string(),
        signature: z.string().optional(),
        name: z.string(),
        designation: z.string(),
      })
      .optional(),

    mission: z
      .object({
        enable: z.boolean(),
      })
      .optional(),

    funfacts: z
      .object({
        enable: z.boolean(),
        bg_image: z.string(),
        counter: z
          .array(
            z
              .object({
                icon: z.string().optional(),
                title: z.string(),
                count: z.number(),
              })
              .optional(),
          )
          .optional(),
      })
      .optional(),
  }),
});

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    bg_image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Service collection schema
const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    short_description: z.string().optional(),
    link: z.string().optional(),
    video: z.string().optional(),
    icon: z.string().optional(),
    brochure: z.string().optional(),
    regular_day: z.string().optional(),
    regular_time: z.string().optional(),
    half_day: z.string().optional(),
    half_time: z.string().optional(),
    off_day: z.string().optional(),
    satisfied_clients: z
      .object({
        enable: z.boolean(),
        bg_image: z.string().optional(),
        subtitle: z.string().optional(),
        title: z.string(),
        content: z.string(),
        logo: z.array(z.string()),
      })
      .optional(),
    testimonial: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
  }),
});

// Project collection schema
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    live_demo: z.string().optional(),
    case_study: z.string().optional(),
    category: z.string().optional(),
    overview: z
      .array(
        z.object({
          label: z.string(),
          data: z.string(),
        }),
      )
      .optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    bg_image: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string(),
            icon: z.string(),
            link: z.string(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

// Team collection schema
const teamCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    date: z.date().optional(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    designation: z.string().optional(),
    image: z.string().optional(),
    cv: z.string().optional(),
    bio: z.string().optional(),
    information: z
      .array(
        z.object({
          label: z.string(),
          icon: z.string(),
          data: z.string(),
        }),
      )
      .optional(),
    contacts: z
      .array(
        z.object({
          icon: z.string(),
          id: z.string(),
        }),
      )
      .optional(),
    skill: z
      .array(
        z.object({
          label: z.string(),
          percentage: z.string(),
        }),
      )
      .optional(),
    social: z
      .array(
        z.object({
          icon: z.string().optional(),
          link: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepage,
  about: aboutpage,
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  services: servicesCollection,
  projects: projectsCollection,
  team: teamCollection,
};
