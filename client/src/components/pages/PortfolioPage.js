import React from 'react'
import { SingleProject, SPortfolioList } from 'components'

const projects = [
  {
    name: 'Aloha',
    desc: `A simple HTML/CSS page with minimal Javascript used to practice my basic skills`,
    tech: ['HTML', 'CSS', 'JS']
  },
  {
    name: 'Instanews',
    desc: `A one page site that connects to the New York Times API to get information about current 
            stories and displays them.`,
    tech: ['HTML', 'CSS', 'JS']
  },
  { name: 'Pong', desc: `Simple version of Pong made using Javascript.`, tech: ['JS', 'CSS'] },
  {
    name: 'Quotes',
    desc: `A wordpress site that has the ability to store quotes, allow the user to add new 
            quotes and offer a vareity of ways to show the stored quotes.`,
    tech: ['PHP', 'Wordpress', 'CSS', 'JS']
  },
  {
    name: 'PlannedParenthood',
    desc: `A wordpress site that was initially part of a project for a community partner of RED Academy,
            it has now become a contract that a team led by me is actively working on and completing the
            site for public launch.`,
    tech: ['PHP', 'Wordpress', 'CSS', 'JS']
  },
  {
    name: 'Foostown',
    desc: `React App created in conjunction with my classmates in the FullStack Developer class 
            at RED Academy that allowed for user accounts, match information, statistics on matches and 
            the ability to create more matches. The server side architechture included PostGres as a 
            database and GraphQL as our connector.`,
    tech: ['ReactJS', 'Material UI', 'GraphQL', 'Apollo', 'PostGres']
  },
  {
    name: 'R10',
    desc: `React Native App that allowed a user to browse through a list of conferences to get their 
            information and information about the speakers at the conference. Users could also favourite 
            talks that they were interested in and see that list in a favourites tab.`,
    tech: ['React Native', 'Material UI', 'GraphQL', 'Apollo']
  },
  {
    name: 'Mozaik',
    desc: `React Native App developed for Mozaik Global by our FullStack Developer class at RED Academy 
            as one part of a Learning Material Marketplace. The app had the functionality to create and 
            login to user accounts, browse through learning materials, see self created learning materials,
            search through all learning materials and manage user information(change avatar, change password,
            change name, change email). The front end was built in React Native with Maerial UI for styling and
            the back end was built on top of Apollo and GraphQL with PostGres as the database.`,
    tech: ['React Native', 'Material UI', 'GraphQL', 'Apollo', 'PostGres']
  }
]
const PorfolioPage = () => (
  <div>
    <SPortfolioList>
      {projects.map((project) => (
        <SingleProject pname={project.name} desc={project.desc} tech={project.tech} />
      ))}
    </SPortfolioList>
  </div>
)

export default PorfolioPage
