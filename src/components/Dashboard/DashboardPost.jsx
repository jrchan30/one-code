import { NavLink } from 'react-router-dom';
import BaseCommentsIcon from '../Base/BaseCommentsIcon';

const DashboardPost = ({ to, title }) => {
  return (
    <NavLink to={to} className="flex gap-x-6">
      <div className="font-extrabold text-lg">Dummy</div>
      <div className="flex flex-col gap-y-2">
        <span>{title}</span>
        <div className="flex gap-x-6 items-center text-blue-300 font-bold ">
          <BaseCommentsIcon />
          <div className="text-sm">Detail</div>
        </div>
      </div>
    </NavLink>
  );
};

export default DashboardPost;
