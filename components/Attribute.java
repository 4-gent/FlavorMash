package components;
public class Attribute {
    /**
     * weight [0,1]
     * attributeType = one from [Distance,Flavor,FoodGenre,PortionSize,Price]
     */
    private int weight;
    private String attributeType;
    Attribute(String attributeType, int weight){
        this.attributeType = attributeType;
        this.weight = weight;
    }

    public int getWeight(){
        return weight;
    }

}
