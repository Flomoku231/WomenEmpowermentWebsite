import React from 'react'
import '../../Styles/Partners.css';
import Logo1 from '../../ProjectImages/Picture/Partner1.png'
import Logo2 from '../../ProjectImages/Picture/Partner2.png'
import Logo3 from '../../ProjectImages/Picture/Partner3.png'
import Logo4 from '../../ProjectImages/Picture/Partner4.png'
import Logo5 from '../../ProjectImages/Picture/Partner5.png'
import Logo6 from '../../ProjectImages/Picture/Partner6.png'

const Partners = () => {
  return (
    <div className='Partners__Container'>
        <div className="Partners__Logos">
            <div className="Logos__row1">
                <img src={Logo1} alt=""/>
                <img src={Logo2} alt=""/>
            </div>
            <div className="Logos__row2">
                <img src={Logo3} alt=""/>
                <img src={Logo4} alt=""/>
            </div>
            <div className="Logos__row3">
                <img src={Logo5} alt=""/>
                <img src={Logo6} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Partners