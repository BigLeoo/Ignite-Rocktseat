import { useState } from 'react'
import './Styles/global.css'
import { Header } from './Components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'

import styles from './Styles/App.module.css'
import './Styles/global.css'


export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
          <Post 
            author="Leonardo" 
            content="Rei delas !!"
          />

          <Post 
            author="Vinicius" 
            content="Outro rei delas !!"
          />

        </main>

      </div>
      
    </div>
  )
}


{/* <Post 
        author="Leonardo" 
        content="Rei delas !!"
      />

      <Post 
        author="Vinicius" 
        content="Outro rei delas !!"
      /> */}