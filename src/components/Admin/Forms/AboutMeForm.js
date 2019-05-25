import React from 'react'

const AboutMeForm = ({ abtme, changeView, add, update }) => {
  const submited = e => {
    e.preventDefault()

    if(abtme){
      update({abtme: e.target.childNodes[0].childNodes[1].value, createdOn: new Date() }, abtme.id)
    } else {
      add({abtme: e.target.childNodes[0].childNodes[1].value, createdOn: new Date() })
    }

    changeView()
  }

  return (
    <form method="post" onSubmit={submited} className="col-md-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="inputText">About Me:</label>
        <input type="text" className="form-control" placeholder="Add About Me" defaultValue={abtme && abtme.abtme} name="inputText" id="inputText" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ abtme ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default AboutMeForm
