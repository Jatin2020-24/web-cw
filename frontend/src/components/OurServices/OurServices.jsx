import React from 'react'
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            <h1 className="ma-in-title">COMPREHENSIVE SERVICES</h1>
            <p className="description">
            Agriculture is one of the major sectors of the Indian economy. It is present in the country for thousands of years. Over the years it has developed and the use of new technologies and equipment replaced almost all the traditional methods of farming. Besides, in India, there are still some small farmers that use the old traditional methods of agriculture because they lack the resources to use modern methods. Furthermore, this is the only sector that contributed to the growth of not only itself but also of the other sector of the country.
            </p>
            <Container className="services">
                <Row>
                    <Col md={3}>
                        <h5 className="sub-title">Heavy Machine</h5>
                        <Image className="img" src="images/services/heavy.svg" fluid />
                        <p className="sub-desc">No need to worry of labour costing more. Just rent all types of machine here!!</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Gardening Kits</h5>
                        <Image className="img" src="images/services/gardening.svg" fluid />
                        <p className="sub-desc">We provides all of the gardening related products i.e seeds, pestisides and heavy machine.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Supplier</h5>
                        <Image className="img" src="images/services/supplier.svg" fluid />
                        <p className="sub-desc">Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Consumer</h5>
                        <Image className="img" src="images/services/consumer.svg" fluid />
                        <p className="sub-desc">Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OurServices
