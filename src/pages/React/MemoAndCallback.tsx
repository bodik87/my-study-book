import React, { memo, useCallback, useState } from "react";

export default function MemoAndCallback() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const styles = {
    input: "block m-4 px-4 py-2 rounded-md",
  };

  const handleHelloCallback = useCallback(() => {
    return `Hello from Callback ${name}`;
  }, [name]);

  return (
    <>
      <input
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        className={styles.input}
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
      />

      <p className="p-4">
        <Greeting name={name} />
      </p>
      <p className="p-4">
        <Hello name={name} />
      </p>

      <Greeting2 handleHelloCallback={handleHelloCallback} />

      <p className="p-4">
        {`При зміні стану перерендується компонент App, а з ним і вкладені в нього
        компоненти, щоб завадити цьому - обернемо одного з дітей /Greeting/ в
        мемо, що закешує цей його і він не буде заново рендитись, доки не почне змінюватись.
        Для TS:
        const Title: FC = memo(()=>{return(<div>Title</div>)})`}
      </p>

      <p className="p-4">
        {`useCallback(() => {}, [dependency] кешує саме функцію, а не змінну`}
      </p>
    </>
  );
}

const Greeting: any = memo(function Hello({ name = "Pass the name in props" }) {
  const newTime = new Date();
  console.log(
    `Greeting (with memo): ${newTime.getMinutes()}:${newTime.getSeconds()}`
  );

  return `Hello ${name}`;
});

function Hello({ name = "Pass the name in props" }) {
  const newTime = new Date();
  console.log(
    `Hello (without memo): ${newTime.getMinutes()}:${newTime.getSeconds()}`
  );

  return `Hello ${name}`;
}

const Greeting2: any = memo(function HelloCallback({
  handleHelloCallback = () => {},
}) {
  const newTime = new Date();
  console.log(
    `HelloCallback (without memo): ${newTime.getMinutes()}:${newTime.getSeconds()}`
  );

  return handleHelloCallback();
});
