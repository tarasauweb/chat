import { useState } from 'react';
import { validateEmail, validatePassword } from './formValidation';
import styles from './Sign.module.scss'
export function SignIn () {
    const [form, setForm] = useState({email:'', password: ''});
    const [errors, setErrors] = useState({});
    function handleChange(e) {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value }));
        let error = null;
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);

        setErrors(prev => ({ ...prev, [name]: error }));
    }
    return (
        <form className={`${styles.form}`}>
            <label htmlFor="email-login" className={styles.form__label}>
                <span>
                    Email:
                </span>
                <input name='email' onChange={handleChange} value={form.email} required type="text" id="email-login" className={`${styles.form__name} ${errors.email ? styles.error : ''}`} />
                {errors.email && <span className={styles.form__error}>{errors.email}</span>}
            </label>
            <label htmlFor="password-login" className={styles.form__label}>
                <span>
                    Passwotd:
                </span>
                <input name='password' onChange={handleChange} value={form.password} required type="text" id="password-login" className={`${styles.form__name} ${errors.password ? styles.error : ''}`} />
                {errors.password && <span className={styles.form__error}>{errors.password}</span>}
            </label>
            <button className={styles.form__btn}>
                Sign In
            </button>
        </form>
    )
}