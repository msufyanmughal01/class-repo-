import { defineType } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'firsthero',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'secondhero',
      title: 'Hero Image',
      type: 'image',
    }
]})