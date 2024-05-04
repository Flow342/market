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

export interface categoriesData {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}
