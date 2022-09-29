import React from 'react'
import '../../Styles/OurPriority.css'
import PriorityCard from '../../Components/PriorityCard'

const LpPriority = () => {
  return (
    <div className="Priority__container"  >
        <div className="Priority__content">
            <h1>Our Priorities</h1>
            <div className="Our__PriorityCard-Container">
              <div className="PriorityCards__Container">
                  <PriorityCard
                  />
                  <PriorityCard
                  />
              </div>
            </div>
        </div>
    </div>
  )
}

export default LpPriority