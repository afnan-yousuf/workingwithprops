import React from 'react'
import style from './css/SocialLink.module.css'

function SocialLink() {
  return (
    <div className={style.sociallink}>
        <a href='https://www.facebook.com/xloopdigital' target='_blank'><i className='fa fa-facebook'></i></a>
        <a href='https://www.facebook.com/xloopdigital' target='_blank'><i className='fa fa-linkedin'></i></a>
        <a href='https://www.facebook.com/xloopdigital' target='_blank'><i className='fa fa-instagram'></i></a>
        <a href='https://www.facebook.com/xloopdigital' target='_blank'><i className='fa fa-youtube'></i></a>
    </div>
  )
}

export default SocialLink