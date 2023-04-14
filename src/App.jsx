import { useState } from 'react'
import './Styles/global.css'
import { Header } from './Components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'

import styles from './Styles/App.module.css'
import './Styles/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/bigleoo.png',
      name: 'Leonardo Ramos',
      role: 'Web Desenvolvedor'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pedrohemattos.png',
      name: 'Pedro Henrique',
      role: 'Web Desenvolvedor Senior'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
];

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>

      </div>
      
    </div>
  )
}
