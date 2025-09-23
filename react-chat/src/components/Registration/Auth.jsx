import { useState, useEffect } from 'react'
import styles from './LogIn.module.scss'
export function Auth ({isOpenForm}) {
    const [isOpen, setIsOpen] = useState(isOpenForm);
    useEffect(() => {
            setIsOpen(isOpenForm);
        }, [isOpenForm]);
    return (
        <form className={`${styles.form} ${isOpen ? styles.active : ''}`}>
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