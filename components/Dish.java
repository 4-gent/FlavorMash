package components;
import java.util.*;
public class Dish {
    private ArrayList<ArrayList<Attribute>> attributes;
    private String address;
    private double score;
    /**
     * Set attributes to static size of 5 for each of the attributes (Distance, Flavor, FoodGenre, PortionSize, Price)
     * Each will have an arrayList to account for multiple flavors etc.
     * Index 0 to 4 corresponds to each of the types in alphabetical order
     */
    
    Dish(){
        attributes = new ArrayList<>(5);

    }


    public void addAttribute(ArrayList<Attribute> attr){
        attributes.add(attr);
    }

    public double calculate(){
        double score = 0.0;
        for(ArrayList<Attribute> a: attributes){
            for(Attribute x:a){
                score+=x.getWeight();
            }
        }
        return score;
    }


}
