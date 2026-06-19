package search;

import model.Product;
import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static Product binarySearch(Product[] products, String target) {

        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            int compare =
                products[mid].getProductName().compareToIgnoreCase(target);

            if (compare == 0)
                return products[mid];
            else if (compare < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }
}