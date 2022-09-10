import React, { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../FormContainer/FormContainer'
import Meta from '../Helmet/Meta'

const PredictComponent = ({ location, history }) => {
    
    const [nitrogen, setNitrogen] = useState('')
    const [phosphorus, setPhosphorus] = useState('')
    const [potassium, setPotassium] = useState('')
    const [ph, setPh] = useState('')
    const [temperature, setTemperature] = useState('')
    const [rainfall, setRainfall] = useState('')

    const dispatch = useDispatch()

    function saveUser() {
        console.warn({nitrogen,phosphorus,potassium,ph,temperature,rainfall});
        let data = {nitrogen,phosphorus,potassium,ph,temperature,rainfall}
        console.log(data)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveUser())
    }
    
    return (
        <FormContainer>
            <Meta
                title="Agroic | Predict Crop Yield"
            />
            <h1 style={{ marginTop: '120px' }}>Predict</h1>
            {/* { error && <Message variant='danger'>{error}</Message>} */}
            {/* { loading && <Loader />} */}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='nitrogen'>
                    <Form.Label>Nitrogen <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Nitrogen contents in soil"
                        value={nitrogen}
                        required
                        onChange={(e) => setNitrogen(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='phosphorus'>
                    <Form.Label>Phosphorus <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Nitrogen contents in soil"
                        value={phosphorus}
                        required
                        onChange={(e) => setPhosphorus(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='potassium'>
                    <Form.Label>Potassium <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Potassium contents in soil"
                        value={potassium}
                        required
                        onChange={(e) => setPotassium(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='ph'>
                    <Form.Label>Ph value <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the ph of soil"
                        value={ph}
                        required
                        onChange={(e) => setPh(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='temperature'>
                    <Form.Label>Temperature <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the temperature"
                        value={temperature}
                        required
                        onChange={(e) => setTemperature(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='rainfall'>
                    <Form.Label>Rainfall <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Total rainfall depth during a given period"
                        value={rainfall}
                        required
                        onChange={(e) => setRainfall(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                
            </Form>
            <Row className='py-3'>
                <Col style={{ marginBottom: '30px', marginLeft:'250px' }}>
                    {/* <Link>Submit</Link> */}
                    {/* to={redirect ? `/register?redirect=${redirect}` : '/register'} */}
                     <button type='submit'>Submit</button>
                </Col>
            </Row>
        </FormContainer>
    )
}

  export default PredictComponent;
