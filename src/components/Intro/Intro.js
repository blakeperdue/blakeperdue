import React from 'react'
import headshot from './Images/headshot.jpg'
import BioText from './BioText'
import './intro.sass'


const Intro = ({ language }) => {
  const text = BioText[language]

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="headshot">
            <img
              className="headshot-img"
              alt={text.headshot}
              src={headshot}
            />
          </div>
          <h1 className="h1 center">{text.h1}&nbsp;<strong className="h1-bold">Blake Perdue</strong>.</h1>
          <h2 className="h2 center" dangerouslySetInnerHTML={{ __html: text.h2 }} />
        </div>
      </div>
    </div>
  )
}

export default Intro;