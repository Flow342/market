import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./CartPage.module.css";
import ItemPosition from "../../components/ItemPosition/itemPosition";
import { FC, useEffect, useState } from "react";

const CartPage: FC = () => {
    const cart = useSelector((state: RootState) => state.market);
    const [totalSum, setTotalSum] = useState<number>(0);
    const [itemsLength, setItemsLength] = useState<number>(0);
    console.log(cart.length);

    useEffect(() => {
        const itemsLength = cart.reduce(
            (total, item) => total + item.counter,
            0
        );
        const total = cart.reduce(
            (total, item) => total + item.counter * (item.data.price * 93),
            0
        );
        setItemsLength(itemsLength);
        setTotalSum(total);
    }, [cart]);

    return (
        <div className={styles.container}>
            {!cart.length ? (
                <div className={styles.total_sum}>Корзина пуста!</div>
            ) : (
                <div className={styles.page}>
                    <div className={styles.positions}>
                        {cart.map((item, index) => (
                            <ItemPosition key={index} item={item.data} />
                        ))}
                    </div>
                    <div className={styles.order}>
                        <button className={styles.order_button}>
                            Заказать!
                            <div className={styles.total_sum}>{totalSum} ₽</div>
                        </button>
                        <div className={styles.total_items}>
                            Товары, {itemsLength} шт
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
