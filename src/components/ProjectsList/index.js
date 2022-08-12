import './index.css'

const ProjectsList = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails

  return (
    <li className="projects-list">
      <img src={imageUrl} alt={name} className="project-image" />
      <p className="project-name">{name}</p>
    </li>
  )
}

export default ProjectsList
