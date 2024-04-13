import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { routes } from "../../router/routes.tsx";

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.breadcrumbs}>
                {routes.map((item, index) => (
                    <Link className={styles.link} to={item.path} key={index}>
                        <div className={styles.navitem}>
                            <div className={styles.icon}>{item.icon}</div>
                            <div>{item.body}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavBar;
