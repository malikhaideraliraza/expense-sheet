import React, { useState, useMemo } from 'react';

//components
import FilterModal from '../../components/Modals/FilterModal';
import GridTable from '../../components/Grid/GridTable';

//Sample Data
import TableData from '../../utills/sampleData';

//Utills
  //constants
  import { GRID_TABLE_HEADERS } from '../../utills/constants';
  //helpers
  import { colDefCreatorForGridtable } from '../../utills/helpers';

//css local
import './gridPage.css';

const GridPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalProps = { show, handleClose };

  //TODO move to somewhere later (after classification)
  const mapColDefForHeaders = () => {
    return GRID_TABLE_HEADERS.map((key, i) => colDefCreatorForGridtable(key, i));
  }

	return (
  	<div className='container' >
      <GridTable data={TableData} handleShow={handleShow} mapColDefForHeaders={mapColDefForHeaders} />
      <ModalRendere modalProps={modalProps} />
    </div>
	);
};

export default GridPage;

const ModalRendere = ({ modalProps }) => {
  const { show } = modalProps;
  switch (show) {
    case (true):
      return (<FilterModal {...modalProps} />);
    default: 
      return null;
  }
}
