import { marketData } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import GetMarket from "../../api/GetMarket";
import ItemPosition from "../../components/ItemPosition/itemPosition";
import styles from "./StorePage.module.css";
import { MoonLoader } from "react-spinners";

const StorePage = () => {
    const [store, setStore] = useState<marketData[] | null>(null);
    const [fetchProducts, isProductsLoading, prodError] = useFetching(
        async () => {
            const response = await GetMarket.getProducts();
            setStore(response);
        }
    );
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {prodError && <div>Произошла ошибка {prodError}</div>}
                {isProductsLoading ? (
                    <div className={styles.loader}>
                        <MoonLoader color="#3663d6" size={60} />
                    </div>
                ) : (
                    store?.map((item, index) => (
                        <ItemPosition key={index} item={item} index={index} />
                    ))
                )}
            </div>
        </div>
    );
};

export default StorePage;
