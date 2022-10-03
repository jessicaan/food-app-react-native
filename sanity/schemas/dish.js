export default {
  name: 'dish',
  title: 'Pratos',
  type: 'document',
  fields: [

    {
      name: "name",
      type: "string",
      title: "Nome do Prato",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descrição curta",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Valor do prato em R$",
    },
    {
      name: "image",
      type: "image",
      title: "Imagem do Prato",
    },
  ],
  }
