// Load environment variables from .env file
// require("dotenv").config();

// Access the API key
// const apiKey = process.env.API_KEY;

// // Use the API key in your code
// console.log(apiKey);

async function getWeather() {
  const API_KEY = process.env.API_KEY; // Ganti dengan API Key-mu
  const CITY = "Jakarta";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    let data = await response.json();
    console.log(`Suhu di ${CITY} saat ini: ${data.main.temp}°C`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getWeather();
