import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'


const ProductCard = (props) => {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart : {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button onClick={() => cart.addOneToCart(product.id)} sm="6" className='mx-2'>+</Button>
                                <Button onClick={() => cart.removeOneFromCart(product.id)} sm="6" className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button onClick={() => cart.deleteFromCart(product.id)} variant='danger' className="my-2">Remove from cart</Button>
                    </>
                    : <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )

}

export default ProductCard