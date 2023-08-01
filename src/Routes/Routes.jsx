/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Register from '../Pages/Login/Register';
import Login from '../Pages/Login/Login';
import RequireAuth from '../Components/RequireAuth/RequireAuth';
import DashboardLayout from '../Layout/DashboardLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddUser from '../Pages/Dashboard/AddUser/AddUser';
import AddProduct from '../Pages/Dashboard/AddProduct/AddProduct';
import TrendingProduct from '../Pages/TrendingProduct/TrendingProduct';
import GiftCards from '../Pages/GiftCards/GiftCards';
import Subscription from '../Pages/Subscription/Subscription';
import VideoGames from '../Pages/VideoGames/VideoGames';
import GamingGiftcards from '../Pages/GamingGiftcards/GamingGiftcards';
import BestSoftwares from '../Pages/BestSoftwares/BestSoftwares';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import PaymentDetails from '../Components/PaymentDetails/PaymentDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/trending_products',
        element: <TrendingProduct></TrendingProduct>,
      },
      {
        path: '/giftcards',
        element: <GiftCards></GiftCards>,
      },
      {
        path: '/gaming_giftcards',
        element: <GamingGiftcards></GamingGiftcards>,
      },
      {
        path: '/videogames',
        element: <VideoGames></VideoGames>,
      },
      {
        path: '/subscription',
        element: <Subscription></Subscription>,
      },
      {
        path: '/softwares',
        element: <BestSoftwares></BestSoftwares>,
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
      },

      {
        path: '/paymentDetails',
        element: (
          <RequireAuth>
            <PaymentDetails></PaymentDetails>
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <DashboardLayout></DashboardLayout>
      </RequireAuth>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboard/adduser',
        element: <AddUser></AddUser>,
      },
      {
        path: '/dashboard/addproducts',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/dashboard/products',
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export default router;
