import Users from '../components/Users';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';

export const routes = [
  {
    path: '/users',
    component: () => <Users />
  },
  
  {
    path: '/dashboard',
    component: () => <Dashboard />
  },
  
  {
    path: '/settings',
    component: () => <Settings />
  }
]