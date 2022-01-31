import { Redirect, Route, Switch } from "react-router";
import MainHeader from "./components/MainHeader";
import ProductDeatails from "./pages/ProductDeatails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
          <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDeatails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
