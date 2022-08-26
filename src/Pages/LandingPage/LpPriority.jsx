import React from 'react'

import { useEffect } from "react";
import '../../Styles/OurPriority.css'
import PriorityCard from '../../Components/PriorityCard'

const LpPriority = () => {
  return (
    <div className="Priority__container"  >
        <div className="Priority__content">
            <h1>Our Priorities</h1>
            <div className="PriorityCards__Container">
                <PriorityCard
                />
                <PriorityCard
                />
            </div>
        </div>
    </div>
  )
}

export default LpPriority