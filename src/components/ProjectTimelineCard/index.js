import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectCardDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    duration,
    projectUrl,
  } = projectCardDetails
  return (
    <div className="project-card-container">
      <img className="project-image" src={imageUrl} alt="PROJECT" />
      <div className="card-title-container">
        <h1 className="heading-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="react-icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="description-text">{description}</p>
      <a className="href-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
