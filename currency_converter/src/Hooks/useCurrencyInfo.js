import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates || {}))
      .catch(() => setData({}));
  }, [currency]);

  return data;
}


export default useCurrencyInfo;