import css from './Transactions.module.css';
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.block}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.block_body}>
        {transactions.map(transaction => (
          <tr id={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};
export default Transactions;