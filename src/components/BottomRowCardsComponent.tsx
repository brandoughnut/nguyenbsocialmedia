import React from 'react'
import '../App.css';

const BottomRowCardsComponent = (prop:any) => {
  return (
    <div>
      <div className='darkCard grid grid-cols-2 mb-5 px-8 py-8' style={{borderRadius:'5px'}}>
        <div className='darkText2'>{prop.type}</div>
        <div className='grid justify-end'><img src={prop.logo} alt='social media logo'/></div>
        <div className='darkText1 text-[35px] leading-none mt-10'>{prop.followers}</div>
        <div className={`text-end mt-auto leading-none ${prop.statsColor}`}><img className='inline me-2' src={prop.statLogo} alt='statistics arrow'/>{prop.stats}</div>
      </div>
    </div>
  )
}

export default BottomRowCardsComponent
