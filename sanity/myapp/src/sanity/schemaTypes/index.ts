import { type SchemaTypeDefinition } from 'sanity'
import books from './books'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [books],
}
