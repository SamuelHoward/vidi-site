module.exports = {
    pathPrefix: "/vidi-site",
  siteMetadata: {
    title: `Vidi Programming Language`,
    description: `Start coding using the Vidi programming language, a simple language with a simple syntax that is growing all the time.`,
    author: `Samuel Howard`, 
  },
    plugins: [
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		name: `src`,
		path: `${__dirname}/src/`,
	    },
	},
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
	`gatsby-plugin-sharp`,
	{
	    resolve: `gatsby-transformer-remark`,
	    options: {
		plugins: [
		    {
			resolve: `gatsby-remark-images`,
			options: {
			    maxWidth: 800,
			},
		    },
		],
	    },
	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vidi-lang`,
        short_name: `vidi`,
        start_url: `/`,
        background_color: `#46b4eb`,
        theme_color: `#46b4eb`,
        display: `minimal-ui`,
        icon: `src/images/vidi-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
