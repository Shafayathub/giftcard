/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Games from '../Pages/Games';
import Register from '../Pages/Login/Register';
import Login from '../Pages/Login/Login';
import UpdateProfile from '../Pages/Profile/UpdateProfile';
import RequireAuth from '../Components/RequireAuth/RequireAuth';

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
        path: '/games',
        element: <Games></Games>,
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
        path: '/profile',
        element: (
          <RequireAuth>
            <UpdateProfile></UpdateProfile>
          </RequireAuth>
        ),
      },
    ],
  },
]);
export default router;
