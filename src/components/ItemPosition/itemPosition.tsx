import styles from "./ItemPosition.module.css";
import { marketData } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import AddToCartButtons from "../../UI/AddToCartButtons/AddToCartButtons";

interface ItemProps {
    item: marketData;
}

const ItemPosition = ({ item }: ItemProps) => {
    const router = useNavigate();

    const goToItem = () => {
        router("/catalog/" + (item.id - 1));
    };

    return (
        item !== null && (
            <div onClick={goToItem} className={styles.container}>
                <div className={styles.image__container}>
                    <img src={item.images[0]} className={styles.image} />
                </div>
                <div className={styles.price}>
                    {Math.round(item.price * 93)} ₽
                </div>
                <div className={styles.body}>
                    <div className={styles.body__title}>
                        {item.title.slice(0, 18)}...
                    </div>
                    <div className={styles.body__category}>
                        {item.category.name}
                    </div>
                </div>

                <div className={styles.button__container}>
                    <AddToCartButtons item={item} />
                </div>
            </div>
        )
    );
};

export default ItemPosition;
