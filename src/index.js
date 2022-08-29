import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './page/CartPage'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import CategoryPage from './page/CategoryPage';
import sofa from './img/products/sofa.png'
import Product from './page/Product';

const products = [
  {id: 1, photo: sofa, title: 'Ронда КРР1600.1', old_price: 7159, new_price: 5017, category: 'sofa', number: 1, finalPrice: 5017},
  {id: 2, photo: 'https://azbykamebeli.ru/upload/uf/86a/86a4cf4ec1d74a4ba181720aeb989390.jpg?resize=w[1000]h[750]f[t]fc[ffffff]', title: 'АРГО-1 Baltic Pebble', old_price: 24990, new_price: 21990, category: 'sofa', number: 1, finalPrice: 21990},
  {id: 3, photo: 'https://azbykamebeli.ru/upload/uf/4bb/4bb20400607ff7e7398a72a26a833e4f.jpg?resize=w[1000]h[750]f[t]fc[ffffff]', title: 'Шкаф распашной НУАР', old_price: 8990, new_price: 7490, category: 'cupboard', number: 1, finalPrice: 7490},
  {id: 4, photo: 'https://mebel-online-vladivostok.ru/images/cached/LNiO08BQeKaNfGNr3MN0ela6SYMbC1V6gQt3hq6vpa1qafSQTlyyn4cv2bnwDhMAhhWvp7JtC6cmvvKZ01jy18RbqI-Tuj9sLveYSIsxUdmOScRqw9kSccTzTG1iCT8v.png', title: 'Модульная гостиная Белла (БТС)', old_price: 25990, new_price: 23380, category: 'living', number: 1, finalPrice: 23380},
  {id: 5, photo: 'https://mebel-online-vladivostok.ru/images/cached/LNiO08BQeKaNfGNr3MN0ela6SYMbC1V6gQt3hq6vpa0U87gFHBFM-g0qW01p3E2q95EHH4Zvtqbv2BR5vsheh-zpvbU12XytmCEfpBd2hhUK57yvIzZEWqRe9K_MmBhQ.jpg', title: 'Стул для кухни', old_price: 999, new_price: 850, category: 'kitchens', number: 1, finalPrice: 850},
  {id: 6, photo: 'https://mebel-online-vladivostok.ru/images/cached/LNiO08BQeKaNfGNr3MN0ela6SYMbC1V6gQt3hq6vpa1EIo5AkxFi0-_CGuHF7ZU8jB7FbzVhl9BKDoKcP9GK2xPzammDVgSpFjsRJg5BdZ9_2Mc55e_3V3LJ1tK70aPD.png', title: 'Кровать КР София (Памир) ', old_price: 5499, new_price: 4716, category: 'bed', number: 1, finalPrice: 4716},
  {id: 7, photo: 'https://mebel-online-vladivostok.ru/images/cached/LNiO08BQeKaNfGNr3MN0ela6SYMbC1V6gQt3hq6vpa0ZzlVG2Sun9pqsbWJH0qIC9qpiHwhYFYC0JjFsuo7U67orHwtBZNq8PxSaCfk0YjvzcWXJ9ACl8oDCQYYf2eO8.jpg', title: 'Модульная прихожая Юнона (Моби)', old_price: 13799, new_price: 12490, category: 'hallways', number: 1, finalPrice: 12490},
  {id: 8, photo: 'https://mebel-online-vladivostok.ru/images/cached/LNiO08BQeKaNfGNr3MN0ela6SYMbC1V6gQt3hq6vpa15Us_ZxcO2gUEoBfgfhl4QRUSGS3T42ilHbaBrIDD559iH09MDyZBrzyvGXUAE4TMiV89yg6GKi1XQmVcYuHMY.jpg', title: 'Кровать Смарти с фотопечатью Машинки (Премиум)', old_price: 5199, new_price: 4958, category: 'children', number: 1, finalPrice: 4958},
] 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App products={products}/>}/>
        <Route path='/:id' element={<Product products={products}/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/category/:category' element={<CategoryPage products={products}/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
