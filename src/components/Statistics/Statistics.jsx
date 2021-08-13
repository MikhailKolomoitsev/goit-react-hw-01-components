import styles from './Statistics.module.css'
import PropTypes from 'prop-types'


const Statistics = ({ title, stats }) => {
    
    function randomBg() {
        const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }

    return (
        <section class="statistic">
            {title && <h2 class="title">{title}</h2>}
            <ul class={styles.stats}>
      {stats.map(item => (
        <li key={item.id} class={styles[randomBg()]}>
            <span class='label'>{item.label}</span>
              <span class={styles.percentage}>{item.percentage}%</span>
        </li>))}
                
  </ul>
</section>
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};


export default Statistics