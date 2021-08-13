import styles from './Profile.module.css'
import PropTypes from 'prop-types'


const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div class={styles.profile}>
  <div class={styles.description}>
    <img
                    src={avatar}
                    alt="Аватар пользователя"
                    class={styles.avatar}
    />
                <p class={styles.name}>{name}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
  </div>

  <ul class={styles.stats}>
    <li class={styles.stat}>
      <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
    </li>
    <li class={styles.stat}>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li class={styles.stat}>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

Profile.defaultProps = {
    name: 'User name',
    tag: 'User tag',
    location: 'User location ',
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    stats: {
    followers: '0',
    views: '0',
    likes: '0'
  },
}

export default Profile