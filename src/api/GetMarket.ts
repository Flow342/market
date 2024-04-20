import axios from "axios";

export default class GetMarket {
    static async getProducts() {
        const data = await axios("https://api.escuelajs.co/api/v1/products");
        return data.data;
    }
    static async getSingleProduct(number: number) {
        const data = await axios(
            "https://api.escuelajs.co/api/v1/products/" + String(number + 1)
        );
        return data.data;
    }
    static async getProductsPage(offset: number) {
        const data = await axios(
            `https://api.escuelajs.co/api/v1/products?offset=${
                (offset - 1) * 30
            }&limit=30`
        );
        return data.data;
    }
    static async getTotalItems() {
        const data = await GetMarket.getProducts();
        return data.length;
    }
}
