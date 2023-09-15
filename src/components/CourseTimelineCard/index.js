import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseCardDetails} = props
  const {courseTitle, description, duration, tagsList} = courseCardDetails

  return (
    <div className="course-card-container">
      <div className="card-title-container">
        <h1 className="heading-title">{courseTitle}</h1>

        <div className="duration-container">
          <AiFillClockCircle className="react-icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tags-list-container">
        {tagsList.map(eachItem => (
          <div className="tag-container" key={eachItem.id}>
            <p className="tag-name">{eachItem.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
