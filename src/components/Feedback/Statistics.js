import React from 'react';
import s from './Feedback.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <div className={s.statistics}>
      <h2 className={s.title}>Statistics</h2>
      <p className={s.result}>Good: {good}</p>
      <p className={s.result}>Neutral: {neutral}</p>
      <p className={s.result}>Bad: {bad}</p>
      <p className={s.result}>Total: {onCountTotalFeedback}</p>
      <p className={s.result}>
        Positive feedback: {onCountPositiveFeedbackPercentage} %
      </p>
    </div>
  );
};

export default Statistics;
