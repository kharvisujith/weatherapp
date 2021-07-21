const API_key= "d9b4ccd1aea2a04b837a859df0d7e48f"
const search_field = document.getElementById('search_bar')
const search = document.getElementById('btn_search')
const output = document.getElementById("output-div")

const city_field = document.getElementById("city_country")
const temp = document.getElementById("temp")
const temp_logo = document.getElementById("temp_logo")


const getinput =()=>{
    const city_name = search_field.value
    
    if(city_name === ''){
        city_field.innerText= "Please enter city  before search" 
    }
    else {
    search_field.value = ''
    getdata(city_name)
    }

}

search.addEventListener("click", getinput)


const getdata = async (city) =>{
    
    try{
    output.style.visibility="visible"
    resp =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`)
    const rest = await resp.json()
    const result = [rest]
    const cityname = result[0].name
    const country = result[0].sys.country
    const temperature = result[0].main.temp
    const tempmode = result[0].weather[0].main 
    
   


    city_field.innerText = `${cityname}, ${country}`
    temp.innerText = `${temperature}°C`
    if(tempmode === "Rain"){
        temp_logo.innerHTML ="<i class='fas fa-cloud-rain' style='color : #a4b0be'></i>"
    }
    else if (tempmode === "Clear"){
       temp_logo.innerHTML = "<i class='fas fa-sun'  style='color : #eccc68'></i>"
    }
    else if (tempmode === "Clouds"){
        temp_logo.innerHTML = "<i class='fas fa-cloud'  style='color : #f1f2f6'></i>"

    }
    else {
        temp.logo.innerHTML =  "<i class='fas fa-cloud'  style='color : #f1f2f6'></i>"
    }
    }
    catch(err){
        output.style.visibility="hidden";
        city_field.innerText= "Please enter proper city name" 

    }
}
