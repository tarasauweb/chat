import { useState } from 'react'
import styles from './Sign.module.scss'
import { validateName, validateEmail, validatePassword } from './formValidation';
export function SignUp () {
    const [form, setForm] = useState({name: '', email: '', password: ''});
    const [errors, setErrors] = useState({});

    function handleChange (e) {
        const {name,  value} = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        let error = null;
        if (name === 'name') error = validateName(value);
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);

        setErrors(prev => ({ ...prev, [name]: error }));
    }
    return(
        <form className={`${styles.form}`}>
            <label htmlFor="name" className={styles.form__label}>
                <span>
                    Name:
                </span>
                <input onChange={handleChange} name='name' value={form.name} required type="text" id="name" className={`${styles.form__name} ${errors.name ? styles.error : ''}`} />
                {errors.name && <span className={styles.form__error}>{errors.name}</span>}
            </label>
            <label htmlFor="email" className={styles.form__label}>
                <span>
                    Email:
                </span>
                <input onChange={handleChange} name='email' value={form.email} required type="text" id="email" className={`${styles.form__name} ${errors.email ? styles.error : ''}`} />
                {errors.email && <span className={styles.form__error}>{errors.email}</span>}
            </label>
            <label htmlFor="password" className={styles.form__label}>
                <span>
                    Password:
                </span>
                <input onChange={handleChange} name='password' value={form.password} required type="text" id="password" className={`${styles.form__name} ${errors.password ? styles.error : ''}`} />
                {errors.password && <span className={styles.form__error}>{errors.password}</span>}
            </label>
            <button className={styles.form__btn}>
                Sign Up
            </button>
        </form>
    )
}