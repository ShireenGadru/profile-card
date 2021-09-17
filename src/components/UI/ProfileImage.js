import styles from './ProfileImage.module.css'

const ProfileImage = props => {
    return (
        <>
            <div className={styles.profileImage}>
                <img src={props.image} alt="profile" className={styles.image} ></img>
            </div>
        </>
    )
}

export default ProfileImage