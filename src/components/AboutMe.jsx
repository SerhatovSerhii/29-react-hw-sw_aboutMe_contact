import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'
import style from '../css_modules/farGalaxy.module.css'
const AboutMe = () => {
  const [openingAbout, setOpeningAbout] = useState({
    name: '',
    gender: '',
    height: '',
    mass: '',
    birth_year: ''
  })

  useEffect(() => {

    const hero = Math.floor(1 + Math.random() * 2)
    fetch(`${base_url}/v1/peoples/${hero}`)
      .then(res => res.json())
      .then(data => setOpeningAbout(data))
  }, [])


  return (
    <div className={style.farGalaxy}>
      <div>name: {openingAbout.name}</div>
      <div>gender: {openingAbout.gender}</div>
      <div>height: {openingAbout.height}</div>
      <div>mass: {openingAbout.mass}</div>
      <div>birth year: {openingAbout.birth_year}</div>
    </div>

  )
}

export default AboutMe