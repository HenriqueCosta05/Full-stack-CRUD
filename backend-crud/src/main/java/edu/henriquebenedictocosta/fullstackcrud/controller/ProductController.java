package edu.henriquebenedictocosta.fullstackcrud.controller;

import edu.henriquebenedictocosta.fullstackcrud.exception.ProductNotFoundException;
import edu.henriquebenedictocosta.fullstackcrud.model.Product;
import edu.henriquebenedictocosta.fullstackcrud.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/novo-produto")
    Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping("/produtos")
    List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/produto/{id}")
    Product getProductById(@PathVariable Long id){
        return productRepository.findById(id).orElseThrow(()-> new ProductNotFoundException(id));
    }

    @PutMapping("/editar-produto/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setCode(newProduct.getCode());
                    product.setDescription(newProduct.getDescription());
                    product.setPrice_in_cents(newProduct.getPrice_in_cents());
                    return productRepository.save(product);
                }).orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping("/produto/{id}")
    String deleteProduct(@PathVariable Long id){
        if(!productRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById((id));
        return "Produto com id " + id + " excluído com sucesso!";
    }
}
