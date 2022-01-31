import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import PageNotFound from "./pages/PageNotFound";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
