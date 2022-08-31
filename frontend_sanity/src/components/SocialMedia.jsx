import React from 'react'

import {BsLinkedin,BsGithub,BsMailbox} from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app_social'>
    <div>
      <BsLinkedin /> 
    </div>
    <div>
        <BsGithub />
    </div>
        <BsMailbox/>
    </div>
  )
}

export default SocialMedia