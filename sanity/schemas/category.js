export default {
  name: 'category',
  title: 'Menu Categorias',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagem da Categoria',
      type: 'image',
    },
  ],
};
