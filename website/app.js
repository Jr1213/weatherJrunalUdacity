// apikey
const apiKey = '38664a81f6d6dc6be443493a8f1e9f71';
// endpoint get url
const allData = 'http://localhost:3030/allData';
const comingData = 'http://localhost:3030/comingData';
//user content
const userFeeling = document.getElementById('feelings');
// data going for the post requst to be sored in the endpoint
let preparedData
// treger the button 
const btn = document.getElementById('generate');
btn.addEventListener('click', () => {
    // geting data from api
    getWeatherInfo(apiKey).then(() => {
        prepareData(data, userFeeling)
        //sending data to backend
        sendData(comingData, preparedData)
        // geting data from endpoint
        // retrving all data
        
    })
    getEndpointData(allData).then(()=>{
        //changing ui
        dynimicUi(endpointData)
    })
})
// api data
let data = '';
// retraving data from api 
const getWeatherInfo = async (apiKey) => {
    const zip = document.getElementById('zip').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
    const res = await fetch(url)
    try {
        data = await res.json();
    } catch (err) {
        console.log(err);
    }

}
let endpointData = '';
// fecting data from endpoint
const getEndpointData = async (allData) => {
    const res = await fetch(allData);
    try {
        endpointData = await res.json();
        console.log(endpointData);
        return endpointData
    } catch (err) {
        console.log(err);
    }
}


// adding post requset to push user data
const sendData = async (url, data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const goingData = await res.json();
        return goingData
    } catch (err) {
        console.log(err);
    }
}


// prepring data before send it to the endpoint

const prepareData = (data, user_data) => {
    let currentDate = new Date();
    let date = `${currentDate.getDate()} / ${currentDate.getMonth()+1} / ${currentDate.getFullYear()} ${currentDate.getHours()} : ${currentDate.getMinutes()}`
    let temp = data.main.temp;
    let content = user_data.value;

    preparedData = {
        date: date,
        temp: temp,
        content: content
    }

}
// assinging the ui
function dynimicUi(data) {
    //getting elements
    const parent = document.querySelector('.dynimic');
    const temp = document.getElementById('temp');
    const content = document.getElementById('content');
    const date = document.getElementById('date');
    //assining values
    parent.style.display = 'flex';
    temp.innerHTML = data.temp;
    console.log(data);
    content.innerHTML = date.content;
    date.innerHTML = data.date
}