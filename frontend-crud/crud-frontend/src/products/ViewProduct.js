import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function ViewProduct() {

   const [product, setProduct] = useState({
    name: "",
    code: "",
    description: "",
    price_in_cents: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/produto/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
          <h1 className='text-center mt-5'>Visualizar dados do Produto</h1>

      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nome: </b>
                  {product.name}
                </li>
                <li className="list-group-item">
                  <b>Código: </b>
                  {product.code}
                </li>
                <li className="list-group-item">
                  <b>Descrição: </b>
                  {product.description}
                </li>
                <li className="list-group-item">
                  <b>Preço: </b>
                  {product.price_in_cents}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;