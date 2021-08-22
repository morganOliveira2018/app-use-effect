import React, { useEffect, useState } from "react";

/* 
   1) useEffect sem parametro no array de dependencia é igual ao componente Didmount
   2) useEffect com um parametro ou mais no array de dependencia é mais ou menos igual ao DidUpdate
   3) useEffect com componenteWillUnmount
*/

export default function EffectExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;

    return () => {
      document.title = 'React App';
      console.log('Eu adoro programar!!!')
    };

  }, [counter])

  return ( 
    <>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
    </>
  );
}
