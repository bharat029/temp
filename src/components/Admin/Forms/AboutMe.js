import React from 'react'

const AboutMe = ({ abtme, edits }) => {
  return (
    <form method="post" onSubmit={edits} className="col-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="inputText">About Me:</label>
        <input type="text" className="form-control" placeholder="Add About Me" defaultValue={abtme} name="inputText" id="inputText" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-4">{ abtme ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default AboutMe
