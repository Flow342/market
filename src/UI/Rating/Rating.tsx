import styles from "./Rating.module.css";
import StarIcon from "@mui/icons-material/Star";

interface Props {
    rating: number;
    count: number;
}

const Rating = ({ rating, count }: Props) => {
    return (
        <div className={styles.rating}>
            <StarIcon sx={{ height: 20, color: "#fcba03" }} />
            <div className={styles.rating__rate}>{rating}/</div>
            <div className={styles.rating__count}>{count} оценок</div>
        </div>
    );
};

export default Rating;
