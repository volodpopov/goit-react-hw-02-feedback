import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Button = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.button}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const Controls = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button
      key={[option]}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
