import React from 'react'

const weatherBox = ({ weather }) => {
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      {/* 삼항연상자에서 if만 있는 형식 */}
      <h2>{weather?.main.temp}℃ / {((weather?.main.temp * 9)/5 + 32).toFixed(2)}</h2>
      <h3>{weather?.weather[0].description }</h3>
    </div>
  )
}

export default weatherBox;