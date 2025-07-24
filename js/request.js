const apiKey = CONFIG.apiKey;
const apiCountryURL = CONFIG.apiCountryURL;
const unsplashKey = CONFIG.unsplashKey;


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElemnt = document.querySelector("#descripition");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");


const setBackgroundImage = async (city) => {
  try {
    const res = await fetch(`https://api.unsplash.com/photos/random?query=${city}&client_id=${unsplashKey}`);
    const data = await res.json();

    if (data && data.urls && data.urls.full) {
      document.body.style.backgroundImage = `url('${data.urls.full}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    } else {
      console.warn("Imagem não encontrada no Unsplash.");
    }
  } catch (error) {
    console.error("Erro ao carregar imagem do Unsplash:", error);
  }
};


const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  
  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};


const showWeatherData = async (city) => {
  const data = await getWeatherData(city);
  if (!data || data.cod === "404") {
    alert("Cidade não encontrada!");
    return;
  }

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElemnt.innerHTML = data.weather[0].description;
  weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

  // ✅ Bandeira atualizada com a API correta
  countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);

  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  weatherContainer.classList.remove("hide");

  // 👇 Muda o fundo com imagem da cidade
  await setBackgroundImage(city);
};


// 🖱️ Clique no botão
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  const city = cityInput.value.trim();
  if (city) showWeatherData(city);
});

// ⌨️ Enter no input
cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value.trim();
    if (city) showWeatherData(city);
  }
});
console.log(data.sys.country);
