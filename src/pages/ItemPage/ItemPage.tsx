import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { useEffect, useState } from "react";
import { marketData } from "../../interfaces/interfaces";
import GetMarket from "../../api/GetMarket";
import { useFetching } from "../../hooks/useFetching";
import { MoonLoader } from "react-spinners";

const ItemPage = () => {
    const [store, setStore] = useState<marketData | null>(null);
    const params = Number(useParams().id);
    const [fetchProducts, isProductsLoading, prodError] = useFetching(
        async () => {
            const response = await GetMarket.getSingleProduct(params);
            setStore(response);
        }
    );

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                {prodError && <div>{prodError}</div>}
                {isProductsLoading ? (
                    <MoonLoader color="#3663d6" size={60} />
                ) : (
                    <div className={styles.wrapper}>
                        <div className={styles.image__container}>
                            <img src={store?.image} className={styles.image} />
                        </div>
                        <div className={styles.title}>{store?.title}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemPage;
