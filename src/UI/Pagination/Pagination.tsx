import { FC } from "react";
import { usePagination } from "../../hooks/UsePagination";
import styles from "./Pagination.module.css";

interface PaginationProps {
    totalPages: number;
    page: number;
    changePage: (p: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
    const pagesArray = usePagination(totalPages);
    const onPage = (p: number) => {
        return p === page;
    };

    const prevPage = () => {
        if (page !== 1) {
            changePage(page - 1);
        }
    };

    const nextPage = () => {
        if (page !== pagesArray.length) {
            changePage(page + 1);
        }
    };

    const prevPageStyle = page == 1 ? styles.arrow_disabled : styles.arrow;

    const nextPageStyle =
        page === pagesArray.length ? styles.arrow_disabled : styles.arrow;

    return (
        <div className={styles.container}>
            <div onClick={prevPage} className={prevPageStyle}>
                &#9668;
            </div>
            {pagesArray.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={onPage(p) ? styles.itemChoosen : styles.item}
                >
                    {p}
                </span>
            ))}
            <div onClick={nextPage} className={nextPageStyle}>
                &#9658;
            </div>
        </div>
    );
};
export default Pagination;
