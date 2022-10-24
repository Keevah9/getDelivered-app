export default {
  name: "clothing",
  title: "Clothing",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Clothing name name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Clothing image",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the store",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the store",
    },
    {
      name: "address",
      type: "string",
      title: "Clothing address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from (1-5 stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and  5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "clothes",
      type: "array",
      title: "clothes",
      of: [{type:"reference", to:[{type:"cloth"}]}]
    },
  ],
};
