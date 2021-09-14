import { useState , useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import GigiHadid from "./components/Pages/Gigi-hadid/GigiHadid";
import Home from "./components/Pages/Home/Home";
import DjangoEcommerce from "./components/Pages/Ecomerce/DjangoEcommerce";

import "./styles/globalStyle.scss";

function App() {
  // loading
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }, [])
  return (
    <Switch>
      { loading ? <h2>loading</h2> : (
        <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/gigi-hadid" component={GigiHadid} />
        <Route path="/ecommerce" component={DjangoEcommerce} />
        <Route
          path="/gigiModels"
          render={() => (window.location = "https://models.com/models/gigi-hadid")}
        />
      </Layout>
      )}
    </Switch>
  );
}

export default App;
