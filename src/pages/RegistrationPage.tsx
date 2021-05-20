import Form from '../components/Form';
import SuccessAlert from '../components/SuccessAlert'

const RegistrationPage = () => {

    return (
      <div id="registration-page">
          <h2 className="display-6 text-center my-5">Registration</h2>
          <Form />
          <SuccessAlert/>
      </div>
    );
};
  
export default RegistrationPage;