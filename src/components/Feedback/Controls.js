import React from 'react';
import s from './Feedback.module.css';

const Controls = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) => (
  <div className={s.controls}>
    <button className={s.button__good} type="button" onClick={onGoodFeedback}>
      Good
    </button>
    <button
      className={s.button__neutral}
      type="button"
      onClick={onNeutralFeedback}
    >
      Neutral
    </button>
    <button className={s.button__bad} type="button" onClick={onBadFeedback}>
      Bad
    </button>
  </div>
);

export default Controls;
