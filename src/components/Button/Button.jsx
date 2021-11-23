import styles from './Button.module.css';

const Button = ({ type, variant = 'default', content }) => {
    return <button type={type} className={`${styles.btn} ${styles[variant]}`}>{content}</button>
}

export default Button;