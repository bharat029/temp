import React from 'react'

const CertificateForm = ({ certi, changeView, add, update }) => {
  const submited = e => {
    e.preventDefault()

    let certificate = {}

    e.target.childNodes.forEach(ele => {
      if(ele.id !== 'submit'){
        certificate[ 'c-' + ele.childNodes[1].id] = ele.childNodes[1].value
      }
    })

    certificate['createdOn'] = new Date()
    
    if(certi){
      update(certificate, certi.id)
    } else {
      add(certificate)
    }

    changeView()
  }

  return (
    <form method="post" onSubmit={submited} className="col-md-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" className="form-control" placeholder="Certificate Title" defaultValue={certi && certi['c-title']} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Description:</label>
        <input type="text" className="form-control" placeholder="Certificate Description" defaultValue={certi && certi['c-desc']} name="desc" id="desc" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ certi ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CertificateForm
