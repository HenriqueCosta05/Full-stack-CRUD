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
    price_in_cents: ''
  });

  const { name, code, description, price_in_cents } = product;

  const convertPriceToCents = (price_in_cents) => {
    const priceWithoutSymbol = price_in_cents.replace('R$', '').replace(',', '.');

    if (!isNaN(priceWithoutSymbol)) {
      const priceInCents = Math.round(parseFloat(priceWithoutSymbol) * 100);
      return priceInCents;
      
    }
    return 0;
  }
    const handlePriceInput = (e) => {
      const { id, value } = e.target;

      if (id === 'price_in_cents') {
        const priceInCents = convertPriceToCents(value);
        setProduct({ ...product, price_in_cents: convertPriceToCents(value) });
      } else {
        setProduct({ ...product, [id]: value });
      }
    };

  const onInputChange = (e) => {
      setProduct({ ...product, [e.target.id]: e.target.value });
  };
    
    useEffect(() => {
        loadProduct();
    }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://simple-crud-backend.up.railway.app/editar-produto/${id}`, product).catch(err => console.log(err));
    navigate("/");
  };

    const loadProduct = async () => {
        const result = await axios.get(`https://simple-crud-backend.up.railway.app/produto/${id}`);
        setProduct(result.data);
        console.log(result.data);
    }

  return (
    <>
    <h1 className='text-center mt-5'>Editar dados do Produto</h1>
    <Form className='w-75 m-auto mt-5 border shadow' onSubmit={(e)=>onSubmit(e)}>
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
      <Form.Group className="mb-3 mt-5 w-75 m-auto" controlId="price_in_cents">
          <Form.Label>Preço: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o preço do produto..."
            value={price_in_cents}
            onChange={(e) => onInputChange(e) && handlePriceInput(e)}
            required
          />
        </Form.Group>
        <Button variant="danger" className='mt-4 mb-4'>
         <Link to="/" className='link-light text-decoration-none'>Cancelar</Link>
      </Button>
      <Button variant="primary" type="submit" className='mt-4 mb-4 m-4'>
        Editar
        </Button>
         
      </Form>
      </>
  );
}

export default EditProduct;