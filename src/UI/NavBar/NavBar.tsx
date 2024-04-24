import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { routes } from "../../router/routes.tsx";
import { FC } from "react";

const NavBar: FC = () => {
    const router = useNavigate();

    const goToMainPage = () => {
        router("/");
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div onClick={goToMainPage} className={styles.logo}>
                    LOGO
                </div>
                <div className={styles.links}>
                    {routes.map((item, index) => (
                        <Link
                            className={styles.link}
                            to={item.path}
                            key={index}
                        >
                            <div className={styles.navitem}>
                                <div className={styles.icon}>{item.icon}</div>
                                <div>{item.body}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
