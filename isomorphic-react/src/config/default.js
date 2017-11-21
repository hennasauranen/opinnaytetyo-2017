module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Opinnäytetyö Sauranen',
    titleTemplate: 'Opinnäytetyö Sauranen - %s',
    meta: [
      {
        name: 'description',
        content: 'Opinnäytetyöntuotos, Isomorfinen ReactJS-sovellus.',
      },
    ],
  },
};
