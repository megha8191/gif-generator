import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = "gujgFDCQ0OdhgnG0HixGNMz1xe46EmhE";

const useGif = (query) => {
    const [isLoading, setIsLoading] = useState(true);
    const [random, setRandom] = useState(null);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const fetchInfo = async (query) => {
        setIsLoading(true);
        try {
            const url2 = (query) ? url + `&tag=${query}&rating=g`: url ;
            console.log(url2)
            const response = await axios.get(url2);
            setRandom(response.data.data.images.original);
        } catch (error) {
            console.error('Error fetching random gif:', error);
            setRandom(null);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchInfo(query);
      }, [])

    return { random, fetchInfo, isLoading };
};

export default useGif;