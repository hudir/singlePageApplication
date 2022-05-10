fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
      console.log(response.status);
      console.log(response.ok);
      console.log(response.headers);
    
      return response.json()})
  .then((json) => console.log(json))
  .catch(err=>console.log(err));
