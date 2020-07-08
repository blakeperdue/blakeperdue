import React, { useState } from 'react'
import Layout from 'components/Layout/Layout'
import SEO from 'components/SEO/SEO'
import grid from 'styles/grid'

const HomePage = () => {
  let savedTheme
  if (typeof window !== 'undefined' && window.localStorage) {
    savedTheme = window.localStorage.getItem('theme')
  }
  const randomTheme = Math.random() >= 0.5 ? 'dark' : 'light'
  const [theme, setTheme] = useState(savedTheme === null ? randomTheme : savedTheme)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <SEO theme={theme} />
      <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto' }}>
        <h1>Protect your font families like you would your real family.</h1>
      </div>
      <div style={{ maxWidth: grid.slender, margin: '0 auto' }}>
        <p>Every day, thousands of fonts are pirated across the internet. &nbsp;Bad actors are ripping font files directly off your website and posting them to forums, chats, and file sharing services.</p>
        <p>It's shockingly fast and simple to rip fonts from a foundry's website, even when modern protections are in place. &nbsp;In a matter of minutes, someone can download your catalog and share it with thousands of people around the world, costing you countless lost sales.</p>
        <p>TypeForce thwarts these bad actors by using advanced encryption and rendering technogy to completely block font copying and downloading.</p>
        <p>We power a live type testing service that allows your visitors to fully explore and enjoy your fonts before purchase, while still providing the security and protection you need.</p>
      </div>
    </Layout>
  )
}

export default HomePage
