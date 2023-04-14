//
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      title: 'Testimonial Text',
      name: 'testimonialText',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Author Name',
      name: 'authorName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Author Title',
      name: 'authorTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Author Image',
      name: 'authorImage',
      type: 'image',
      options: {
        accept: 'image/*',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
