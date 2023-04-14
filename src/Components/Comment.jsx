import React from 'react'
import styles from '../Styles/Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'


export const Comment = () => {
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/pedrohemattos.png" />
        <div className={styles.commentBox}>

            <div className={styles.commentContent}>

                <header>

                    <div className={styles.authorAndTime}>

                        <strong>Diego Fernandes</strong>
                        <time title='12 de Abril às 14:48' dateTime='2023-04-12 14:48:00'>Cerca de 2h atrás</time>
                    </div>
                    
                    <button title='Deletar Comentário'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏 </p>

            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>

        </div>
    </div>
  )
}
