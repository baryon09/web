import styles from '../styles/components.module.css';

const Button = ({ children, type, formID, onClick }) => {
  return (
    <button
      form={formID}
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
