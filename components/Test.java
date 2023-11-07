package components;

public class Test {
    public static void main(String[] args){
        Dish fish = new Dish();
        Attribute distance = new Attribute("Distance",1);
        Attribute flavor= new Attribute("Salt",1);
        Attribute genre = new Attribute("British",1);
        Attribute portion = new Attribute("Medium",0);
        Attribute price = new Attribute("$",1);
        fish.addAttribute(distance);
        fish.addAttribute(flavor);
        fish.addAttribute(genre);
        fish.addAttribute(portion);
        fish.addAttribute(price);
        System.out.print(fish.calculate());
    }
}
