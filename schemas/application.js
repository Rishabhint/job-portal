//
export default {
  title: 'Job Posting Application',
  name: 'jobPostingApplication',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text',
    },
    {
      name: 'portfolioLink',
      title: 'Portfolio Link',
      type: 'url',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
