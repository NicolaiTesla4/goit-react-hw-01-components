import css from './Statics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}a7`;
}
const Statistics = ({ title, data }) => {
  return (
    <section className={css.statics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {data.map(e => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
            key={e.id}
          >
            <span className={css.label}>{e.label}</span>
            <span className={css.percentage}>{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default Statistics;