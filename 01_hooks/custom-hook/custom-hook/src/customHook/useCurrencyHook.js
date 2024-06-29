import { useEffect, useState } from "react";

function useCallConverter(currency) {
  let [data, setData] = useState({});
  useEffect(() => {
    async function CurrencyHook(currency) {
      const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

      try {
        const response = await fetch(url);
        try {
          var ans = await response?.json();
          setData(ans[currency]);
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    }

    CurrencyHook(currency);
  }, [currency]);

  return data;
}

export default useCallConverter;
