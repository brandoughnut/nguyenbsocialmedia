import React from 'react'
import '../App.css';

const TopRowCardsComponent = (prop:any) => {
  return (
    <div>
      <div className='darkCard text-center' style={{borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}>
        <div className={`h-[6px] ${prop.topBorder}`} style={{borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}></div>
        
        <p className='darkText2'><img className='inline me-2 my-6' src={prop.logo} alt='social media logo'/>{prop.username}</p>
        <h1 className='darkText1 text-[50px] leading-none'>{prop.followers}</h1>
        <p className='darkText2 tracking-[0.25em]'>{prop.type}</p>
        <p className={prop.statsColor}><img className='inline me-2 my-8' src={prop.statLogo} alt='statistics arrow'/>{prop.stats}</p>
      </div>
    </div>
  )
}

export default TopRowCardsComponent
