export default function Create() {
    return (<>

        <div className="container">
            <div className="row justify-content-end">
                
              <div className="col-4">
                <div>
                    <div className= "w-100">
                        <label htmlFor="title" className="form-label"></label>
                        <textarea className= "chang-cool" placeholder="Front" rows="13" id="title" maxLength="200" className='form-control' type='text'>.bg-light</textarea>
                    </div>
                    <div className= "w-100">
                        <label htmlFor="title" className="form-label"></label>
                        <textarea placeholder="Back" rows="13" id="title" maxLength="200" className='form-control' type='text'>.bg-light</textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>

                </div>
            </div>
            </div>
        </div>


    </>)
}


  