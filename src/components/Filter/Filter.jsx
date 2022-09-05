import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <input className={styles.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};

Filter.propTypes = {
  onSufilterbmit: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
