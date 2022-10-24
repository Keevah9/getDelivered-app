export default {
  name: "featured",
  type: "document",
  title: "Featured Menu Categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "clothings",
      type: "array",
      title: "Clothings",
      of: [{type:"reference", to:[{type: "clothing"}]}]
    },
  ],
};