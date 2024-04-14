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
}
