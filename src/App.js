import React, { useState } from 'react';
import EffectExample from './EffectExample';

function App() {
  const [visible, setVisible] = useState(true);
  
  setTimeout(() => {
    setVisible(false);
  }, 5000);

  return  visible && <EffectExample/> ;
}

export default App;
