function Greeting(props) {
  // write the logic here to receive the props
  
  const {name,age,occupation} = props;
  return <h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation}</h1>;
}

export default Greeting;
