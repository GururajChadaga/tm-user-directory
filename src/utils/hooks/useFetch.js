import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, signal) => {
    try {
      setLoading(true);
      const response = await fetch(url, signal);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDataController = new AbortController();
    const { signal } = fetchDataController;
    if (url) fetchData(url, signal);

    return () => {
      fetchDataController.abort();
    };
  }, [url]);

  return { data, loading, error };
};
