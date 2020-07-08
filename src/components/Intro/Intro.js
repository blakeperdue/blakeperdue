import React from 'react'
import headshot from './Images/headshot.jpg'
import './intro.sass'

const Intro = ({ theme }) => {
  return (
    <div className="container">
      <div class="row">
        <div className="col-12">
          <div className="headshot">
            <img
              className="headshot-img"
              alt="Blake Perdue having fun by the tracks"
              src={headshot}
            />
          </div>
          <h1 className="h1 center">Hi there, I'm <strong className="h1-bold">Blake Perdue</strong>.</h1>
          <h2 className="h2 center">I like to create things. This is a collection
of some  of my recent projects.</h2>
        </div>
      </div>
    </div>
  )
}

export default Intro;