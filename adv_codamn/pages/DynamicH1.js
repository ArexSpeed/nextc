import React from 'react'

const H1 = () => {

  const compute = Array(1000).fill(0).forEach((x) => console.log(x));
  return (
    <div>
      Hello Dynamic
    </div>
  )
}

export default H1
