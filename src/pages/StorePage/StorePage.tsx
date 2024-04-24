import { marketData } from "../../interfaces/interfaces";
import { FC, useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import GetMarket from "../../api/GetMarket";
import ItemPosition from "../../components/ItemPosition/itemPosition";
import styles from "./StorePage.module.css";
import { MoonLoader } from "react-spinners";
import Pagination from "../../UI/Pagination/Pagination";

const StorePage: FC = () => {
    const [store, setStore] = useState<marketData[] | null>(null);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [fetchProducts, isProductsLoading, prodError] = useFetching(
        async () => {
            const response = await GetMarket.getProductsPage(page);
            setStore(response);
        }
    );

    const [fetchTotalItems, ,] = useFetching(async () => {
        const totalCount = await GetMarket.getTotalItems();
        setTotal(totalCount);
    });
    useEffect(() => {
        fetchTotalItems();
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const changePage = (page: number) => {
        setPage(page);
    };
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {prodError && <div>Произошла ошибка {prodError}</div>}
                {isProductsLoading ? (
                    <div className={styles.loader}>
                        <MoonLoader color="#3663d6" size={60} />
                    </div>
                ) : (
                    <>
                        <div className={styles.store}>
                            {store?.map((item, index) => (
                                <ItemPosition key={index} item={item} />
                            ))}
                        </div>
                        <div className={styles.pagination}>
                            <Pagination
                                totalPages={total / 30}
                                page={page}
                                changePage={changePage}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StorePage;
