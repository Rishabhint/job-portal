import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'foemrzcg',
    dataset: 'production',
    indexes: [
      {
        name: 'uniqueUsername',
        unique: true,
        keys: {
          username: 'asc',
        },
      },
    ],
  },
})
