import React from 'react'
import products from '../products.js'
import Product from '../components/Product'
import { Container, Col, Row, } from 'react-bootstrap'

function HomeScreen() {
    return (
        <div>
            <h1>
                Latest Products
            </h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-2">
                        <Product product={product}>

                        </Product>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen