import { Switch, Route } from 'react-router-dom';
// Page Components
import RegistrationPage from '../pages/RegistrationPage';
// Components
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact component={RegistrationPage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;