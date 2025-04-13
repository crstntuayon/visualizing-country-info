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
            <button><img src={flag_icon_1} alt="" /></button>
            <p>Philippine Flag</p>
      </div>
            </div>

            <div className='flags'>
            
            <div className='flag'>
           
            <img src={flag_2} alt="" />
            <div className='caption'>
            <button><img src={flag_icon_2} alt="" /></button>
            <p>South Korean Flag</p>
      </div>
            </div>
            </div>

            <div className='flags'>
            
            <div className='flag'>
           
            <img src={flag_3} alt="" />
            <div className='caption'>
            <button><img src={flag_icon_3} alt="" /></button>
            <p>Thai Flag</p>
      </div>
            </div>
            </div>
</div>
         
            
  )
}

export default Flag;
