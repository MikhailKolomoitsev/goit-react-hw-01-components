import styles from './FriendList.module.css'
import PropTypes from 'prop-types'


const FriendList = ({ friends }) => {
    return (
        <ul class={styles.list}>
            {friends.map(friend => (
                <li class={styles.item} key={friend.id}>
                    {friend.isOnline ? <span class={styles.online}>●</span> : <span class={styles.offline}>●</span>}
                <img class={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                    <p class="name">{friend.name}</p>
                </li>
            ))}

        </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string,
}

FriendList.defaultProps = { 
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    name: 'User name',
    isOnline: false,
}

export default FriendList