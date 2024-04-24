import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./CartPage.module.css";
import ItemPosition from "../../components/ItemPosition/itemPosition";
import { FC, useEffect, useState } from "react";

const CartPage: FC = () => {
    const cart = useSelector((state: RootState) => state.market);
    const [totalSum, setTotalSum] = useState<number>(0);

    useEffect(() => {
        const total = cart.reduce(
            (total, item) => total + item.counter * (item.data.price * 93),
            0
        );
        setTotalSum(total);
    }, [cart]);

    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <div className={styles.positions}>
                    {cart.map((item, index) => (
                        <ItemPosition key={index} item={item.data} />
                    ))}
                </div>
                <div className={styles.order}>
                    Заказать
                    <div className={styles.total_sum}>{totalSum} ₽</div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
