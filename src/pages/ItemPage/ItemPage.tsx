import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { useEffect, useState } from "react";
import { marketData } from "../../interfaces/interfaces";
import GetMarket from "../../api/GetMarket";
import { useFetching } from "../../hooks/useFetching";
import { MoonLoader } from "react-spinners";
import AddToCartButton from "../../UI/AddToCartButton/AddToCartButton";
import Rating from "../../UI/Rating/Rating";

const ItemPage = () => {
    const [store, setStore] = useState<marketData>();
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
                    <div className={styles.loader}>
                        <MoonLoader color="#3663d6" size={60} />
                    </div>
                ) : (
                    store !== undefined && (
                        <div className={styles.wrapper}>
                            <div className={styles.image__container}>
                                <img
                                    src={store.image}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.body}>
                                <div className={styles.title}>
                                    {store.title}
                                </div>
                                <div className={styles.category}>
                                    {store.category}
                                </div>
                                <div>
                                    <Rating
                                        rating={store.rating.rate}
                                        count={store.rating.count}
                                    />
                                </div>
                                <div className={styles.description}>
                                    {store.description}
                                </div>
                            </div>
                            <div className={styles.buttons_price}>
                                <div className={styles.price}>
                                    {Math.round(store.price * 93)} ₽
                                </div>
                                <div className={styles.add_to_cart_button}>
                                    <AddToCartButton item={store} />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ItemPage;
