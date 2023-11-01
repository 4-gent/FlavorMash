package components;
import java.util.*;
public class Application {

    public List<Dish> allDishes = new ArrayList<>();

    public void sort(){
        Collections.sort(allDishes);
    }
}
