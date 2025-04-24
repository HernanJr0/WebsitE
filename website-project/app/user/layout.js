//sharing of the UI components between routes

import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
