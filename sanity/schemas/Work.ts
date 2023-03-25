import { Rule, SchemaTypeDefinition } from "sanity";

export const Work: SchemaTypeDefinition = {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
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
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "service" } }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      name: "challenge",
      title: "Challenge",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "solution",
      title: "Solution",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "result",
      title: "Result",
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
