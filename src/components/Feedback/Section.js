import PropTypes from 'prop-types';
import s from '../Feedback/Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.children}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
