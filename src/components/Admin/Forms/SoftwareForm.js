import React from 'react'

const Software = ({ sft, changeView, add, update }) => {
  const submited = e => {
    e.preventDefault()

    if(sft){
      update({sft: e.target.childNodes[0].childNodes[1].value, createdOn: new Date() }, sft.id)
    } else {
      add({sft: e.target.childNodes[0].childNodes[1].value, createdOn: new Date() })
    }

    changeView()
  }
  
  return (
    <form method="post" onSubmit={submited} className="col-md-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="softwareGames">Software/Games:</label>
        <input type="text" className="form-control" placeholder="Add Another Software/Game" defaultValue={sft.sft} name="softwareGames" id="softwareGames" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ sft ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default Software
