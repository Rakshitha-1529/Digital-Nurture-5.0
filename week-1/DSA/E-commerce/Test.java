import model.Product;
import search.LinearSearch;
import search.BinarySearch;

public class Test {
    public static void main(String[] args) {

        Product[] products = {
            new Product(201,"Phone","Electronics"),
            new Product(202,"Book","Education"),
            new Product(203,"Shirt","Fashion"),
            new Product(204,"Camera","Electronics"),
            new Product(205,"Watch","Accessories")
        };

        String targetItem = "Camera";

        System.out.println("Linear Search:");
        Product linearResult = LinearSearch.linearSearch(products, targetItem);
        System.out.println(linearResult != null ? "Found: " + linearResult : "Product not found.");

        System.out.println("\nBinary Search:");
        Product binaryResult = BinarySearch.binarySearch(products, targetItem);
        System.out.println(binaryResult != null ? "Found: " + binaryResult : "Product not found.");
    }
}