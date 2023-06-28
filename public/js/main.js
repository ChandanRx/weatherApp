const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const data_hide = document.querySelector('.data_hide')
const temp_real_val = document.getElementById('temp_real_val')

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === " ") {
    city_name.innerText = `please write something before search`
  } else {

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a09a48dd9afd10b2223bbf827453e11a`
      const response = await fetch(url)
      const arrData = await response.json()
      console.log(arrData);
      city_name.innerText = cityVal;
      temp_real_val.innerText = arrData.main.temp
      //temp_status.innerText =  arrData.weather[0].main
      cityName.innerText = `${arrData.name} , ${arrData.sys.country}`      
      data_hide.style.visibility = 'visible';
    
      
    } catch {
      city_name.innerText=`please enter the city name properly`;
    }

  }

}

submitBtn.addEventListener('click', getInfo)