import { useState, useContext, useEffect, FormEvent } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const RegistrationPage = () => {

    const { getUsers, addUser } = useContext(GlobalContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      // getUsers();
    }, [])

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
      event.preventDefault();

      addUser({firstName, lastName, email, password});

      setSuccess(true);
      setTimeout(() => {
      setSuccess(false);
      }, 3000);

    }

    return (
      <div id="registration-page">
          <h2 className="display-6 text-center my-5">Registration</h2>

          <form>
          <div className="form-group row d-flex justify-content-center mt-3">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First name</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                placeholder="First name"
                required
                />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center mt-3">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last name</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                placeholder="Last name"
                required
                />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center mt-3">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                required/>
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center mt-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-4">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
                required
                />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <button
              type="button"
              className="col-sm-3 btn btn-primary btn-md btn-block"
              onClick={handleSubmit}
              >
                Submit
            </button>
          </div>
        </form>

        <div className="row offset-4 mt-3">
          {success ? (
              <div>
                  <div className='col-sm-6 alert alert-success text-center' role='alert'>
                  You've successfully added a new user!
                  </div>
              </div>
          ) : (
              ''
          )}
        </div>

      </div>
    );
};
  
export default RegistrationPage;