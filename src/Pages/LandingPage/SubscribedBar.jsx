import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button'
import '../../Styles/SubscribedBar.css';

const SubscribedBar = () => {
  return (
    <div className='SubscribedBar__Container'>
        <div className="SubscribedBar__Content">
            <h1>Subscribed To Stay Inform</h1>
            <p>Signup to Get Inspire and Keep up to Date on Empowerment Around the World</p>
           <Link to='/SubscribedForm'> <Button
                name="Subscribe"
                className="Subscribe__Button"
                type="button"
            /></Link>
        </div>

    </div>
  )
}

export default SubscribedBar