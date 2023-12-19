package edu.henriquebenedictocosta.fullstackcrud.controller;

import edu.henriquebenedictocosta.fullstackcrud.model.Product;
import edu.henriquebenedictocosta.fullstackcrud.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/produto")
    Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping("/produtos")
    List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
