import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'
import style from '../css_modules/farGalaxy.module.css'
const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...')

    useEffect(() => {
        const episode = Math.floor(1 + Math.random() * 6)
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl))
    }, [])

    return (
        <p className={style.farGalaxy}>
            {openingCrawl}
        </p>
    )
}

export default FarGalaxy