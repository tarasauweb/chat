import logo from '../../assets/logo2.png';
import arrow from '../../assets/arrow-back.svg';
import styles from './Registation.module.scss'
import { LogIn } from './LogIn';
import { Auth } from './Auth';
import { useState } from 'react';
export function Registation () {
    const [isSignUp, setSignUp] = useState(false);
    const [isSignIn, setSignIn] = useState(false);

    function openSignUpForm () {
        setSignUp(!isSignUp);
    }
    function openSignInForm () {
        setSignIn(!isSignIn);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__btns}>
                <button onClick={()=>{
                    setSignIn(false);
                    setSignUp(false);
                }} className={`${styles.wrapper__backBtn} ${isSignUp ? styles.active : ''} ${isSignIn? styles.active: ''}`}>
                    <img src={arrow} alt="arrow" className={styles.wrapper__arrowBack} />
                </button>
                <div className={`${styles.wrapper__openFormBtn} ${isSignUp ? styles.active : ''} ${isSignIn? styles.active: ''}`}>
                    <button onClick={openSignUpForm} className={styles.wrapper__btn}>Sign up</button>
                    <button onClick={openSignInForm} className={styles.wrapper__btn}>Sign In</button>
                </div>
            </div>
            <div className={styles.wrapper__circle}></div>
            <div className={`${styles.wrapper__logo} ${isSignUp ? styles.active : ''} ${isSignIn? styles.active: ''}`}>
                <img src={logo} alt="logo" className={styles.wrapper__img}/>
                <h1 className={styles.wrapper__title}>
                    Talklsy
                </h1>
                <p className={styles.wrapper__slogan}>
                    “Speak easier. Connect faster.”
                </p>
            </div>
            <LogIn isOpenForm={isSignUp} />
            <Auth isOpenForm={isSignIn} />
        </div>
    )
}