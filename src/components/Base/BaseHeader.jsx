import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BaseHeader = ({ showTitle = false, name }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl py-6 flex justify-between">
        <div className="font-bold text-2xl">Cinta Coding</div>
        {showTitle && (
          <h2 className="text-gray-500 border-b-4 text-lg font-semibold self-end pb-1 border-blue-300 h-min px-5">
            Post
          </h2>
        )}
        {name ? (
          <div className="relative font-bold text-xl">
            <span className="text-black">Welcome, </span>
            <button
              onClick={() => setShowPopup(true)}
              className="text-blue-300"
            >
              {name}
            </button>
            {showPopup && (
              <div className="py-2 px-6 w-max bg-white border border-blue-300 rounded-lg absolute -translate-x-1/2 left-1/2">
                <NavLink to="/profile-detail" className="text-sm font-bold">
                  Detail Profile
                </NavLink>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="/login"
            className="bg-blue-600 rounded-full text-white px-8 py-2 font-semibold"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default BaseHeader;
