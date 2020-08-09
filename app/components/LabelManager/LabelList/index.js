import React from 'react'
import { LabelListContainer } from '../style'

export default ({ labels }) => {
  
  return (
    <LabelListContainer>
      {labels.map(label => (<div key={label.name}>{label.name}</div>))}
    </LabelListContainer>
  )
}
