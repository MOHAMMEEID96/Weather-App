class forcast{
    constructor(){
        this.weatherKey = '95VLMNmyDAvse1jTEevG2BcIh8iBLAYS';
        this.wetherUrl ='http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityLocation = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updatecity(city){
        const cityname = await this.getcity(city)
        const cityweather = await this.getcityweather(cityname.Key)
        return{cityname,cityweather};
    }
     async getcity(city){
        const base = `?apikey=${this.weatherKey}&q=${city}`;
        const response = await fetch( this.cityLocation + base)
        const result = await response.json()
        return(result[0])
    }
    async getcityweather(id){
        const base =`${id}?apikey=${this.weatherKey}`
        const response = await fetch(this.wetherUrl+base)
        const result = await response.json()
        return(result[0])
    }
}
  
