// /schemas/user.js

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Job Recruiter', value: 'jobRecruiter'},
          {title: 'Job Applicant', value: 'jobApplicant'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
