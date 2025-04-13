import React from 'react'
import './Flag.css'
import flag_1 from '../../Assets/flag_1.png'
import flag_icon_1 from '../../Assets/flag_icon_1.png'
import flag_2 from '../../Assets/flag_2.png'
import flag_icon_2 from '../../Assets/flag_icon_2.png'
import flag_3 from '../../Assets/flag_3.png'
import flag_icon_3 from '../../Assets/flag_icon_3.png'



const Flag = () => {
  return (
    <div className='flags'>
            
            <div className='flag'>
           
            <img src={flag_1} alt="" />
            <div className='caption'>

            <a href="https://youtu.be/LVFvRNRTEd4?si=_OaATCcy1YDX1YDt" target="_blank" rel="noopener noreferrer">
            <button >
                  <img src={flag_icon_1} alt="Philippine Flag"/>
            </button>
            </a>
            
            <p>Philippine Flag</p>
      </div>
            </div>

            <div className='flags'>
            
            <div className='flag'>
           
            <img src={flag_2} alt="" />
            <div className='caption'>

            <a href="https://youtu.be/6llQB4p9NT4?si=AmJNylk_S8uIlXMc" target="_blank" rel="noopener noreferrer">
            <button >
                  <img src={flag_icon_2} alt="South Korean Flag"/>
            </button>
            </a>

            <p>South Korean Flag</p>
      </div>
            </div>
            </div>

            <div className='flags'>
            
            <div className='flag'>
           
            <img src={flag_3} alt="" />
            <div className='caption'>
           
            <a href="https://youtu.be/mxflUwTlzlA?si=QxjLzuDkpdI6xusw" target="_blank" rel="noopener noreferrer">
            <button >
                  <img src={flag_icon_3} alt="Thai Flag"/>
            </button>
            </a>

            <p>Thai Flag</p>
      </div>
            </div>
            </div>
</div>
         
            
  )
}

export default Flag;
