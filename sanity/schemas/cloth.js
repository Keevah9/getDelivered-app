export default {
  name: "cloth",
  title: "Cloth",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of cloth",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of cloth",
      type: "image",
      
    },
    {
      name: "price",
      title: "Price of cloth in GBP",
      type: "number",
      
    },
  ],
};
