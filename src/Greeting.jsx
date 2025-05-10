function Greeting(props) {
  // write the logic here to receive the props
  
  const {age,occupation} = props;

  const name = "Jasbir"; 
  return <h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation}</h1>;
}

export default Greeting;
