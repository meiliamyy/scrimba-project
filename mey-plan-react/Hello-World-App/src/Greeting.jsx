import PropTypes from "prop-types";

function Greeting({ name, age }) {
  const textStyle = {
    color: age < 25 ? "blue" : "red",
  };
  const welcomeMessage = `Hallo selamat datang, ${name}! Umur ${age} tahun `;

  return <h1 style={textStyle}>{welcomeMessage}</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default Greeting;
