export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff962d420fc87a72b81ca3b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-x57py9e8',
                  apiId: '9f2e3f46-a03f-444a-9476-05f77cfb0ea6'
                },
                {
                  buildHookId: '5ff962d4349da79ce61cfdbc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1wgveiek',
                  apiId: '9f2c0b1e-9e9c-4962-b938-629d6c6911c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cameramanbrayton/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1wgveiek.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
