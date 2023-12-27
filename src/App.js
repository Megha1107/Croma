import React, { useState, useEffect } from "react";
import "./App.css";
// import MisRoute from "./misRoute";
// import AdminRoute from "./adminRoute";
// import GlitchRoute from "./glitcRoute";
// import C2bRoute from "./c2bRoute";
// import Login from "./Login/Login";
// import store from "./src_mis/redux/store";
// import DsaRoute from './DsaRoutepage';
// import VFRoute from './VFRoute';
import TorchRoute from "./Chola_torch/Chola_Torch";
// import AuditRoute from './AuditRoute';
import { Provider } from "react-redux";
// import { getProduct, PrivateRoute, PublicRoute } from "../src/Chola_torch/";
// import { getProduct, PrivateRoute, PublicRoute } from "../src/src_torch/Common/Local/Local";

// import PartnerPortalRoute from "./src_torch/Common/";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Alreadylogin from "./src_mis/Common/AccessDenied/Alreadylogin";
// import Comingsoon from "./src_mis/Common/AccessDenied/comingsoon";
// import Maintenance from "./src_mis/Common/AccessDenied/Maintenance";
// import Deactivate from "./src_mis/Components/Deactivate/Deactivate";
// import Session from "./src_mis/Common/Session/Session";
// import Privacy from "./src_mis/Components/Login_Not_use/privacy";
import Chola_Torch from "./Chola_torch/Chola_Torch";
import SearchResult from "./Chola_torch/Component/NewDeal/SearchResult";
// import MapChart from "./src_mis/Common/Chola_torch/OutLine/MapChart";
// import MapApp from "./Chola_torch/RoadMap/MapApp";
// import MapApp from "./Chola_torch/RoadMap/NewMapFlow";
// import RoadMapp from "./Chola_torch/RoadMap/RoadMapp";
// import ViewCart from "./src_mis/Common/Chola_torch/Store/ViewCart";
// import popuptorch  from "./src_mis/Common/Chola_torch/popuptorch";
// import Session from "./src_mis/Common/Session/Session";
// import SidebarTest from "./src_pp/Components/Sidebar/Sidebar"

function App() {
  const productsCode = localStorage.getItem("product_code");
  const [ProCode, setProCode] = useState("");
  useEffect(() => {
    setProCode(productsCode);
  }, [productsCode, ProCode]);

  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      
        <>
          <Router>
            <Routes>
             
              <Route index path="/" element={<Chola_Torch />} />
              <Route path="/searchResult" element={<SearchResult />} />
              
      
            </Routes>
          </Router>
        </>
      
      {/* </Provider> */}
    </div>
  );
}

export default App;
