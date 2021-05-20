const Form = () => {
    return (
      <div id="form">
        <form>
          <div className="form-group row d-flex justify-content-center mt-3">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First name</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
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
                placeholder="Password"
                required
                />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <button type="button" className="col-sm-3 btn btn-primary btn-md btn-block">Submit</button>
          </div>
        </form>
      </div>
    );
};
  
export default Form;