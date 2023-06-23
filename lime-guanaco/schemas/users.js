// schemas/users.js
export default {
  name: 'users',
  type: 'document',
  title: 'User Details',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'EMail',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
    },
  ],
}
