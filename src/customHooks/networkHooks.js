import { useEffect, useState } from 'react';

export const useFetch = (requestObject) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    /**
     * @requestObject prototype
     * {
     * baseUrl,
     * route,
     * body,
     * requestType
     * }
    */

    useEffect(() => {
        if (!requestObject || !requestObject.route) return;
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(requestObject.route);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [requestObject]);

    return { loading, error, data };
}
