import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/SubscribedForm.css';
import BackwardIcon from '../ProjectImages/Icons/NavigateBackIcon.png';
import Button from '../Components/Button';

const SubscribedForm = () => {
  return (
    <div className='SubscribedForm__Container'>
        <div className="SubscribedForm__Content">
           <Link to='/'><img id='BackIcon' src={BackwardIcon} alt=""/></Link> 
            <form action="" className="Subscribed__Form">
                <div className="FirstNameInput">
                    <label htmlFor="">First Name</label>
                    <input name='FirsName' type="text" />
                </div>
                <div className="LastNameInput">
                    <label htmlFor="">Last Name</label>
                    <input name='LastName' type="text" />
                </div>
                <div className="EmailInput">
                    <label htmlFor="">Email</label>
                    <input name='email' type="email" />
                </div>
                <div className="CommentInput">
                    <label htmlFor="">Comment</label>
                    <textarea name="comment" id="textarea" cols="30" rows="10"></textarea>
                </div>
                <Button
                    name="Subscribe"
                    className="SubscribeForm"
                    type='submit'
                />
            </form>
        </div><br/><br/>

    </div>
  )
}

export default SubscribedForm