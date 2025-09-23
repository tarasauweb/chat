import { useState, useEffect } from 'react'
import styles from './LogIn.module.scss'
export function LogIn ({isOpenForm}) {
    const [isOpen, setIsOpen] = useState(isOpenForm);
    useEffect(() => {
        setIsOpen(isOpenForm);
    }, [isOpenForm]);
    return(
        <form className={`${styles.form} ${isOpen ? styles.active : ''}`}>
            <label htmlFor="name" className={styles.form__label}>
                <span>
                    Name:
                </span>
                <input type="text" id="name" className={styles.form__name} />
            </label>
            <label htmlFor="email" className={styles.form__label}>
                <span>
                    Email:
                </span>
                <input type="text" id="email" className={styles.form__name} />
            </label>
            <label htmlFor="password" className={styles.form__label}>
                <span>
                    Password:
                </span>
                <input type="text" id="password" className={styles.form__name} />
            </label>
            <button className={styles.form__btn}>
                Sign Up
            </button>
        </form>
    )
}