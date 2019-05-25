import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addInterest, updateInterest, deleteInterest } from '../../../store/actions/cvActions'
import InterestForm from '../Forms/InterestForm'

class InterestListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       inte: null
    }
  } 

  changeView = () => {
    this.setState({
      ListView: true
    })
  }

  add = e => {
    this.setState({
      ListView: false,
      inte: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      inte: this.props.interests[e.target.id]
    })
  }

  render() {
    const {interests, addInterest, updateInterest, deleteInterest} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul className="list-unstyled">
            {
                interests 
                ? interests.map((interest, idx) => <li key={interest.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ interest['i-title'] }</span><button onClick={(e) => deleteInterest(e.target.id)} id={interest.id} className="btn btn-danger">Delete</button></li>) 
                : <p key="loadinginte">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6">Add</button>
        </>
        : <InterestForm inte={this.state.inte} changeView={this.changeView} add={addInterest}  update={updateInterest}  /> 
      }
      </>
    )
  }
}

const mapStateToProp = (state) => {
    return {
        interests: state.firestore.ordered.interest
    }
  }
  
  const mapDispatchToProp = dispatch => {
    return {
        addInterest: (inte) => dispatch(addInterest(inte)),
        updateInterest: (inte, idx) => dispatch(updateInterest(inte, idx)),
        deleteInterest: (idx) => dispatch(deleteInterest(idx))
    }
  }
  
  export default compose(
    connect(mapStateToProp, mapDispatchToProp),
    firestoreConnect([
      { collection: 'interest', orderBy: ['createdOn', 'desc'] }
    ])
  )(InterestListView)
  