import React, { useEffect } from 'react'
import Customisedsec1 from './customisedsec1/Customisedsec1'
import Customised from './Customisedsec2/Customised'
import Customisedsec3 from './customisedsec3/Customisedsec3'

function CustomisedJewels() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Customisedsec1 />
      <Customised />
      <Customisedsec3 />
    </div>
  )
}

export default CustomisedJewels
