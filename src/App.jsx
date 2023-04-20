import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import UserProvider from './context/UserProvider';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
