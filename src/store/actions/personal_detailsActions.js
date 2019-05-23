export const updatePersonalDetails = (details) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('personal_details').doc("ipxdbe5N2ukqrEtaPffY").update({ ...details })
  }
}
  