import ProfileImage from "./ProfileImage"
import Card from "./Card"
import Profile from "./Profile"
import Button from "./Button"
import styles from './CombineComponents.module.css'

const CombineComponents = props => {
    return (
        <>
        <Card className={styles.card}>
            <ProfileImage image={props.userData.image} />
            <Profile userData={props.userData}/>
            <Button />
        </Card>
        </>
    )
}

export default CombineComponents