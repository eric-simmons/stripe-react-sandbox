import { Card, Button, Form, Row, Col} from 'react-bootstrap'
import { productsArr } from '../productStore'

const ProductCard = ({product}) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
               <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )

}

export default ProductCard