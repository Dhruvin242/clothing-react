import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/home.components";
import Navigation from "./Routes/navigation/navigation.component";
import SignIn from "./Routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>SHOP PAGE</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
