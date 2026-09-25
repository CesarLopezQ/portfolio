//Modules
import Terminal from './modules/Terminal'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faWindowMaximize, faKey } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

//Tooltip
import { Tooltip } from 'react-tooltip'

//Functions
import github from './utils/links/github.ts'
import mail from './utils/links/mail.ts'
import whatsapp from './utils/links/whatsapp.ts'
import reactStarter from './utils/links/reactStarter.ts'
import cantoCafe from './utils/links/cantoCafe.ts'

//CSS
import style from './styles/App.module.css'
import { useState } from 'react'

export default function App() {
  const [shadowPause, setShadowPause] = useState(true)

  function toggleShadowCycle() {
    setShadowPause((current) => !current)
  }

  return (
    <div className={style.container}>
      {/*NavBar*/}
      <div
        className={`${style.card} ${shadowPause ? style.active : style.pause} ${style.navContainer} ${style.secondary}`}
      >
        <p className={`${style.navBlock} ${style.accent} ${style.title} ${style.jump}`}>
          <span>C</span>
          <span>E</span>
          <span>S</span>
          <span>A</span>
          <span>R</span>
          <span>Q</span>
          <span>.</span>
          <span>D</span>
          <span>E</span>
          <span>V</span>
        </p>
        <div className={`${style.navBlock} ${style.text}`}>
          <p className={style.interact}>
            <FontAwesomeIcon
              icon={faGithub}
              className={style.ico}
              onClick={github}
              data-tooltip-id="Github"
              data-tooltip-content="CesarLopezQ"
            />
          </p>
          <p className={style.interact}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={style.ico}
              onClick={mail}
              data-tooltip-id="Mail"
              data-tooltip-content="cesarlopez99@live.com"
            />
          </p>
          <p className={style.interact}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={style.ico}
              onClick={whatsapp}
              data-tooltip-id="Whatsapp"
              data-tooltip-content="+52 (664) 165 5416"
            />
          </p>
        </div>
      </div>

      {/*Content*/}
      <div className={style.contentContainer}>
        {/*Hero*/}
        <div
          className={`${style.card} ${shadowPause ? style.active : style.pause} ${style.hero} ${style.primary}`}
        >
          <h1 className={style.title}>SOFTWARE ENGINEER</h1>
          <h3 className={style.text}>Fullstack developer</h3>
          <h3 className={style.text}>Bringing ideas to reality in the modern age</h3>
        </div>

        {/*Carrusel*/}
        <div
          className={`${style.card} ${shadowPause ? style.active : style.pause} ${style.carrusel}`}
        >
          <div
            className={`${style.carruselCard} ${style.interact} ${style.text}`}
            onClick={reactStarter}
          >
            <FontAwesomeIcon icon={faSquareGithub} className={style.icoCarrusel} />
            React + Starter Template
          </div>
          <div
            className={`${style.carruselCard} ${style.interact} ${style.text}`}
            onClick={cantoCafe}
          >
            <FontAwesomeIcon icon={faWindowMaximize} className={style.icoCarrusel} />
            Canto Café
          </div>
          <div className={`${style.carruselCard} ${style.interact} ${style.text}`}>
            <FontAwesomeIcon icon={faKey} className={style.icoCarrusel} />
            Password Generator
          </div>
        </div>
      </div>

      {/*Interactive*/}
      <div
        className={`${style.card} ${shadowPause ? style.active : style.pause} ${style.consoleContainer}`}
      >
        <Terminal onToggleShadowCycle={toggleShadowCycle} />
      </div>

      {/*Tooltips*/}
      <Tooltip id="Github" />
      <Tooltip id="Mail" />
      <Tooltip id="Whatsapp" />
    </div>
  )
}
