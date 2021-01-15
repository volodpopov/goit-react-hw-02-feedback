import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <div className={s.statistics}>
          <p className={s.result}>Good: {good}</p>
          <p className={s.result}>Neutral: {neutral}</p>
          <p className={s.result}>Bad: {bad}</p>
          <p className={s.result}>Total: {total}</p>
          <p className={s.result}>Positive feedback: {positivePercentage} %</p>
        </div>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
