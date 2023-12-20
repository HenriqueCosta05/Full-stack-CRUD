import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function EditProduct() {

    const {id} = useParams();
  //Get the price and separate the cents from the integer 
  const [fullPrice, setFullPrice] = useState(0);

  function handlePriceFormatting(e) {
    const price = e.target.value;
    const priceSplit = price.split('.');
    const priceInteger = priceSplit[0];
    const priceCents = priceSplit[1];
    const priceFormatted = `${priceInteger}.${priceCents}`;
    setFullPrice(priceFormatted);
  }

  let navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    code: '',
    description: '',
    price: ''
  });

  const { name, code, description, price } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  }
    
    useEffect(() => {
        loadProduct();
    }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/editar-produto/${id}`, product);
    navigate("/");
  };

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8080/produto/${id}`);
        setProduct(result.data);
        console.log(result.data);
    }

  return (
    <>
    <h1 className='text-center mt-5'>Cadastrar Produto</h1>
    <Form className='w-50 m-auto mt-5 border shadow' onSubmit={(e)=>onSubmit(e)}>
        <Form.Group className="mb-3 mt-5 w-75 m-auto" controlId="name">
        <Form.Label>Nome: </Form.Label>
        <Form.Control type="text" placeholder="Digite o nome do produto..." value={name} onChange={(e)=>onInputChange(e)} required/>
      </Form.Group>
      <Form.Group className="mb-3 mt-5 w-75 m-auto" controlId="code">
        <Form.Label>Código: </Form.Label>
        <Form.Control type="text" placeholder="Digite o código do produto..." value={code} onChange={(e)=>onInputChange(e)} required/>
      </Form.Group>
      <Form.Group className="mb-3 mt-5 w-75 m-auto" controlId="description">
        <Form.Label>Descrição: </Form.Label>
        <Form.Control type="text" placeholder="Digite uma descrição do produto..." value={description} onChange={(e)=>onInputChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3 mt-5 w-75 m-auto" controlId="price">
        <Form.Label>Preço: </Form.Label>
        <Form.Control type="text" placeholder="Digite o preço do produto..." value={price} onChange={(e)=>onInputChange(e)} required/>
        </Form.Group>
        <Button variant="danger" className='mt-4 mb-4'>
         <Link to="/" className='link-light text-decoration-none'>Cancelar</Link>
      </Button>
      <Button variant="primary" type="submit" className='mt-4 mb-4 m-4'>
        Cadastrar
        </Button>
         
      </Form>
      </>
  );
}

export default EditProduct;