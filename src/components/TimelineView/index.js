import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  renderTheCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseCardDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectCardDetails={item} />
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="time-line-container">
        <h1 className="main-heading">
          MY JOURNEY OF
          <br />
          <span className="course-heading"> CCBP 4.0</span>
        </h1>

        <div style={{width: '1000px', height: '950px'}}>
          <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(eachItem => this.renderTheCard(eachItem))}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
