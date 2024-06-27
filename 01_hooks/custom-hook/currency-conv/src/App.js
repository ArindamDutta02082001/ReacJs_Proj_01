import { useState } from "react";
import "./App.css";
import InputComponent from "./components/inputComponent";
import useCallConverter from "./customHook/useCurrencyHook";

// passing data from child to parent
// custom hooks -- nothing but reusable functions created by using other hooks with no return html like component does
// best style to write props in curly braces with default parameter i.e in destructured formats
function App() {
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");

  let [amount, setAmount] = useState(1);
  let [convertAmount, setConvertedAmount] = useState(1);

  const info = useCallConverter(from);
  const options = Object.keys(info);

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertAmount);
    setConvertedAmount(amount);
  }

  function convertAmountFunction() {
    amount < 0 ? setConvertedAmount(0) : setConvertedAmount(amount * info[to]);
  }

  function handleChildAmountChange(amount) {
    setAmount(amount);
  }

  function handleToCurrencyChange(param) {
    setTo(param);
  }

  function handleFromCurrencyChange(param) {
    setFrom(param);
  }

  return (
    <div className="App">
      <InputComponent
        Label={"From"}
        currencyList={options}
        fromOrToCurrencyLabel={from}
        amount={amount}
        amountChange={handleChildAmountChange}
        fromChange={handleFromCurrencyChange}
      />
      <button
        style={{ border: "2px solid black", width: "10vw", margin: "auto" }}
        onClick={() => {
          swap();
        }}
      >
        SWAP
      </button>
      <InputComponent
        Label={"To"}
        currencyList={options}
        fromOrToCurrencyLabel={to}
        amount={convertAmount}
        amountChange={handleChildAmountChange}
        disable={true}
        toChange={handleToCurrencyChange}
      />

      <button
        style={{ border: "2px solid black", width: "16vw", margin: "auto" }}
        onClick={() => {
          convertAmountFunction();
        }}
      >
        CONVERT {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
