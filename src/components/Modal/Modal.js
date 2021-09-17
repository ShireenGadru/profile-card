import React from 'react'
import styles from './Modal.module.css'

export default function Modal({onOpenModal, children, onCloseModal}) {
    return (
        <>
        <div className={styles.overlay}/>
         <div className={styles.modal}>
             <button onClick={onCloseModal}>Close</button>
          All fields are mandatory
        </div>
        </>
       
    )
}
