package com.flavormash.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping
    public Item getItemByName(@RequestParam(required = false) String name) {
        // Build a query based on the provided name
        Query query = new Query();
        if (name != null) {
            query.addCriteria(Criteria.where("name").is(name));
        }

        try {
            System.out.println(mongoTemplate.findOne(query, Item.class));
            return mongoTemplate.findOne(query, Item.class);
        } catch (Exception e) {
            throw new RuntimeException("Error getting item by name", e);
        }
    }
}