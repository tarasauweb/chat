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

    async function submit (e) {
        e.preventDefault();

        const isErrors = {
            email: validateEmail(form.email),
            password: validatePassword(form.password),
        }

        setErrors(isErrors);
        const hasErrors = Object.values(isErrors).some(Boolean);
        if(hasErrors) return;
        const user = {
            email: form.email,
            password: form.password,
        }
        try{
            const res = await fetch('http://localhost:3000/auth/signin', 
                {   method:"POST", 
                    headers: {'Content-type': 'application/json'},
                    body:JSON.stringify(user), 
                
                });
            const data = await res.json();
            console.log(data)
        }catch(err){
            console.log(err)
        }
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
            <button onClick={submit} className={styles.form__btn}>
                Sign In
            </button>
        </form>
    )
}