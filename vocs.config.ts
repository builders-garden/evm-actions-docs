import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'EVM Actions',
  sidebar: [
    {
      text: 'Getting started',
      link: '/getting-started',
    },
    {
      text: 'Actions starter kit',
      link: '/starter-kit',
    },
    {
      text: 'Declaring Actions',
      link: '/declaring-actions',
    },
    {
      text: 'Action types',
      link: '/action-types',
    },
    {
      text: 'Shortcuts',
      link: '/shortcuts',
    },
  ],
  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/builders-garden', 
    }, 
    { 
      icon: 'x', 
      link: 'https://x.com/builders_garden', 
    }, 
  ], 
  topNav: [ 
    { text: 'Builders Garden', link: 'https://www.builders.garden/'}, 
  ] 
})