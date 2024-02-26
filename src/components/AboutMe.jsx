import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'
import style from '../css_modules/farGalaxy.module.css'
const AboutMe = () => {
  const [openingAbout, setopeningAbout] = useState('Батя, я стараюсь...')

  useEffect(() => {
  
  const hero = Math.floor(1 + Math.random() * 2)
      fetch(`${base_url}/v1/peoples/${hero}`)
          .then(res => res.json())
          .then(data => setopeningAbout(data.name +  `: ` + data.gender + `: ` + data.height + `: ` + data.mass + `: ` + data.birth_year))
  }, [])
  const lines = openingAbout.split(':').map((lines, index) => (
    <div key={index}>{lines}</div>
  ))

  return (
    <div className={style.farGalaxy}>{lines}</div>

  )
}

export default AboutMe