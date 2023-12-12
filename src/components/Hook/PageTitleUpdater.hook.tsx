import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname.substring(1); // remove the leading slash
    if (route === '') {
      document.title = 'GIT | Home';
    } else {
      document.title = `GIT | ${capitalizeFirstLetter(route)}`;
    }
  }, [location]); // re-run this effect if the location changes

  return null; // this component doesn't render anything
}