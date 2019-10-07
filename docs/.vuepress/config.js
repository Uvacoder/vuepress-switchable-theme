module.exports = {
	title: 'Lady Mashiro',
	head: [
		['link', { rel: 'icon', href: `/favicon.png` }]
	],
	base: '/ladymashiro/',
	description: 'This is your page description.',
	themeConfig: {
		editLinks: false,
		editLinkText: 'Edit this page',
		lastUpdated: 'Last updated',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Workshops',
				link: '/workshops/'
			},
			{
				text: 'Basic Page',
				link: '/basic/'
			},
			{
				text: 'About',
				link: '/about/'
			}/*,
			{
				text: 'Component Example',
				link: '/component-example'
			},*/
			/*{
				text: 'Section',
				items: [
					{
						text: 'Section Introduction',
						link: '/section/#section-introduction'
					},
					{
						text: 'Some More Content!',
						link: '/section/#some-more-content'
					}
				]
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Twitter',
						link: 'https://www.twitter.com/'
					},
					{
						text: 'Email',
						link: 'mailto:hello@email.com'
					}
				]
			}*/
		],
		docsDir: 'docs'
	}
}
