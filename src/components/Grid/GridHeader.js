import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaFilter } from "react-icons/fa";

const GridHeader = ({ handleShow }) => (
    <>
        <h1>Grid Table</h1>
        {/**TODO sample widget */}
        <Row>
            <Col>
                paging there...
            </Col>
            <Col className="content-right">
                <Button variant="light">
                    <FaFilter className="grid-header-icon" onClick={handleShow} />
                </Button>
            </Col>
        </Row>
    </>
)

export default GridHeader;
