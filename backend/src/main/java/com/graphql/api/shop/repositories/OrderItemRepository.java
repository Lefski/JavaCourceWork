package com.graphql.api.shop.repositories;

import com.graphql.api.shop.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
