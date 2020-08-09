import React from 'react';
import style from './index.css'

export const LabelsManagerWrapper = ({ children }) => {
  return (
    <div className={style.LabelsManagerWrapper}>
      {children}
    </div>
  )
}

export const LabelListContainer = ({ children }) => {
  return (
    <div className={style.LabelListContainer}>
      {children}
    </div>
  )
}
