import React from 'react';
import { useLocation } from 'react-router-dom';

const DashboardNavbar: React.FC = () => {
  const location = useLocation();

  // Function to convert pathname to a readable page name
  const formatPageName = (pathname: string) => {
    // Remove leading slash and replace dashes or underscores with spaces
    const formatted = pathname.replace(/\/|_/g, ' ').trim();
    // Capitalize the first letter of each word
    return formatted.length ? formatted.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') : 'Home';
  };

  const pageName = formatPageName(location.pathname);

  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              Pages
            </li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">
              {pageName}
            </li>
          </ol>
          <h6 className="font-weight-bolder mb-0">{pageName}</h6>
        </nav>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
