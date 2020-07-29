import React from 'react'
import headshot from './Images/headshot.jpg'
import './intro.sass'

const bio = {
  en: {
    headshot: 'Blake Perdue having fun with his son.',
    h1: 'Hi there, I\'m',
    h2: 'I like to create things.&nbsp; This is a collection of some  of my recent projects.',
  },
  es: {
    headshot: 'Blake Perdue se divierte con su hijo.',
    h1: 'Hola, soy',
    h2: 'Me gusta crear cosas. Esta es una colección de algunos de mis proyectos recientes.',
  },
  pt: {
    headshot: 'Blake Perdue se divertindo com seu filho.',
    h1: 'Oi lá estou eu sou',
    h2: 'Eu gosto de criar coisas. Esta é uma coleção de alguns dos meus projetos recentes.',
  },
  zh: {
    headshot: '布雷克·珀杜（Blake Perdue）和儿子一起玩乐。',
    h1: '嗨，我是',
    h2: '我喜欢创造东西。 这是我最近的一些项目的集合。',
  }
}

const Intro = ({ language }) => {
  const text = bio[language]

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