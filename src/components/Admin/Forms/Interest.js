import React from 'react'

const Interest = ({ inte, edits }) => {
  return (
    <form method="post" onSubmit={edits} className="col-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" className="form-control" placeholder="Interest Title" defaultValue={inte && inte['i-title']} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Description:</label>
        <input type="text" className="form-control" placeholder="Interest Description" defaultValue={inte && inte['i-desc']} name="desc" id="desc" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-4">{ inte ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default Interest
