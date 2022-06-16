import SideBar from './Sidebar';
import { Routes, Route } from "react-router-dom"
import { routes } from '../utils/routes';
import PrivateRoute from './PrivateRoute';

function Layout()
{
  return ( 
    <>
      <SideBar />
      <Routes>
        {routes.map((temp, index) => (
          <Route path={temp.path} element={
            <PrivateRoute>
              {temp.component()}
            </PrivateRoute>
          } key={index} />
        ))}
      </Routes>
    </>
   );
}

export default Layout;