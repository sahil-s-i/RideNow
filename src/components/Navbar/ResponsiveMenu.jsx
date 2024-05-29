import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({
  showMenu
}) => {
  return (
    <div>
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1>Preminum user</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResponsiveMenu
