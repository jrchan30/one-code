import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import BaseHeader from '../components/Base/BaseHeader';
import BackArrow from '../assets/back-arrow.png';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ label, value }) => {
  return (
    <li className="grid grid-cols-12 gap-y-16">
      <div className="col-span-3 font-semibold text-gray-700">{label}</div>
      <div className="col-span-2">:</div>
      <div className="col-span-7 font-bold text-black">{value}</div>
    </li>
  );
};

const ProfileDetail = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="container px-4">
      <BaseHeader showTitle />
      <div className="max-w-lg mx-auto">
        <button className="btn" onClick={navigateBack}>
          <img src={BackArrow} alt="back" width="40" />
        </button>
        <ol className="flex flex-col gap-y-10 mt-8">
          <ListItem label="Username" value={user.username} />
          <ListItem label="Email" value={user.email} />
          <ListItem label="Address" value={user.address?.street} />
          <ListItem label="Phone" value={user.phone} />
        </ol>
      </div>
    </div>
  );
};

export default ProfileDetail;
