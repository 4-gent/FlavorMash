package components;
import java.util.ArrayList;
public class Dish {
    private ArrayList<ArrayList<Attribute>> attributes;
    private String address;
    /**
     * Set attributes to static size of 5 for each of the attributes (Distance, Flavor, FoodGenre, PortionSize, Price)
     * Each will have an arrayList to account for multiple flavors etc.
     * Index 0 to 4 corresponds to each of the types in alphabetical order
     */
    
    Dish(){
        attributes = new ArrayList<ArrayList<Attribute>>(5);
    }
}
