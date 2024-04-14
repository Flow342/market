export interface marketData {
    category: {
        id: number;
        creationAt: string;
        updatedAt: string;
        image: string;
        name: string;
    };
    description: string;
    id: number;
    images: string[];
    price: number;
    title: string;
    updatedAt: string;
}
