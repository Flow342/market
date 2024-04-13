import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

interface Routes {
    path: string;
    body: string;
    icon?: React.ReactNode;
}

export const routes: Routes[] = [
    { path: "/login", body: "Войти", icon: <PersonIcon /> },
    { path: "/cart", body: "Корзина", icon: <ShoppingCartIcon /> },
];
