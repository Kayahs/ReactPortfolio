import React from 'react'
import SingleProject from './SingleProject'
const projects = [{
  'Aloha', 'Instanews', 'Pong', 'Quotes', 'Foostown', 'R10', 'Mozaik']
const PorfolioPage = () => (
  <div>
    {projects.map(project => (
      <SingleProject pname={project} />
    ))}
  </div>
)

export default PorfolioPage
