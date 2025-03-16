import { Rule } from "sanity";

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().min(3).warning('Product name must be at least 3 characters long.')
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule:Rule) => Rule.required().min(0).warning('Price must be a positive number.')
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule:Rule) => Rule.required().max(2000).warning('Description should not exceed 2000 characters.')
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping and positioning
        },
        validation: (Rule:Rule) => Rule.required().warning('Image is required.')
      }, 
      {
        name :"category",
        title:"Category Name",
        type:"reference",
        to:[
            {
                type:"category"
            }
        ]
      }
    ]
  }
  