import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

function firstUpper(string) {
    return string[0].toUpperCase()+string.slice(1)
}
const TransactionHistory = ({items}) => {
    return (
        <table class={styles.transactionTable}>
  <thead>
    <tr class={styles.tableHeader}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
          <tr class={styles.tableEl} key={item.id}>
            <td class={styles.type}>{firstUpper(item.type)}</td>
            <td>{item.amount}</td>
            <td class={styles.type}>{item.currency}</td>
         </tr> 
      ))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string,
}
   

TransactionHistory.defaultProps = { 
    type: 'Type not found',
    currency: 'Currency type not found'
}

export default TransactionHistory