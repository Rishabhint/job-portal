//
export default {
  title: 'Others',
  name: 'others',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text',
      name: 'otherText',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'headImage',
      type: 'image',
      options: {
        accept: 'image/*',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'About Us', value: 'aboutUs'},
          {title: 'Terms and Conditions', value: 'termsAndConditions'},
          {title: 'Company Page', value: 'companyPage'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
