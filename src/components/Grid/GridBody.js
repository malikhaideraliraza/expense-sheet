import React, { useMemo } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

//css module
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridBody = ({ data, mapColDefForHeaders }) => {

    const defaultProps = useMemo(() => ({ 
        resizable: true,
        sortable: true,
        //flex: 1,
        valueFormatter: params => params.value ? params.value : '-'
    }), []);

   return (
        <AgGridReact
            pagination
            paginationPageSize={20}
            defaultColDef={defaultProps}
            debug={true}
            rowData={data}
            rowHeight={30}
        >
            {
            mapColDefForHeaders().map(colDef => 
                <AgGridColumn
                {...colDef}
                />)
            }
        </AgGridReact>
    )
} 

export default GridBody;
