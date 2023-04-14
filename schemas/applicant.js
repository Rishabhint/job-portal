// /schemas/jobApplicant.js

export default {
  name: 'jobApplicant',
  title: 'Job Applicant',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'reference',
      to: [{type: 'user'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'education',
      title: 'Education and Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
            },
            {
              name: 'degree',
              title: 'Degree or Certificate',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date Completed',
              type: 'date',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'employmentHistory',
      title: 'Employment History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
            },
            {
              name: 'employer',
              title: 'Employer',
              type: 'string',
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
            },
          ],
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills and Abilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'skillName',
              title: 'Skill Name',
              type: 'string',
            },
            {
              name: 'proficiency',
              title: 'Proficiency',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'relationship',
              title: 'Relationship',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'email',
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
      options: {
        accept:
          'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
