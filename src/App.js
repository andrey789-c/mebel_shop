import Header from "./components/Header";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import ProductsList from "./components/ProductsList";

function App({products}) {
  

  return (
    <div className="app">
      <Nav />
      <Header />
      <Menu />
      <ProductsList products={products}/>
    </div>
  );
}

export default App;
