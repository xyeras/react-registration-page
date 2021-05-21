import { FormEvent, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Form = () => {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

    return (
      <div id="form">
        <form action="submit" onSubmit={handleSubmit}>
          <div className="form-group row d-flex justify-content-center mt-3">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First name</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                value=""
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
                value=""
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
                value=""
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
                value=""
                placeholder="Password"
                required
                />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <button
              type="button"
              className="col-sm-3 btn btn-primary btn-md btn-block"
              >
                Submit
            </button>
          </div>
        </form>
      </div>
    );
};
  
export default Form;