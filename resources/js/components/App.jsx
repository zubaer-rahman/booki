import TopBar from './TopBar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Header from './Header';
import Preview from './Preview';
import Feature from './Feature';
import Author from './Author';
import Testimonial from './Testimonial';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <Router>
        <TopBar />
        <Header />
        <Preview />
        <Feature />
        <Author />
        <Testimonial />
        <Pricing />
        <CallToAction />
        <Contact />
        <Footer />
        <Routes>
        
          {/* <Route path='/' exact element={<Shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/review' element={<Review />} />
          <Route path='/inventory' element={<PrivateRoute> <Inventory /> </PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/shipment' element={<PrivateRoute> <Shipment /> </PrivateRoute>} />
          <Route path='/product/:product_key' element={<ProductDetail />} />
          <Route path='*'  element={<NotFound />} /> */}

        </Routes>
      </Router>
    )
}
export default App;





