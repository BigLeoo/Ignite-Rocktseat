import React from 'react'
import styles from '../Styles/Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>

            <header>

                <div className={styles.author}>

                    <img className={styles.avatar} src="https://github.com/BigLeoo.png"/>
                    
                    <div className={styles.authorInfo}>
                        <strong>Leonardo Ramos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='12 de Abril às 14:48' dateTime='2023-04-12 14:48:00'>Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa.
                    É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare 🚀
                </p>

                <p>
                    👉 <a href=''>jane.design/doctorcare </a>
                </p>

                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>{' '}
                </p>
            </div>

        </article>
    )
}

