import React from 'react'
import styles from '../Styles/sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100"  
        />
        
        <div className={styles.profile}>
            <img 
                className={styles.avatar} 
                src="https://github.com/BigLeoo.png" 
            />

            <strong>Leonardo Ramos</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>

    </aside>
  )
}
