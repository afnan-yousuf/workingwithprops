import React from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import style from './css/Slider.module.css'
function Slider() {



    return (
        <>
            <div className={style.slider}>
                <div className={style.inner}>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                </div>
            </div>
        </>
    )
}

export default Slider