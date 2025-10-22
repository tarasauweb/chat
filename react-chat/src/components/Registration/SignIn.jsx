
import styles from './Sign.module.scss'
export function SignIn () {
    return (
        <form className={`${styles.form}`}>
            <label htmlFor="email-login" className={styles.form__label}>
                <span>
                    Email:
                </span>
                <input type="text" id="email-login" className={styles.form__name} />
            </label>
            <label htmlFor="password-login" className={styles.form__label}>
                <span>
                    Passwotd:
                </span>
                <input type="text" id="password-login" className={styles.form__name} />
            </label>
            <button className={styles.form__btn}>
                Sign In
            </button>
        </form>
    )
}