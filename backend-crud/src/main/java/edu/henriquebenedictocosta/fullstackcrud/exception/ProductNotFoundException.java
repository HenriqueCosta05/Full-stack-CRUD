package edu.henriquebenedictocosta.fullstackcrud.exception;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(Long id){
        super("Não conseguimos encontrar o produto especificado com o id " + id);
    }
}
