import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    Col,
    Container,
    Row,
    Image,
    ListGroup,
    Card,
    Button
} from 'react-bootstrap';
import './LendMachineScreen.css';

import { listLendMachineProductsDetails } from './../../actions/productLendMachinesActions'
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

const LendMachineProduct = ({ match }) => {
    const dispatch = useDispatch()

    const productLendMachinesDetails = useSelector(state => state.productLendMachinesDetails)
    const { loading, error, productLendMachines } = productLendMachinesDetails

    useEffect(() => {
        dispatch(listLendMachineProductsDetails(match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, match])


    return (
        <div className="productScreen">
            <Container>
                <Link className="btn btn-go-back btn-dark" to="/farmers/lendMachines">GO BACK</Link>
                {
                    loading
                        ? <Loader />
                        : error
                            ? <Message variant='danger'>{error}</Message>
                            : (
                                <Row className="p-3 seed-product" >
                                    <Col md={6}>
                                        <Image className="mx-auto image-machine" src={productLendMachines.image} alt={productLendMachines.name} width={200} />
                                    </Col>
                                    <Col md={3}>
                                        <ListGroup className="borderless" variant='flush'>
                                            <ListGroup.Item>
                                                <h2>{productLendMachines.name}</h2>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <h4>Price: {productLendMachines.price}</h4>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p>Description: {productLendMachines.description}</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p>Quantity Available: {productLendMachines.quantity}kg</p>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col md={3}>
                                        <Card>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Machine Power:</Col>
                                                        <Col><strong>{productLendMachines.machine_power}</strong></Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Target Plant:</Col>
                                                        <Col>
                                                            {productLendMachines.target_plant}
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Button type="button" className="btn btn-block" >Add To Cart</Button>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                </Row>
                            )
                }
            </Container>
        </div>
    )
}

export default LendMachineProduct
