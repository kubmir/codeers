module.exports = {
  siteMetadata: {
    title: `Codeers - Mobilní aplikace. Velké věci na malém prostoru.`,
    description: `Jsme vývojářská a poradenská firma. Specializujeme se na integraci nativních mobilních aplikací do Vašeho podnikání.`,
    author: `Codeers`,
    siteUrl: `https://codeers.cz/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svg/logonotext.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `cs`],
        defaultLanguage: `cs`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/',
            languages: ['en', 'cs']
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`
  ],
}
