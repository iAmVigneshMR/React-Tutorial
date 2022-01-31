// import React, { useState } from 'react';

// const Greeting = () => {
//     const [changeText, setChangeText] = useState(false);
    
//     const changeTextHandler = () => {
//         setChangeText(true);
//     }

//     return (
//   <div>
//       <h2>Hello world</h2>
//       {!changeText && <p>Its good to see you</p>}
//       {changeText && <p>Changed</p>}
//       <button onClick={changeTextHandler}>Change Text</button>
//   </div>
//   );
// };

// export default Greeting;



import React, { useState } from 'react';
import Output from './Output';

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);
    
    const changeTextHandler = () => {
        setChangeText(true);
    }

    return (
  <div>
      <h2>Hello world</h2>
      {!changeText && <Output>Its good to see you</Output>}
      {changeText && <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
  </div>
  );
};

export default Greeting;
