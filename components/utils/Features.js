import React from 'react'
import Image from 'next/image'

export const Features = ({ prodName, price, imgSrc }) => {
  return (
    <div style={{paddingRight:'1rem'}}>
      <h4 style={{fontSize:'16px'}}>{prodName}</h4>
      <h2>{price}</h2>
      <Image width={440} height={440} src={imgSrc}></Image>
    </div>
  )
}