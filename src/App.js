import "./App.css";
import { Route, Routes} from 'react-router-dom';
import ProductDetailPage from "./components/Pages/ProductDetailPage/ProductDetailPage";
import Homepage from "./components/Pages/HomePage/Homepage";
import Login from "./components/Pages/Login/Login";
import Signup from './components/Pages/Signup/Signup'
import Cart from "./components/Pages/Cart/Cart";
import Orders from "./components/Pages/Orders/Orders";
import DesignerProfile from "./components/Pages/Profile/DesignerProfile";
import UserProfile from './components/Pages/Profile/UserProfile'
import ErrorPage from "./components/Pages/Error.js/ErrorPage";
import Designer from "./components/Pages/Profile/Designer";
import Sellyourart from "./components/Pages/Sell/Sellyourart";
import UploadDesign from "./components/Pages/UploadDesign/UploadDesign";
import EditProfile from "./components/Pages/EditProfile/EditProfile";
import DesignerSignUp from "./components/Pages/DesignerSignup/DesignerSignup";
// import Homepage from "./components/Pages/HomePage/Homepage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/product_details" exact element={<ProductDetailPage />} />
        <Route path="/new" exact element={<h1>this is what's new section</h1>} />
        <Route path="/categories" exact element={<h1>this is categories section</h1>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/orders" exact element={<Orders/>} />
        <Route path="/userProfile" exact element={<UserProfile/>} />
        <Route path="/designerProfile" exact element={<DesignerProfile/>} />
        <Route path="/error" exact element={<ErrorPage/>} />
        <Route path="/public_designer_profile" exact element={<Designer/>} />
        <Route path="/sell" exact element={<Sellyourart/>}/>
        <Route path="/uploadDesign" exact element={<UploadDesign/>}/>
        <Route path="/EditProfile" exact element={<EditProfile/>}/>
        <Route path="/designerSignup" exact element={<DesignerSignUp/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
