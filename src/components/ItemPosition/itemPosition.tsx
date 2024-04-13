import styles from "./ItemPosition.module.css";
import { marketData } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../UI/AddToCartButton/AddToCartButton";
import StarIcon from "@mui/icons-material/Star";

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
                <StarIcon sx={{ height: 17, color: "#fcba03" }} />
                <div className={styles.rating__rate}>{item.rating.rate}/</div>
                <div className={styles.rating__count}>
                    {item.rating.count} оценок
                </div>
            </div>
            <div className={styles.button__container}>
                <AddToCartButton item={item} />
            </div>
        </div>
    );
};

export default ItemPosition;
