import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Cartpage from './CartPage/Cartpage'
import MainSection from './MainSection/MainSection'
import Home from './Home/Home.jsx'
import Footer from './MainSection/Footer/Footer.jsx'
import About from './About/About.jsx'
import Shop from './Shop/Shop.jsx'
import CustomisedJewels from './CustomisedJewel/CustomisedJewels.jsx'
import Conatct from './Contact/Conatct.jsx'
import TermsCon from './otherpage/TermsCon.jsx'
import Privacy from './otherpage/Privacy.jsx'
import Exchange from './otherpage/Exchange.jsx'
import ExchangePolicy from './otherpage/ExchangePolicy.jsx'
import ReturnPolicy from './otherpage/Return.jsx'
import Affiliatepolicy from './otherpage/Affiliatepolicy.jsx'
import Goldinsurance from './otherpage/Goldinsurance.jsx'
import Childrensafety from './otherpage/Childrensafety.jsx'
import CustomisedPolicy from './otherpage/CustomisedPolicy.jsx'
import Engravingpolicy from './otherpage/Engravingpolicy.jsx'
import CertificationPolicy from './otherpage/CertificationPolicy.jsx'

import LoginPage from './Component/LoginPage.jsx'
import SignupPage from './Component/SignupPage.jsx'
import ActivationPage from './Component/ActivationPage.jsx'
import { useEffect } from 'react';

import { loadSeller, loadUser } from './redux/actions/user.jsx';
import ProductsPage from './ProductsPage/ProductsPage.jsx';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage.jsx';
import ProfilePage from './ProfilePage/ProfilePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Shopcreate from './Shopcreate/Shopcreate.jsx';
import ShopcreatePage from './Shopcreate/ShopcreatePage.jsx';
import SellerActivatinPage from './Shopcreate/SellerActivatinPage.jsx';
import ShopLoginPage from './Shopcreate/ShopLoginPage.jsx';
import ShopHomePage from './ShopHomePage/ShopHomePage.jsx';
import SellerProtectedRoute from './SellerProtectedRoute.jsx';
import ShopDashboardPage from './ShopDashboardPage/ShopDashboardPage.jsx';
import ShopCreateProductPage from './ShopCreateProductPage/ShopCreateProductPage.jsx';
import ShopAllProducts from './ShopAllProducts/ShopAllProducts.jsx';
import CatalogPage from './catalog/CatalogPage.jsx';
import Categoriespage from './catalog/Categoriespage';
import NewCategoryPage from './catalog/NewCategoryPage';
import ShopCreateEvents from './ShopCreateEvents/ShopCreateEvents';
import ShopAllEvents from './ShopCreateEvents/ShopAllEvents';
import ShopAllCoupouns from './ShopAllCoupouns/ShopAllCoupouns';
import { getAllProducts, getAllProductShop } from './redux/actions/product';
import { getAllEvents, getAllEventsShop } from './redux/actions/event';
import Store from './store';
import CheckoutPage from './Checkout/CheckoutPage';
import PaymentPage from './PaymentPage/PaymentPage';
import OrderSuccessPage from './OrderSuccess/OrderSuccessPage';
import ShopAllOrders from './ShopAllOrders/ShopAllOrders';
import ShopOrderDetails from './ShopOrderDetails/ShopOrderDetails';
import OrderDetailspage from './OrderDetailspage/OrderDetailspage';
import TrackOrderPage from './TrackOrderPage/TrackOrderPage';
import ShopAllRefunds from './ShopAllRefunds/ShopAllRefunds';
import ShopSettingPage from './ShopSettingPage/ShopSettingPage';
import ShopInboxPage from './ShopInboxPage/ShopInboxPage';
import UserInbox from './UserInbox/UserInbox';
import UserInboxPage from './UserInbox/UserInboxPage';
import ReferPage from './Refer/ReferPage';
import { captureReferralCode } from './Refer/captureReferralCode';
import ShopAllReferral from './ShopAllReferral/ShopAllReferral';
import ScrollReveal from "scrollreveal";




function App() {





  const dispatch = useDispatch();




  useEffect(() => {
    Store.dispatch(loadUser())
    Store.dispatch(loadSeller())
    Store.dispatch(getAllProducts())
    Store.dispatch(getAllEvents());
  }, [dispatch])


  useEffect(() => {
    captureReferralCode();
  }, []);




  // const { events, isLoading } = useSelector((state) => state.events)

  // console.log(events)


  // console.log(isSeller, seller)

  const shouldHideNavbar = location.pathname === '/dashboard' ||
    location.pathname.startsWith('/admin-manage') ||
    location.pathname.startsWith('/dashboard-create-product') ||
    location.pathname.startsWith('/dashboard-products') ||
    location.pathname.startsWith('/catalog') ||
    location.pathname.startsWith('/create-category') ||
    location.pathname.startsWith('/dashboard/categories/create') ||
    location.pathname.startsWith('/dashboard-create-event') ||
    location.pathname.startsWith('/dashboard-events') ||
    location.pathname.startsWith('/dashboard-coupons') ||
    location.pathname.startsWith('/dashboard-orders') ||
    location.pathname.startsWith('/dashboard-refunds') ||
    location.pathname.startsWith('/settings') ||

    location.pathname.startsWith('/dashboard-messages') ||
    location.pathname.startsWith('/dashboard-referral') ||

    location.pathname.startsWith('/order/:id')



  useEffect(() => {

    const delay = {
      origin: "top",
      distance: "80px",
      delay: 300,
      reset: true
    }

    const delayleft = {
      origin: "left",
      distance: "80px",
      delay: 400,
      reset: true
    }
    const delaybottom = {
      origin: "top",
      distance: "80px",
      delay: 500,
      reset: true
    }

    const interval = {
      origin: "top",
      distance: "80px",
      duration: 2000,
      interval: 300,
      reset: true,
    };
    const inta = {
      origin: "top",
      distance: "80px",
      duration: 1000,
      interval: 800,
      reset: true,
      scale: 1.3
    };


    setTimeout(() => {
      ScrollReveal().reveal(".shippingimg", delayleft);
      ScrollReveal().reveal('.shippingcontent', delay);
      ScrollReveal().reveal('.parentproductcard', interval);
    
    }, 0); // Adjust timeout as needed
  
  }, []); // Only run on initial mount


















  return (
    <div>







      {!shouldHideNavbar && <Navbar />}



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/personalised-prosperity' element={<CustomisedJewels />} />
        <Route path='/contacts' element={<Conatct />} />


        <Route path='/terms-and-conditions' element={<TermsCon />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/warranty-extension' element={<Exchange />} />
        <Route path='/exchange-policy' element={<ExchangePolicy />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />
        <Route path='/affiliate-program-commission-policy' element={<Affiliatepolicy />} />
        <Route path='/gold-jewellery-insurance-policy' element={<Goldinsurance />} />

        <Route path='/children-safety-jewellery-policy' element={<Childrensafety />} />
        <Route path='/customised-jewellery-policy' element={<CustomisedPolicy />} />
        <Route path='/gold-coin-promotion-with-personalised-horoscope-engraving-policy' element={<Engravingpolicy />} />
        <Route path='/gold-and-diamond-jewellery-certification-policy' element={<CertificationPolicy />} />





        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:name' element={<ProductDetailsPage />} />


        <Route path='/profile' element={
          <ProtectedRoute >

            <ProfilePage />
          </ProtectedRoute>} />

        <Route path='/user/order/:id' element={
          <ProtectedRoute >

            <OrderDetailspage />
          </ProtectedRoute>} />

        <Route path='/referrals' element={
          <ProtectedRoute >

            <ReferPage />
          </ProtectedRoute>} />



        <Route path='/user/track/order/:id' element={
          <ProtectedRoute >
            <TrackOrderPage />
          </ProtectedRoute>} />

        <Route path='/inbox' element={
          <ProtectedRoute >
            <UserInbox />
          </ProtectedRoute>} />



        <Route path='/shop-create' element={<ShopcreatePage />} />
        <Route path='/seller/activation/:activation_token' element={<SellerActivatinPage />} />
        <Route path='/shop-login' element={<ShopLoginPage />} />
        <Route path='/admin-manage/:id' element={
          <SellerProtectedRoute >
            <ShopHomePage />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard' element={
          <SellerProtectedRoute >
            <ShopDashboardPage />
          </SellerProtectedRoute>
        } />


        <Route path='/settings' element={
          <SellerProtectedRoute >
            <ShopSettingPage />
          </SellerProtectedRoute>
        } />


        <Route path='/catalog' element={
          <SellerProtectedRoute >
            <CatalogPage />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard/categories/create' element={
          <SellerProtectedRoute >
            <NewCategoryPage />
          </SellerProtectedRoute>
        } />



        <Route path='/create-category' element={
          <SellerProtectedRoute >
            <Categoriespage />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-orders' element={
          <SellerProtectedRoute >
            <ShopAllOrders />
          </SellerProtectedRoute>
        } />


        <Route path='/dashboard-create-product' element={
          <SellerProtectedRoute >
            <ShopCreateProductPage />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-create-event' element={
          <SellerProtectedRoute >
            <ShopCreateEvents />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-events' element={
          <SellerProtectedRoute >
            <ShopAllEvents />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-coupons' element={
          <SellerProtectedRoute >
            <ShopAllCoupouns />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-products' element={
          <SellerProtectedRoute >
            <ShopAllProducts />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-refunds' element={
          <SellerProtectedRoute >
            <ShopAllRefunds />
          </SellerProtectedRoute>
        } />

        <Route path='/dashboard-referral' element={
          <SellerProtectedRoute >
            <ShopAllReferral />
          </SellerProtectedRoute>
        } />




        <Route path='/dashboard-messages' element={
          <SellerProtectedRoute >
            <ShopInboxPage />
          </SellerProtectedRoute>
        } />


        <Route path='/order/:id' element={
          <SellerProtectedRoute >
            <ShopOrderDetails />
          </SellerProtectedRoute>
        } />












        <Route path='/cart' element={<Cartpage />} />
        <Route path='/checkout-page' element={<CheckoutPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/order/success' element={<OrderSuccessPage />} />



      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
      <Footer />

    </div>
  )
}

export default App
