import { Rule, SchemaTypeDefinition } from "sanity";

export const Service: SchemaTypeDefinition = {
  name: "service",
  title: "Service",
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
