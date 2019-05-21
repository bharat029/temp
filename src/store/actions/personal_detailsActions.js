export const updatePersonalDetails = (details) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('personal_details').doc("lE3v2t3lrWU24ji6lRqM").update({ ...details })
  }
}
  