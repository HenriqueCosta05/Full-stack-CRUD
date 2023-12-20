import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ResponsiveExample() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/produtos");
        setProducts(result.data);
        console.log(result.data);
    }

    return (
      
      <>
          <p></p>
          <p></p>
          <p></p>

          <Table responsive className='border shadow'>
    <thead>
        <tr>
            <th>#</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Código</th>
            <th scope='col'>Descrição</th>
            <th scope='col'>Preço</th>
            <th scope='col'>Ações Rápidas</th>
        </tr>
    </thead>
    <tbody>
        {products.map((product, index) => (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.code}</td>
                <td>{product.description}</td>
                <td>{product.price_in_cents}</td>
                <td>
                    <Button variant="primary">
                        <Link to={`/produtos/${product.id}`} className='link-light text-decoration-none'>Visualizar</Link>
                        </Button>{' '}
                    <Button variant="outline-primary">
                        <Link to={`/editar-produto/${product.id}`}  className='text-decoration-none'>Editar</Link>
                    </Button>{' '}
                    <Button variant="danger" className='link-light text-decoration-none'>Apagar</Button>{' '}
                </td>
            </tr>
        ))}
    </tbody>
</Table>
          </>
  );
}

export default ResponsiveExample;