import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { sun, kishu} from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
  return (
    <div className={`${isActive && isActive === name } ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
      <span className="inline-flex justify-center items-center">
        {isActive ? (
          <div>
            <img src={imgUrl} alt="fund_logo" className="inline-flex ml-3" />
            <span className="ml-5 text-sm tracking-wide truncate">{name}</span>
          </div>
        ) : (
          <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
        )}
      </span>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('Home');

  const renderNavLinks = () => {
    return navlinks.map((link, index) => (
      <li key={index}>
        <Icon
          key={link.id}
          {...link}
          isActive={isActive}
          name={link.name}
          styles="relative flex flex-row items-center h-11 focus:outline-none  text-gray-100 hover:text-gray-400 border-l-2 border-transparent hover:border-indigo-500 pr-6"
          handleClick={() => {
            if (!link.disabled) {
              setIsActive(link.name);
              navigate(link.link);
            }
          }}
        />
      </li>
    ));
  };

  return (
    <div className=" flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <div className=" min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-g[white] text-[white]">
        <div className="fixed flex flex-col top-5 ml-5 bottom-5 w-80 bg-[#1c1c24] rounded-xl">
          <div className="flex items-center justify-center h-14 mt-10 ml-5">
            <Link to="/">
              <img src={kishu} alt="logo" className="w-40 h-auto" />
            </Link>
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow mt-20 ml-5">
            <ul className="flex flex-col py-4 space-y-1">{renderNavLinks()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
