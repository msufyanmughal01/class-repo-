import { defineType } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(3).warning('Category name must be at least 3 characters long.')
    },
  ]
});
