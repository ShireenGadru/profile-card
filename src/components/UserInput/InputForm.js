import Card from '../UI/Card'
import styles from './InputForm.module.css'
import { useState } from 'react'


const InputForm = props => {

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [about, setAbout] = useState('')
    const [image, setImage] = useState('')

    const nameChangeHandler = event => {
        setName(event.target.value)
    }

    const locationChangeHandler = event => {
        setLocation(event.target.value)
    }

    const aboutChangeHandler = event => {
        setAbout(event.target.value)
    }

    const imageChangeHandler = event => {
        setImage(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(name.trim().length === 0 || location.trim().length === 0 || about.trim().length === 0 || image.trim().length === 0) {
            return;
        }
        props.onFormSave({name, location, about, image})
        setName('')
        setLocation('')
        setAbout('')
        setImage('')
    }
    return (
        <Card>
        <form className={styles.form} onSubmit={submitHandler}>
            <label className={styles.label}> Name: </label>
            <input value={name} className={styles.input} onChange={nameChangeHandler}></input>
            <label className={styles.label}> Location: </label>
            <input value={location} className={styles.input} onChange={locationChangeHandler}></input>
            <label className={styles.label}> About you: </label>
            <input value={about} className={styles.input} onChange={aboutChangeHandler}></input>
            <label className={styles.label}> Image url: </label>
            <input value={image} className={styles.input} onChange={imageChangeHandler} placeholder="https://picsum.photos/id/237/200/300"></input>
            <button className={styles.btn} type="submit">Create</button>
        </form>
        </Card>
    )
}

export default InputForm
