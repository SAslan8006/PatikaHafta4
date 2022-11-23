import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setLoading(false);
        }
        catch {

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading };
};

export default useFetch;