export default {
  name: 'restaurant',
  title: 'Restaurante',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: "Nome do Restaurante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descrição curta",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Imagem do Restaurante",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude do Restaurante",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude do Restaurante",
    },
    {
      name: "adress",
      type: "string",
      title: "Endereço do Restaurante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Avaliação",
      validation: (Rule) =>
      Rule.required()
        .min(1)
        .max(5)
        .error("Por favor insira um valor entre 1 e 5")
    },
    {
      name: "type",
      type: "string",
      title: "Categoria",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Pratos",
      of: [{ type: "reference", to: [{type: "dish" }] }],
    },

  ],
}
