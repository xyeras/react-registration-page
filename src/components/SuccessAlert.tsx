const SuccessAlert = () => {

  return (

      <div className="row d-flex justify-content-center mt-3">
          {/* {success ? (
              <div>
                  <div className='alert alert-success text-center' role='alert'>
                  You've successfully added a new quest!
                  </div>
              </div>
          ) : (
              ''
          )} */}
          <div className='col-sm-4 alert alert-success text-center' role='alert'>
            You've successfully submitted the form!
          </div>
      </div>

  );

}

export default SuccessAlert;