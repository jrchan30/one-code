import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PostDetail from './pages/PostDetail';
import ProfileDetail from './pages/ProfileDetail';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/post-detail/:id',
    element: <PostDetail />,
  },
  {
    path: '/profile-detail',
    element: <ProfileDetail />,
  },
];

export default routes;
