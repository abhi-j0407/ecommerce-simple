// Coffee: price_1NMPSXSG3f8lK6xzKe4EdSXi
// Sunglasses: price_1NMPTPSG3f8lK6xzWjevPg1B
// Camera: price_1NMPUeSG3f8lK6xz6D0QHrpn

const productsArray = [
    {
        id: "price_1NMPSXSG3f8lK6xzKe4EdSXi",
        title: "Coffee",
        price: 100.00
    },
    {
        id: "price_1NMPTPSG3f8lK6xzWjevPg1B",
        title: "Sunglasses",
        price: 500.00
    },
    {
        id: "price_1NMPUeSG3f8lK6xz6D0QHrpn",
        title: "Camera",
        price: 2000.00
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };