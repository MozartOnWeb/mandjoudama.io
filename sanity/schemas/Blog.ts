import { Rule, SchemaTypeDefinition } from "sanity";

export const Blog: SchemaTypeDefinition = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
