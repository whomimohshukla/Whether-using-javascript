const API_KEY = "168771779c71f3d64106d8a88376808a";
function renderWeatherInfo(data) {

  let newpara = document.createElement("p");
  newpara.innerText = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newpara);
 
  console.log("mim");
  
}

async function fetchWhether() {
  try {
    let city = "goa";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    renderWeatherInfo(data);

   

  } catch (error) {
    console.log(error);
  }
}
fetchWhether()


async function getCustomWetherdata() {
   try {
    let lat=28.984644
    let lon=77.705956
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    let data= await response.json()
    console.log(data);
    
   } catch (error) {
    console.log("Error:something went wrong");
   }
}
getCustomWetherdata()


