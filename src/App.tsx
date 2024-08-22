import React from 'react';
import Component, { FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionmalRender from './component_manage/ConditionmalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/ListRender';
import EventComponent from './interraction/EventComponent';

function App() {
  return (
    <>
      {/* <Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <ConditionmalRender /> */}
      {/* <Example2 /> */}
      {/* <ListRender /> */}
      <EventComponent/>
    </>
  );
}

export default App;