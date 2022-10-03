export default {
  name: 'featured',
  title: 'Menu Categorias Featured',
  type: 'document',
  fields: [

    {
      name: "name",
      type: "string",
      title: "Nome da Categoria Featured",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descrição curta",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurantes",
      of: [{ type: "reference", to: [{ type: "restaurant"}] }],
    },
  ],
  }
