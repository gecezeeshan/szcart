import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function SearchPanel(props) {

    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.target.value);
    }

    const handleInStockChange = (e) => {
        props.onInStockChange(e.target.checked);
    }

    return (
        <>
        <form>
            <Container  >
                <Row>
                    <Col md="12" 
                    ><input type="text" placeholder="Search Product" value={props.filterText}
                        onChange={handleFilterTextChange} width="500px"></input></Col>
                </Row>
                <Row >
                    <Col md="12" >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="In stock only" checked={props.inStockOnly}
                                onChange={handleInStockChange} />
                        </Form.Group>
                        </Col>
                </Row>
            </Container>

        </form>
        </>


    )
}

export default SearchPanel