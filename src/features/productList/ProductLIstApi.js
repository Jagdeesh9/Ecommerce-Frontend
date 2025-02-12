export async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null; // Or you can return an empty array `[]` if needed
    }
}
