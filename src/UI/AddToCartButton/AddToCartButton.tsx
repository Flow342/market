import React, { useState } from "react";
import styles from "./AddToCartButton.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
    addItemToCart,
    changeCounter,
    removeItemFromCart,
} from "../../store/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import { marketData } from "../../interfaces/interfaces";
import { RootState } from "../../store/store";

interface Props {
    item: marketData;
}

const AddToCartButton = ({ item }: Props) => {
    const userCart = useSelector((state: RootState) => state.market);
    const [indexOfItemInCart, setIndexOfItemInCart] = useState(
        userCart.findIndex((element) => element.data.id === item.id)
    );
    const dispatch = useDispatch();

    const addToCartOnClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(addItemToCart(item));
        setIndexOfItemInCart(userCart.length);
    };

    const changeCounterOfItem = (e: React.MouseEvent, action: -1 | 1) => {
        e.stopPropagation();
        if (userCart[indexOfItemInCart].counter === 1) {
            if (action === -1) {
                removeItemFromCart(indexOfItemInCart);
                setIndexOfItemInCart(-1);
            } else {
                dispatch(
                    changeCounter({
                        action: action,
                        index: indexOfItemInCart,
                    })
                );
            }
        } else {
            dispatch(
                changeCounter({ action: action, index: indexOfItemInCart })
            );
        }
    };

    if (indexOfItemInCart !== -1) {
        return (
            <div className={styles.action__buttons}>
                <button
                    className={styles.action__button}
                    onClick={(e) => changeCounterOfItem(e, -1)}
                >
                    -
                </button>
                <div className={styles.counter}>
                    {userCart[indexOfItemInCart].counter}
                </div>
                <button
                    className={styles.action__button}
                    onClick={(e) => changeCounterOfItem(e, 1)}
                >
                    +
                </button>
            </div>
        );
    }

    return (
        <button className={styles.button} onClick={addToCartOnClick}>
            <ShoppingCartIcon sx={{ height: 15, color: "#ffffff" }} />В корзину
        </button>
    );
};

export default AddToCartButton;
