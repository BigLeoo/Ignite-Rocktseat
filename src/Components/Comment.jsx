import React, { useState } from 'react'
import styles from '../Styles/Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'


export const Comment = ({content, onDeleteComment}) => {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state => {
            return state + 1
        }));
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

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
                    
                    <button onClick={handleDeleteComment} title='Deletar Comentário'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>

            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>

        </div>
    </div>
    )
}
