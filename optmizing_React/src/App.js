import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import Demo from './components/Demo/Demo';
import Button from './components/UI/Button/Button';

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // console.log("App Render");
  
  // const toggleParagraphHandler = useCallback(() => {
  //   if(allowToggle){
  //     setShowParagraph(prevShowParagrapg => !prevShowParagrapg);
  //   }
  // }, [allowToggle]);
  
  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      {/* <h1>Hi there!</h1>
      <Demo show ={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button> */}
      <Demo title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
