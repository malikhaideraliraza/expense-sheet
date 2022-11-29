import React from 'react'
import { Modal, Button, Row, Col, FormCheck } from 'react-bootstrap';

const FilterModal = ({ handleClose, show }) => {
//TODO make componensts more re useable

    return (
        <Modal size='sm' show={show} onHide={handleClose}>
          <Modal.Header className="freight-modal-header" closeButton>
            <Modal.Title>
              <small>Filter Screen</small>
              <h4>Freight Managment</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="textOnInput mt-4">
                <label for="inputText">Visible Column</label>
                <input className="form-control" type="text" />
            </div>
            <Row>
              <Col xs={6} >
                <div className="textOnInput mt-4">
                    <label for="inputText">Start Date</label>
                    <input className="form-control" type="date" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="textOnInput mt-4">
                    <label for="inputText">End Date</label>
                    <input className="form-control" type="date" />
                </div>
              </Col>
            </Row>
            {/* <div className="textOnInput mt-4">
                <label for="inputText">Search MRN</label>
                <input className="form-control" type="text" />
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Search VAT</label>
                <input className="form-control" type="text" />
            </div> */}
            <div className="textOnInput mt-4">
                <label for="inputText">Chain Status</label>
                <select className="form-control" type="text" >
                  <option>1</option>
                </select>
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Custommer Status</label>
                <input className="form-control" type="text" />
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Incomplete Releases Freights</label>
                <input className="form-control" type="text" />
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Missing MRN#</label>
                <input className="form-control" type="text" />
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Cargo Data Log</label>
                <input className="form-control" type="text" />
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Search MRN</label>
                <input className="form-control" type="text" />
            </div>
            <div className="textOnInput mt-4">
                <label for="inputText">Search VAT</label>
                <input className="form-control" type="text" />
            </div>
            <div className="mb-3 mt-4">
              <FormCheck 
                type="checkbox"
                label="Show All Freights"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Reset
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Apply Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default FilterModal;