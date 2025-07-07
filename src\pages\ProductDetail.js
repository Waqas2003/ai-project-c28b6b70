import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://example.com/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;