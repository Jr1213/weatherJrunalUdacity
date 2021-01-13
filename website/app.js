// apikey
const apiKey = '38664a81f6d6dc6be443493a8f1e9f71';
// endpoint get url
const allData = 'http://localhost:3030/allData'
// treger the button 
const btn = document.getElementById('generate');
btn.addEventListener('click', () => {
    // geting data from api
    getWeatherInfo(apiKey)
    // geting data from endpoint
    getEndpointData(allData)
})
// api data
let data = '';
let endpointData = '';
// retraving data from api 
const getWeatherInfo = async (apiKey) => {
    const zip = document.getElementById('zip').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
    const res = await fetch(url)
    try {
        data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// fecting data from endpoint
const getEndpointData = async (allData)=>{
    const res = await fetch(allData);
    try{
        endData = await res.json();
        console.log(endData);
    } catch(err) {console.log(err);}
} 