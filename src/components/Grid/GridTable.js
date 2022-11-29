import React from 'react';

//components
import GridBody from './GridBody';
import GridHeader from './GridHeader';

const GridTable = ({ data, handleShow, mapColDefForHeaders }) => (
    <div className="example-wrapper">
        <div
        id="myGrid"
        className="ag-theme-alpine"
        >
            <GridHeader handleShow={handleShow} />
            <GridBody data={data} mapColDefForHeaders={mapColDefForHeaders} />
        </div>
    </div>
)

export default GridTable;
