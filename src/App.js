import { useState, useEffect } from "react";
// import Layout from "./components/Layout/Layout";
import Layout2 from "./components/Layout/Layout2";
import { Route, Switch } from "react-router-dom";

import GigiHadid from "./components/Pages/Gigi-hadid/GigiHadid";
import Home from "./components/Pages/Home/Home";
import DjangoEcommerce from "./components/Pages/Ecomerce/DjangoEcommerce";

import "./styles/globalStyle.scss";
// import PageNotFound from "./components/404/PageNotFound";
// import { colors } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";

function App() {
  // loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Switch>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <>
        <Layout2>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/gigi-hadid" component={GigiHadid} />
          <Route exact path="/ecommerce" component={DjangoEcommerce} />
        </Layout2>
          {/* <Route component={PageNotFound} /> */}
        </>
      )}
    </Switch>
  );
}

export default App;
