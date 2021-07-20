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
    `gatsby-plugin-styled-components`
  ],
}
