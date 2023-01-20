

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routers/AllRoutes";



import ProductCards from "./Pages/ProductCard/ProductCards";
function App() {

    return (
    <>
    <Navbar />   
      <AllRoutes />
      <Footer/>
    </>
    )

  return (
    <div>
<ProductCards/>
    </div>
  );


}

export default App;
