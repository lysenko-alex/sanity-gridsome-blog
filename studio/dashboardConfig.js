export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '618c195e18cead12fba07751',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-g41d2r39',
                  apiId: 'db5fe237-9941-43a5-b29f-4acfb02a7a48'
                },
                {
                  buildHookId: '618c195f26579e1526726c08',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-eni27rem',
                  apiId: '3940a6f4-a4e4-42c4-8e60-bd180a35b145'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lysenko-alex/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-eni27rem.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
