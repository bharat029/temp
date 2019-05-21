import React from 'react'

const Education = ({ education, edits }) => {
  return (
    <form method="post" onSubmit={edits} className="col-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" className="form-control" placeholder="Education Title" defaultValue={education && education['e-title']} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc-1">Description 1:</label>
        <input type="text" className="form-control" placeholder="First Point of Education" defaultValue={education && education['e-desc-1']} name="desc-1" id="desc-1" />
      </div>
      <div className="form-group">
        <label htmlFor="desc-2">Description 2:</label>
        <input type="text" className="form-control" placeholder="Second Point of Education" defaultValue={education && education['e-desc-2']} name="desc-2" id="desc-2" />
      </div>
      <div className="form-group">
        <label htmlFor="desc-3">Description 3:</label>
        <input type="text" className="form-control" placeholder="Third Point of Education" defaultValue={education && education['e-desc-3']} name="desc-3" id="desc-3" />
      </div>
      <div className="form-group">
        <label htmlFor="desc-4">Description 4:</label>
        <input type="text" className="form-control" placeholder="First Point of Education" defaultValue={education && education['e-desc-4']} name="desc-4" id="desc-4" />
      </div>
      <div className="form-group">
        <label htmlFor="desc-5">Description 5:</label>
        <input type="text" className="form-control" placeholder="First Point of Education" defaultValue={education && education['e-desc-5']} name="desc-5" id="desc-5" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-4">{ education ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default Education
