import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({
  showMenu
}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex-col justify-between px-8`}>
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
