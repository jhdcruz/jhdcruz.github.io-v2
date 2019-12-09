/**
 *
 * ! Add new projects here instead of manually tampering the actual code `Projects.js`
 * ! Each project/id will be automatically be mapped to the website
 *
 * * FORMAT:
 * ?   /@id\           - specifies the map/order (ascending order)
 * ?  /@icon\          - for the project
 * ?  /@title\         - of the project
 * ?  /@description\   - of the title
 * ?  /@link\          - of the project source
 * ?  /@category\      - labels for the project, such as languages
 * ?  /@preview\       - of the project (applicable if it is a website)
 */

export default [
  {
    id: "1",
    icon: "https://i.imgur.com/HIrXh3g.png",
    title: "About Me | Portfolio",
    description: "Revamp of the personal portfolio website | Current Website",
    link: "https://github.com/jhdcruz/jhdcruz.github.io",
    category: "ReactJS (Manual Setup)",
    preview: "https://jhdcruzgithubio-v2.jhdcrux.now.sh/"
  },
  {
    id: "2",
    icon: "https://i.imgur.com/UmdYBml.png",
    title: "Desktop Messenger",
    description: "Facebook Messenger for Desktop w/ Frameless window.",
    link: "https://github.com/jhdcruz/Desktop-Messenger",
    category: "Electron, NSIS"
  },
  {
    id: "3",
    icon: "https://i.imgur.com/FLBWrqg.png",
    title: "Desktop Messages",
    description: "Google's Android Messages for Desktop w/ Frameless Window",
    link: "https://github.com/jhdcruz/Desktop-Messages",
    category: "Electron, NSIS"
  }
];
