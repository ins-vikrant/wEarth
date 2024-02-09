const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const ima = document.querySelector('.ima')
const condition = document.querySelector('.condition')
const temp = document.querySelector('.tempres')
const pressure = document.querySelector('.pressure')
const humidity= document.querySelector('.humid')
const hvalue=document.querySelector(".hvalue")
const vvalue=document.querySelector(".vvalue")
const visibility=document.querySelector('.visible')
const windsp = document.querySelector('.windspd');
const cont= document.querySelector(".cont");
const concode=document.querySelector(".concode");
const ft1 = document.querySelector(".ft1");
const ft2 = document.querySelector(".ft2");
const ft3 = document.querySelector(".ft3");
const ft4 = document.querySelector(".ft4");
const icon=document.querySelectorAll(".icon1");
var ctx = document.getElementById('myChart');
const graph=document.querySelector(".graph");
let mychart=null;


let lat;
let lon;
const sr = document.querySelector(".sr");
const tm = document.querySelectorAll(".tm");
const ct =document.querySelector(".ct");
var tme;
var tzone;








async function weather(city){
    
    const key = "f8468975be58837f84e3961225471253";
    const key2 ="4d1b0d5d5e3c46feb5bbec4d961bb37a";
    
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const data = await fetch(`${link}`).then(response => response.json());

if(data.cod===`404`){
    console.log("error")
    document.querySelector(".notfound").classList.remove("hidden")
}else{
    document.querySelector(".notfound").classList.add("hidden")

}

    console.log(data);
lat=data.coord.lat;
document.querySelector(".lat").innerHTML=`lat: ${lat}`;

lon=data.coord.lon;
document.querySelector(".lon").innerHTML=`long: ${lon}`;
cont.src=`https://flagsapi.com/${data.sys.country}/shiny/64.png`;
concode.innerHTML=`${data.sys.country}`

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
document.querySelector(".dat").innerHTML=`${day}/${month}`;
document.querySelector(".dt1").innerHTML=`${day+2}/${month}`;
document.querySelector(".dt2").innerHTML=`${day+3}/${month}`;
document.querySelector(".dt3").innerHTML=`${day+4}/${month}`;


const link2=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key2}`;
const data2= await fetch(`${link2}`).then(response2 => response2.json());
console.log(data2);


humidity.style.paddingTop=`${data.main.humidity*3}px`;
hvalue.innerHTML=`${data.main.humidity}%`

visibility.style.paddingTop=`${data2.list[0].visibility*0.03}px`
vvalue.innerHTML=`${Math.round(data2.list[0].visibility/1000)}km`



const d1=`${(new Date(data2.list[0].dt_txt)).getHours()}:00`
const d2=`${(new Date(data2.list[1].dt_txt)).getHours()}:00`
const d3=`${(new Date(data2.list[2].dt_txt)).getHours()}:00`
const d4=`${(new Date(data2.list[3].dt_txt)).getHours()}:00`
const d5=`${(new Date(data2.list[4].dt_txt)).getHours()}:00`
const d6=`${(new Date(data2.list[5].dt_txt)).getHours()}:00`
const d7=`${(new Date(data2.list[6].dt_txt)).getHours()}:00`
const d8=`${(new Date(data2.list[7].dt_txt)).getHours()}:00`
const d9=`${(new Date(data2.list[8].dt_txt)).getHours()}:00`
const d10=`${(new Date(data2.list[9].dt_txt)).getHours()}:00`
const d11=`${(new Date(data2.list[10].dt_txt)).getHours()}:00`
const d12=`${(new Date(data2.list[11].dt_txt)).getHours()}:00`
const d13=`${(new Date(data2.list[12].dt_txt)).getHours()}:00`

const e1=`${data2.list[0].main.temp - 273.15}`
const e2=`${data2.list[1].main.temp - 273.15}`
const e3=`${data2.list[2].main.temp - 273.15}`
const e4=`${data2.list[3].main.temp - 273.15}`
const e5=`${data2.list[4].main.temp - 273.15}`
const e6=`${data2.list[5].main.temp - 273.15}`
const e7=`${data2.list[6].main.temp - 273.15}`
const e8=`${data2.list[7].main.temp - 273.15}`
const e9=`${data2.list[8].main.temp - 273.15}`
const e10=`${data2.list[9].main.temp - 273.15}`
const e11=`${data2.list[10].main.temp - 273.15}`
const e12=`${data2.list[11].main.temp - 273.15}`
const e13=`${data2.list[12].main.temp -273.15}`

if(mychart!=null){
    mychart.destroy();
}
mychart=  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [d1, d2, d3, d4, d5, d6,d7, d8, d9, d10, d11, d12,d13],
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'black',
        label: 'Temperature',
        data: [e1, e2, e3, e4, e5, e6,e7, e8, e9, e10, e11, e12,e13],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        
                x: {
                    beginAtZero: false,
                   
                    ticks: {
                     color: 'black',   
                    }
                },
                
        y: {
          beginAtZero: false,
          max: 40,
          ticks: {
            stepSize: 10,
            color: 'black',
          }
        }
      }
    }
  });

var a;
var c=0;
var d=0;
function timenow (){
var tnow= new Date(data2.list[0].dt_txt);
var hour=tnow.getHours();
hour=((24 - hour)/3);
if(c>=8){
    hour=c;
}
for(let i=0;i<8;i++){
if((data2.list[hour+i].main.temp)<(data2.list[hour+i+1].main.temp)){
    a=(data2.list[hour+i+1].main.temp);
}else{
    a=(data2.list[hour+i].main.temp);
}
}
d++;
c=hour+8
console.log(data2.list[hour+4].weather[0].main);

return a;
}


var tnow2= new Date(data2.list[0].dt_txt);
var hour2= tnow2.getHours();
hour2=((24 - hour2)/3);

function timenow2(x){
switch(data2.list[hour2+(8*(x+1))-4].weather[0].main){
    case 'Clouds':
icon[x].src="images_2/cloud_icon.png";
break;  
case 'Clear':
icon[x].src="images_2/sunny_icon.png";
break;  
case 'Rain':
icon[x].src="images_2/rain_icon.png";
break;
case 'Clouds':
icon[x].src="images_2/  cloud_icon.png";
break;       

}
};
timenow2(0);
timenow2(1);
timenow2(2);
timenow2(3);

ft1.innerHTML=`${Math.round(timenow()- 273.15)}°C`;
ft2.innerHTML=`${Math.round(timenow()- 273.15)}°C`;
ft3.innerHTML=`${Math.round(timenow()- 273.15)}°C`;
ft4.innerHTML=`${Math.round(data2.list[30].main.temp- 273.15)}°C`;


    temp.innerHTML=`${Math.round(data.main.temp - 273.15)}°C`
    pressure.innerHTML=`${Math.round(data.main.pressure)}`+` `+`Pa`
    condition.innerHTML=`${data.weather[0].main}`
    windsp.innerHTML=`${Math.round(data.wind.speed)}`+` `+`km/h`;


    const timezone = data.timezone;
    console.log(timezone);
 

    function checkMinutes(minutes) {
        if (minutes < 10) {
            return `0${minutes}`;
        } else {
            return minutes.toString();
        }
    }
    
    const sunrise = new Date((((data.sys.sunrise) - 19800) + (timezone)) * 1000);
    const sunset = new Date(((data.sys.sunset - 19800) + (timezone)) * 1000);
    
    const sunriseHours = sunrise.getHours();
    const sunriseMinutes = checkMinutes(sunrise.getMinutes());
    tm[0].innerHTML = `${sunriseHours}:${sunriseMinutes}`;
    
    const sunsetHours = sunset.getHours();
    const sunsetMinutes = checkMinutes(sunset.getMinutes());
    tm[1].innerHTML = `${sunsetHours}:${sunsetMinutes}`;
    


    console.log(`Sunrise: ${sunrise}`);
    console.log(`Sunset: ${sunset}`);

    switch(data.weather[0].main){
        case 'Clouds':
            ima.src = "assets1/cloud.png";
            break;
        case 'Clear':
            ima.src = "assets1/clear.png";
            break;
        case 'Rain':
            ima.src = "assets1/rain.png";
            break;
        case 'Mist':
            ima.src = "assets1/mist.png";
            break;
        case 'Snow':
            ima.src = "assets1/snowfall.png";
            break;
        case 'Haze':
            ima.src = "assets1/haze.png";
            break;
            case 'Smoke':
            ima.src = "assets1/haze.png";
            break;

    }
    console.log(data.weather[0].main)


}



btn.addEventListener('click',()=>{
    weather(search.value);
    humidity.classList.add("hgt")
    ct.innerHTML=search.value;
})


function autochange(){ setTimeout(()=>{
    next.click();
},10000)
}
const output=document.querySelector(".output");











