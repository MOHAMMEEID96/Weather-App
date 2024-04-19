const formcity = document.querySelector('.change-location')
const formimage = document.querySelector('.card')
const formdetails = document.querySelector('.details')
const dayimg = document.querySelector('.time')
const imgicon = document.querySelector('.icon img')

const FORCAST = new forcast() 
const updateUI = (result)=>{
    const cityname = result.cityname
    const cityweather = result.cityweather;
    // update ui of the app
    formdetails.innerHTML=`
    <h5 class="my-3">${cityname.EnglishName}</h5>
    <div class="my-3">${cityweather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${cityweather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
`; 
    // put image day or night
    let iconimg = `img/${cityweather.WeatherIcon}.svg`
    imgicon.setAttribute('src',iconimg)

    //remove or put the block
    if(formimage.classList.contains('d-none')){
        formimage.classList.remove('d-none')
    }
    // put image icon
    let timesrc =cityweather.IsDayTime? 'img/day.svg':'img/night.svg'
    dayimg.setAttribute('src',timesrc)
}

formcity.addEventListener('submit',e=>{
    e.preventDefault()
    const city = formcity.city.value.trim();
    formcity.reset()
    
    FORCAST.updatecity(city)
    .then(result=> updateUI(result))
    .catch(err=> console.log(err))
    // localstorage the city
    localStorage.setItem('city',city)
    
})

