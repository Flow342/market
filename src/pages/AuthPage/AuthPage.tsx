import { FC } from "react";
import styles from "./AuthPage.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <AuthForm />
            </div>
        </div>
    );
};

export default AuthPage;
