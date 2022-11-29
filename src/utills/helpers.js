import { toast } from 'react-toastify';

//ag-grid stylers
import { ShippingCoCellStyler, FNOCellStyler } from './agGridStylers';

//common notification poper
export const notify = (type, message, onClose) => {

    //config for poper
    let options = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    }

    if (onClose) options = { ...options, onClose };

    if (type) toast[type](message, options);
    else toast(message, options);
}

//column(ag-grid) defination creator helper + logic for table
export const colDefCreatorForGridtable = (key, i) => {

    let defObj = {
        field: key,
        headerName: key,
        width: 80,
        pinned: i < 5 ? true : false,
    }
    let cellStyle = null;

    // if (key === "FNO") {
    //     cellStyle = FNOCellStyler;
    // } else if (key === "ShippingCo"){
    //     cellStyle = ShippingCoCellStyler
    // }

    if (cellStyle) defObj = { ...defObj, cellStyle };

    return defObj;
}
