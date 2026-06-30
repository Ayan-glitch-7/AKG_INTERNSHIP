import { useState } from "react";

function First() {
  // component

  let name = "Ayan";
  let city = "Prayag";

  let skills = ["React", "Next", "Postgre", "Mongodb", "Native"];
  return (
    // we want a HTML
    <>
      <h1>This is my first component</h1>
      <h2>
        My name is {name} & city is {city}
      </h2>

      <h2>
        Skills :
        {skilss.map((e) => {
          `${e}`;
        })}
      </h2>
    </>
  );
}

export default First;

export function First1() {
  return (
    <>
      <h1>This is my second component</h1>
    </>
  );
}

export function First2() {
  let age = 21;

  let status = false;
  return (
    <>
      <h1>Check Eligibility :{age >= 20 ? "Eligible" : "Not Eligible"}</h1>

      <h1>
        {
          // it woks like && operator, where both the conditions must be true
          status && <p>show paragraph</p>
        }
      </h1>
    </>
  );
}

export function StateComponent() {
  let [count, setCount] = useState(0);
  // console.log(count);
  // current, bound dispatchSetState(ki update krna current value ko)
  // console.log(setCount);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  let [status, setStatus] = useState(true);
  console.log(status);
  return (
    <>
      <h1>useState Hook</h1>

      <div>
        <button onClick={increase}>+</button>
        <h3>{count}</h3>
        <button onClick={decrease}>-</button>
      </div>

      <div>
        <button
          onClick={() => {
            setStatus(!status);
          }}
        >
          {status ? "Hide para" : "Show para"}
        </button>
        {status && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            magnam quisquam! Adipisci modi eveniet explicabo rerum sapiente
            provident at assumenda architecto iste voluptas totam dolor saepe
            perferendis, molestias fuga aliquam!
          </p>
        )}
      </div>
    </>
  );
}
