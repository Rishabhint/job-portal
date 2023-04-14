//

export default {
  title: 'Job Posting',
  name: 'jobPosting',
  type: 'document',
  fields: [
    {
      name: 'personHiring',
      title: 'Person Hiring',
      type: 'reference',
      to: [{type: 'recruiter'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobDescription',
      title: 'Job Description',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobLocation',
      title: 'Job Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'fullTime'},
          {title: 'Part-time', value: 'partTime'},
          {title: 'Contract', value: 'contract'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Internship', value: 'internship'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobCategory',
      title: 'Job Category',
      type: 'string',
      options: {
        list: [
          {title: 'Marketing', value: 'marketing'},
          {title: 'Engineering', value: 'engineering'},
          {title: 'Design', value: 'design'},
          {title: 'Sales', value: 'sales'},
          {title: 'Customer Service', value: 'customerService'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobRequirements',
      title: 'Job Requirements',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobResponsibilities',
      title: 'Job Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobBenefits',
      title: 'Job Benefits',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
