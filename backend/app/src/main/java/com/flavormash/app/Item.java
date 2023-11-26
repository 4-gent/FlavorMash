package com.flavormash.app;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// Scheme to tell ItemController what parts of the item will be returned

@Document(collection = "Restaurants")
public class Item{
    @Id
    private String id;
    private String name;
    private String dish;
    private String address;
    private String bio;
}