export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e77de8f08cbd0539c811b2d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pnrwaxm4',
                  apiId: 'b5a3685f-83f8-4201-827a-ed01a8c10420'
                },
                {
                  buildHookId: '5e77de8fab731bceb180b304',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vkjnccmr',
                  apiId: '1b665cf9-74ad-4648-a59c-8bab9e7e4aa6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vonZ/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vkjnccmr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
