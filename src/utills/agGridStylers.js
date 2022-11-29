export const FNOCellStyler = (params) => {
    if (parseInt(params.value) > 704001) return { color: 'yellow', backgroundColor: 'green' };
}

export const ShippingCoCellStyler = (params) => {
    if (params.value === "KLINE") return { color: 'blue', backgroundColor: 'yellow' };
}
