import styles from './Profile.module.css'

const Profile = props => {
    
    return (
        <div className={styles.profile}>
        <p className={styles.name}>{props.userData.name}</p>
        <p className={styles.location}> {props.userData.location}</p>
        <p className={styles.about}>{props.userData.about}</p>
        </div>
    )
}

export default Profile