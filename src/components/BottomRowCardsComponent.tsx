import React from 'react'
import '../App.css';

const BottomRowCardsComponent = (prop: {card:string, text:string, type:string, logo:string, headText:string, followers:string, statsColor:string, statLogo:string, stats:string}) => {
  return (
    <div>
      <div className={`${prop.card} grid grid-cols-2 px-6 py-4`} style={{borderRadius:'5px'}}>
        <div className={`${prop.text} interBold`}>{prop.type}</div>
        <div className='grid justify-end'><img src={prop.logo} alt='social media logo'/></div>
        <div className={`${prop.headText} text-[35px] leading-none mt-10`}>{prop.followers}</div>
        <div className={`text-end mt-auto leading-none ${prop.statsColor}`}><img className='inline me-2' src={prop.statLogo} alt='statistics arrow'/>{prop.stats}</div>
      </div>
    </div>
  )
}

export default BottomRowCardsComponent
