const fetchProducts = () => {
  fetch('https://fakestoreapi.com/products')
  .then((response) => {
    if (response.ok) {
      return response;
    } else {
      console.error('response.ok:', response.ok);
      console.error('response.status:', response.status);
      console.error('response.statusText', response.statusText);
      throw new Error(response.statusText);
    }
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    return json
  })
  .catch((error) => {
    console.error('Error occured', error);
  })  
}

export default fetchProducts;