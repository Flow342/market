import { FC, ReactNode } from "react";
import styles from "./SideModal.module.css";

interface Props {
    children: ReactNode;
    visible: boolean;
    setVisible: (modal: boolean) => void;
}

const SideModal: FC<Props> = ({ children, visible, setVisible }) => {
    const rootStyles = [styles.myModal];
    if (visible) {
        rootStyles.push(styles.active);
    }
    return (
        <div className={rootStyles.join(" ")} onClick={() => setVisible(false)}>
            <div
                className={styles.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default SideModal;
