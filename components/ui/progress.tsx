import React from 'react'

export const Progress = ({ value, max = 100, className = '', indicatorClassName = '' }) => {
  const percentage = (value / max) * 100

  return (
    <div className={`bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className={`bg-blue-600 h-2.5 rounded-full ${indicatorClassName}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}
