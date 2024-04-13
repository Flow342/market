import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./UI/NavBar/NavBar";
import StorePage from "./pages/StorePage/StorePage";
import ItemPage from "./pages/ItemPage/ItemPage";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route element={<StorePage />} path="/" />
                <Route element={<ItemPage />} path="/catalog/:id" />
                <Route element={<div>яфдгзф</div>} path="*" />
                <Route element={<div>Корзина</div>} path="/cart" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
