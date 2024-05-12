import { FC } from "react";
import styles from "./AuthForm.module.css";

const AuthForm: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form_wrapper}>
                <form className={styles.auth_form}>
                    <div className={styles.input_wrapper}>
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor="password">password</label>
                        <input type="text" id="password" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
