import { useState } from 'react';
import axios from 'axios';

export const useDataFecth = () => {
  const [data, setData] = useState([]);
  const [isReady, setReady] = useState(false);

  const fetchData = async (url, options) => {
    setReady(false);
    const response = await axios.get(url, { params: options });
    if (response.status === 200)
    {
      const {
        data: { items },
      } = response;
      setData(items)
      setReady(true)
      return
    }

    setData([]);
  };
  return [data, fetchData, isReady];
};
