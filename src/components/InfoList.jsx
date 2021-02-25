import React from 'react'

const InfoList = ({items, totalCount}) => {
  
  const infoList = items.map(item => {
    return (
      <div>
        
      </div>
    )
  })
  
  return (
    <div>
      <h4>Total hits: {totalCount}</h4>
    </div>
  )
}

export default InfoList
