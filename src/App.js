import { Route, Switch } from "react-router-dom";

import GigiHadid from "./components/Pages/Gigi-hadid/GigiHadid";
import Home from "./components/Pages/Home/Home";
import DjangoEcommerce from "./components/Pages/Ecomerce/DjangoEcommerce";

import "./styles/globalStyle.scss";
import CustomCursor from "./CustomCursor";

import Navbar from "./components/Navbar/Navbar";
import Building from "./components/Pages/Building/Building";

function App() {
  return (
    <Switch>
      <>
        <CustomCursor />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/gigi-hadid" component={GigiHadid} />
        <Route exact path="/ecommerce" component={DjangoEcommerce} />
        <Route exact path="/building" component={Building} />
      </>
    </Switch>
  );
}

export default App;
