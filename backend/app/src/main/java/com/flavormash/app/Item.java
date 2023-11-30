package com.flavormash.app;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Restaurants")
public class Item {
    @Id
    private String id;
    private String name;
    private String dish;
    private String address;
    private String bio;
    private String menu;
    private String price;

    // Constructors (if needed)

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDish() {
        return dish;
    }

    public void setDish(String dish) {
        this.dish = dish;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getMenu() {
        return menu;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    // toString method (if needed)
    @Override
    public String toString() {
        return "Item{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", dish='" + dish + '\'' +
                ", address='" + address + '\'' +
                ", bio='" + bio + '\'' +
                ", menu='" + menu + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
