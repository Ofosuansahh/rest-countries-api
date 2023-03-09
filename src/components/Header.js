import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const lis = document.querySelectorAll("li")
    
    details.forEach((detail) => {
      detail.classList.toggle("light-theme")
    })
    header.classList.toggle("light-theme")
    lis.forEach((li) => {
      li.classList.toggle("light-theme")
    })
    document.body.classList.toggle("light-theme")
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <button className="btn-moon" onClick={() => changeTheme()}>
            <FontAwesomeIcon icon={faMoon}> </FontAwesomeIcon> Dark mode
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
