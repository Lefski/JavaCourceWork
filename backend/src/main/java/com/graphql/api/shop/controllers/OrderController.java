package com.graphql.api.shop.controllers;


import com.graphql.api.shop.models.OrderItem;
import com.graphql.api.shop.repositories.OrderItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
@AllArgsConstructor
public class OrderController {
    private final OrderItemRepository repository;

    @GetMapping("")
    ResponseEntity<List<OrderItem>> getOrders () {
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping("")
    ResponseEntity<?> postOrder (
            @RequestBody OrderItem orderItem
    ) {
        repository.save(orderItem);
        return ResponseEntity.ok(null);
    }




}
