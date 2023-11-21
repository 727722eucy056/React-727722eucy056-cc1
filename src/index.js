import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Themeswitch from './Themeswitch';
import reportWebVitals from './reportWebVitals';
import img1 from './startbucksimgs/HotChocolate.avif';
import img2 from './startbucksimgs/PeppermintHotChocolate.avif';
import Ecommerce from './Ecommerce';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Ecommerce count="0" item="Hot chocolate" imgUrl={img1}/>
  <Ecommerce count="0" item="cold coffee" imgUrl={img2}/>
    <Themeswitch/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
