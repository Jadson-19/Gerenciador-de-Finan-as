import { Route, Routes as ReactRouter } from "react-router-dom";
import Home from "../Home/Home";
import SubHome from "../SubHome/SubHome";

function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/SubHome" element={<SubHome />} />
    </ReactRouter>
  );
}

export default Routes;
