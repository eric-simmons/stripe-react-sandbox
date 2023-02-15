import { Row, Col } from 'react-bootstrap'
import { productsArr } from '../productStore'
import ProductCard from '../components/ProductCard'


const Store = () => {
    return (<>
        <h1 align="center" className='p3'>Welcome to the Store</h1>
        <Row xs={1} md={3} className="g-4">

            {productsArr.map((product, i) => (
                <Col align="center"
                    key={i}>
                    <ProductCard 
                    product={product}/>
                </Col>
            ))}
        </Row>
    </>
    )
}

export default Store