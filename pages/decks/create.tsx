export default function Create() {
    return (<>

        <div className="container">
            <div className="col">
                <div>
                    <div className= "w-50">
                        <label htmlFor="title" className="form-label"></label>
                        <textarea placeholder="Front" rows="13" id="title" maxLength="200" className='form-control' type='text'></textarea>
                    </div>
                    <div className= "w-50">
                        <label htmlFor="title" className="form-label"></label>
                        <textarea placeholder="Back" rows="13" id="title" maxLength="200" className='form-control' type='text'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>

                </div>
            </div>
        </div>


    </>)
}


  