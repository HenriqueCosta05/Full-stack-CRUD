package edu.henriquebenedictocosta.fullstackcrud.repository;

import edu.henriquebenedictocosta.fullstackcrud.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
