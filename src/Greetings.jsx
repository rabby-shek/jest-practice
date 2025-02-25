import React from 'react'

const Greetings = ({ name = "User"}) => {
  return (
    <div>
       Hello {name}
    </div>
  )
}

export default Greetings;
