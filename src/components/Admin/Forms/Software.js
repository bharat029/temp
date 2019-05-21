import React from 'react'

const Software = ({ sft, edits }) => {
  return (
    <form method="post" onSubmit={edits} className="col-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="softwareGames">Software/Games:</label>
        <input type="text" className="form-control" placeholder="Add Another Software/Game" defaultValue={sft} name="softwareGames" id="softwareGames" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-4">{ sft ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default Software
