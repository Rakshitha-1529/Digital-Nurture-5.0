package search;

import model.Product;

public class LinearSearch {
    public static Product linearSearch(Product[] products, String target) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(target)) {
                return product;
            }
        }
        return null;
    }
}