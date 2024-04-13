import styles from "./ItemPosition.module.css";
import { marketData } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../UI/AddToCartButton/AddToCartButton";
import Rating from "../../UI/Rating/Rating";

interface ItemProps {
    item: marketData;
    index: number;
}

const ItemPosition = ({ item, index }: ItemProps) => {
    const router = useNavigate();

    const goToItem = () => {
        router("/catalog/" + index);
    };
    return (
        <div onClick={goToItem} className={styles.container}>
            <div className={styles.image__container}>
                <img src={item.image} className={styles.image} />
            </div>
            <div className={styles.price}>{Math.round(item.price * 93)} ₽</div>
            <div className={styles.body}>
                <div className={styles.body__title}>
                    {item.title.slice(0, 20)}...
                </div>
                <div className={styles.body__category}>{item.category}</div>
            </div>
            <div className={styles.rating}>
                <Rating rating={item.rating.rate} count={item.rating.count} />
            </div>
            <div className={styles.button__container}>
                <AddToCartButton item={item} />
            </div>
        </div>
    );
};

export default ItemPosition;
