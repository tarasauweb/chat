import logo from '../../assets/logo2.png';
import styles from './Registation.module.scss'
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { useState } from 'react';
export function Registation () {
    const [isOpenSignUp, setOpenSignUp] = useState(true);
    function changeForm () {
        setOpenSignUp(prev => !prev);
    }
    return (
        <div className={styles.wrapper}>
            
            <div className={styles.wrapper__content}>
                <button onClick={()=> changeForm()} className={styles.wrapper__changeForm}>
                   {
                    isOpenSignUp ?  `Sign In` : `Sign Up`
                   }
                </button>
                <div className={styles.wrapper__circle}></div>
                <div className={`${styles.wrapper__logo}`}>
                    <img src={logo} alt="logo" className={styles.wrapper__img}/>
                    <h1 className={styles.wrapper__title}>
                        Talklsy
                    </h1>
                    <p className={styles.wrapper__slogan}>
                        “Speak easier. Connect faster.”
                    </p>
                </div>
                {
                    isOpenSignUp ? <SignUp></SignUp> : <SignUp></SignUp>
                }
                
            </div>
        </div>
    )
}