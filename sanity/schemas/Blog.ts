import { Rule, SchemaTypeDefinition } from "sanity";

export const Blog: SchemaTypeDefinition = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "cover_image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "service" } }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "reading_time",
      title: "Reading Time",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
