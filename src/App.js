

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routers/AllRoutes";



import ProductCards from "./Pages/ProductCard/ProductCards";
import Navbar from "./Components/Navbar"
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
<Navbar/>
<ProductCards/>
    </div>
  );


}

export default App;
