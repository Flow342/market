import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { routes } from "../../router/routes.tsx";
import { FC, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideModal from "../SideModal/SideModal.tsx";
import { categoriesData } from "../../interfaces/interfaces.ts";
import { useFetching } from "../../hooks/useFetching.ts";
import GetMarket from "../../api/GetMarket.ts";

const NavBar: FC = () => {
    const router = useNavigate();
    const [categoiresModal, setCategoiresModal] = useState<boolean>(false);
    const [categories, setCategoires] = useState<categoriesData[]>([]);
    const [fetchProducts, isProductsLoading, prodError] = useFetching(
        async () => {
            const response = await GetMarket.getAllCategories();
            setCategoires([...response]);
        }
    );

    const goToMainPage = () => {
        router("/");
    };

    const openCatergories = () => {
        setCategoiresModal(true);
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div onClick={goToMainPage} className={styles.logo}>
                    LOGO
                </div>
                <div
                    onClick={openCatergories}
                    className={styles.categories_icon}
                >
                    <MenuIcon fontSize="large" />
                </div>
                <SideModal
                    visible={categoiresModal}
                    setVisible={setCategoiresModal}
                >
                    {prodError && <div>{prodError}</div>}
                    {isProductsLoading ? (
                        <div>Loading...</div>
                    ) : (
                        categories.map((item, index) => (
                            <div
                                style={{ cursor: "pointer" }}
                                key={index}
                                onClick={() => {
                                    router(`category/${item.id}`);
                                    setCategoiresModal(false);
                                }}
                            >
                                {item.name}
                            </div>
                        ))
                    )}
                </SideModal>
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
