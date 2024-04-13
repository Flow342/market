import axios from "axios";

export default class GetMarket {
    static async getProducts() {
        const data = await axios("https://fakestoreapi.com/products");
        return data.data;
    }
    static async getSingleProduct(number: number) {
        const data = await axios(
            "https://fakestoreapi.com/products/" + String(number + 1)
        );
        return data.data;
    }
}
