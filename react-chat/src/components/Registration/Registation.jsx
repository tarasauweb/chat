import logo from '../../assets/logo2.png';
import styles from './Registation.module.scss'
export function Registation () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__btns}>
                <button className={styles.wrapper__btn}>Log in</button>
                <button className={styles.wrapper__btn}>Sign up</button>
            </div>
            <div className={styles.wrapper__circle}></div>
            <div className={styles.wrapper__logo}>
                <img src={logo} alt="logo" className={styles.wrapper__img}/>
                <h1 className={styles.wrapper__title}>
                    Talklsy
                </h1>
                <p className={styles.wrapper__slogan}>
                    “Speak easier. Connect faster.”
                </p>
            </div>
        </div>
    )
}