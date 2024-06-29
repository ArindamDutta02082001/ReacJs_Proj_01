function InputComponent({
  currencyList = [],
  amount = 0,
  fromOrToCurrencyLabel = "usd",
  amountChange,
  Label,
  disable = false,
  fromChange,
  toChange,
}) {
  return (
    <>
      <div
        className="Master"
        style={{ border: "2px solid red", width: "25vw", margin: "auto" }}
      >
        <div
          className="child1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{Label}</span>
          <span style={{ fontWeight: "bold" }}>
            {fromOrToCurrencyLabel.toUpperCase()}
          </span>
        </div>
        <div
          className="child2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <span>
            <input
              disabled={disable}
              type="number"
              name="amount"
              id="amount"
              value={amount}
              style={{
                padding: "8px",
                width: "60%",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              placeholder="Enter amount"
              onChange={(e) => {
                amountChange(e.target.value);
              }}
            />
          </span>
          <span>
            <select
              name="currency"
              id="currency"
              value={fromOrToCurrencyLabel}
              style={{
                padding: "8px",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              onChange={(e) => {
                Label === "From"
                  ? fromChange(e.target.value)
                  : toChange(e.target.value);
              }}
            >
              {currencyList.map((currVal, i) => (
                <option key={i} value={currVal}>
                  {currVal.toUpperCase()}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </>
  );
}

export default InputComponent;
