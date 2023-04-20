import { useContext, useEffect, useState } from 'react';
import '../App.css';
import BaseInput from '../components/Base/BaseInput';
import api from '../axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const USERNAME = 'username';
const PASSWORD = 'password';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState();
  const [errorFlag, setErrorFlag] = useState();

  const fetchUsersList = async () => {
    try {
      setLoading(true);
      const res = await api.get('https://jsonplaceholder.typicode.com/users');
      setUsersList(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  const [credentials, setCredentials] = useState({
    [USERNAME]: 'test',
    [PASSWORD]: '',
  });

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorFlag(false);
    const user = usersList.find(
      (user) => credentials.username === user.username
    );

    if (!user) {
      setErrorFlag(true);
      return;
    }

    setUser(user);
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto flex flex-col h-screen justify-center px-4">
      <div className="w-full max-w-sm mx-auto">
        <h3 className="mb-12 font-bold text-lg text-center">Login Page</h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
          <BaseInput
            type="text"
            onChange={handleInput}
            value={credentials.username}
            name={USERNAME}
            placeholder="Username"
            required
            className="invalid:border-red-500"
          />
          <BaseInput
            type="password"
            onChange={handleInput}
            value={credentials.password}
            name={PASSWORD}
            placeholder="Password"
            required
            className="invalid:border-red-500"
          />
          <button
            type="submit"
            className="rounded-full text-white py-2 px-2 bg-blue-400 font-semibold text-lg"
          >
            Login
          </button>
        </form>
        <div className="text-center text-red-400 font-bold ">
          {errorFlag && 'User not found, please try again!'}
        </div>
      </div>
    </div>
  );
};

export default Login;
