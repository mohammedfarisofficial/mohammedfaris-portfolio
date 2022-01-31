import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import GigiHadid from "./components/Pages/Gigi-hadid/GigiHadid";
import Home from "./components/Pages/Home/Home";
import DjangoEcommerce from "./components/Pages/Ecomerce/DjangoEcommerce";

import "./styles/globalStyle.scss";
// import PageNotFound from "./components/404/PageNotFound";
import CustomCursor from "./CustomCursor";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Switch>
      <>
      <CustomCursor />
      <Layout>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/gigi-hadid" component={GigiHadid} />
        <Route exact path="/ecommerce" component={DjangoEcommerce} />
      </Layout>
      </>
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
}

export default App;
