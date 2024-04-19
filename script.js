var form = document.getElementById('formin');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var cityw = document.getElementById('city').value;
    // console.log(cityw);


const apiKey = '8d6454a89dff871786a0307b0dbebbee'
async function fetchWeatherData(city) {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
const data=await response.json();
console.log(data)
// console.log(data.main.temp);
    // w=data.main.temp;
    let div=document.getElementById("main");
    div.innerHTML=`${data.main.temp}°C`
    }
fetchWeatherData(cityw);
});
