import React from 'react'
import { Button } from 'react-bootstrap';

const weatherButton = ({cities, setCity, index, handleCityChange}) => {
  return (
    <div>
      <Button variant="warning" onClick={() => handleCityChange('current')}>
        Current Location
      </Button>{' '}
      {cities.map((item) => (
        <Button variant="warning" key={index} onClick={() => setCity(item)}>
          {item}
        </Button>
      ))};
    </div>
  )
}

export default weatherButton