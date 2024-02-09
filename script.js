const top1 =document.querySelector(".top1");


var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto", 
    coverflowEffect: {     
        rotate: 0,
        stretch: 80,        
        depth: 350,
        modifier: 1,
        slideShadows: true, 
    },
    on: {
        click: function(event) {
            swiper.slideTo(this.clickedIndex); 
        }
    },
});




const key3="a1629a7184df4397a27f57c92196ce5a";


//I have to comment it to chow something in news section, it is completely working.

/*async function fun(){
    link2=`https://newsapi.org/v2/top-headlines?q=weather&apiKey=2c0cb63cb6014f61bbeb7da339dff8c2`
    link3=`https://newsapi.org/v2/top-headlines?q=climate&apiKey=2c0cb63cb6014f61bbeb7da339dff8c2`
const response =await fetch(`${link2}`);
const data = await response.json();

const response3 =await fetch(`${link3}`);
const data3 = await response3.json();

console.log(data);
document.querySelector(".nh1").innerHTML=data3.articles[0].title;
document.querySelector(".nc1").innerHTML=data3.articles[0].description;
document.querySelector(".nh2").innerHTML=data.articles[0].title;
document.querySelector(".nc2").innerHTML=data.articles[0].description;
document.querySelector(".nh3").innerHTML=data3.articles[1].title;
document.querySelector(".nc3").innerHTML=data3.articles[1].description;


}
fun();*/

const next = document.querySelector(".next");
next.addEventListener('click', ()=>{
    swapnext();
})

const functioning=document.querySelectorAll(".item")

function swapnext(){
functioning[4].innerHTML=functioning[0].innerHTML;
functioning[0].innerHTML=functioning[1].innerHTML;
functioning[1].innerHTML=functioning[2].innerHTML;
functioning[2].innerHTML=functioning[3].innerHTML;
functioning[3].innerHTML=functioning[4].innerHTML;
}

const previous = document.querySelector(".previous");
previous.addEventListener('click', ()=>{
    swappre();
})


function swappre(){
functioning[4].innerHTML=functioning[3].innerHTML;
functioning[3].innerHTML=functioning[2].innerHTML;
functioning[2].innerHTML=functioning[1].innerHTML;
functioning[1].innerHTML=functioning[0].innerHTML;
functioning[0].innerHTML=functioning[4].innerHTML;
};



const temp=document.querySelector(".temp")
const condition=document.querySelector(".condition");
const humidity=document.querySelector(".humidity");
const windspeed=document.querySelector(".windspeed");
const lat=document.querySelector(".lat");
const lon=document.querySelector(".lon");
const key = "f8468975be58837f84e3961225471253";
const ctname=document.querySelector(".name");
async function climate(ct){
    
const link = `https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=${key}`;
const data= await fetch(`${link}`).then(result=>result.json());
console.log(data); 
temp.innerHTML=`${Math.round(data.main.temp - 273.15)}°C`
condition.innerHTML=`${data.weather[0].main}`
windspeed.innerHTML=`${Math.round(data.wind.speed)}`+` `+`km/h`;
humidity.innerHTML=`Humidity: `+`${Math.round(data.main.humidity)}`+`%`;
lat.innerHTML=`Lat: `+` `+`${Math.round(data.coord.lat)}`+` `+` `;
lon.innerHTML=`Long: `+` `+`${Math.round(data.coord.lon)}`
}
climate(ctname.innerHTML);



swiper.on('slideChange', function () {
    const activeSlideIndex = swiper.activeIndex;
    console.log("Active Slide Index:", activeSlideIndex);
  const current=document.querySelectorAll(".titl");
  ctname.innerHTML= current[activeSlideIndex].textContent;
  climate(ctname.textContent);
  const photo = document.querySelector(".photo2"); 
  const slide_image=document.querySelectorAll(".slide_image");
  console.log("working");
  photo.src = slide_image[activeSlideIndex].src;
  });
  