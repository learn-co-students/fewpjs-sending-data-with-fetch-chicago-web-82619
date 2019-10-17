function submitData( name, email ) {
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name,
      email
    } )
  } 

  return fetch( 'http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(dataObj => {
      document.body.innerHTML = dataObj[ "id" ]
    })
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}