

let blockSlider = document.querySelector('.project-items');

blockSlider.addEventListener('click', (i)=>{
if(i.target.classList.contains("open")){
    console.log(i.target.tagName);
    i.target.previousElementSibling.style.display = "flex";
    i.target.style.display = "none";
  }
  if(i.target.classList.contains('close')){
    console.log(i.target.tagName);
 i.target.parentElement.style.display = "none";
 i.target.parentElement.nextElementSibling.style.display = "block";
  }
})
// 


let pre = document.querySelector('#preSlide');
let next = document.querySelector('#nextSlide');
let slider = document.querySelector('.slider-line');
var count = 0;



setTimeout(
    ()=>{
        
        slider.style.backgroundImage = `url(${database[count]})`;
        console.log(1);
    },
    100
);
next.addEventListener('click', () =>{
    if(count == database.length-1){
        count=0
        slider.style.backgroundImage = `url(${database[count]})`;
        // console.log(count);
    }

    else{
        count++
        // console.log(count);
        slider.style.backgroundImage = `url(${database[count]})`;
    }
});
pre.addEventListener('click', ()=>{
    if(count == 0) {
        count =database.length
        //  console.log(count);
        slider.style.backgroundImage = `url(${database[count]})`;
    }
    if(count <= database.length) {
        count--
        // console.log(count);
        slider.style.backgroundImage = `url(${database[count]})`;
    }
});

function btnSlider(){
    document.querySelector('#indicator').innerHTML = " ";
for(let i = 0; i < database.length; i++) {
        let btn = document.createElement('button');
        btn.setAttribute('name', i)
        document.querySelector('#indicator').appendChild(btn);
        setInterval(()=>{
            for( let a =1; a<database.length; a++){
              
                if(btn.name == count) {
                    btn.style.background ="#ffffff";
                    btn.style.outline = "3px solid #D0B07C";
                    
                }
                if (btn.name !=count) {
                    let width =12;
                    btn.style.background ="#D0B07C";
                    btn.style.width = `${width}px`;
                    btn.style.outline = "none";
                }
            }
        },100)
    }
}
btnSlider();
function oneSl(){
    database = firstSlider;
    slider.style.backgroundImage = `url(${database[count]})`;
    btnSlider();
}
function twoSl(){
  database = twoSlider;
  slider.style.backgroundImage = `url(${database[count]})`;
  btnSlider();
  console.log(111);
}

function threeSl(){
  database = threeSlider;
  slider.style.backgroundImage = `url(${database[count]})`;
  btnSlider();
}
function fourSl(){
database = fourSlider;
slider.style.backgroundImage = `url(${database[count]})`;
btnSlider();
}
function fiveSl(){
  database = fiveSlider;
  slider.style.backgroundImage = `url(${database[count]})`;
  btnSlider();
}
function sixSl(){
  database =sixSlider;
  slider.style.backgroundImage = `url(${database[count]})`;
  btnSlider();
}
function sevenSl(){
database = sevenSlider;
slider.style.backgroundImage = `url(${database[count]})`;
btnSlider();
}
function eigthSl(){
  database = eigthSlider;
  slider.style.backgroundImage = `url(${database[count]})`;
  btnSlider();
}
function nineSl(){
  database = nineSlider;
  slider.style.backgroundImage = `url(${database[count]})`;
  btnSlider();
}






















// let slider =document.querySelector('.slider-line')
// var count = 0;

// setInterval(
//     ()=>{
//      slider.style.backgroundImage = `url(${database[count]})`;
//     console.log(111);}, 100
//      );

// var pre = document.querySelector('#preSlide');
// var next = document.querySelector('#nextSlide');
// next.addEventListener('click', () =>{
//     if(count == database.length-1){
//         count=0
//         slider.style.backgroundImage = `url(${database[count]})`;
//         // console.log(count);
//     }

//     else{
//         count++
//         // console.log(count);
//         slider.style.backgroundImage = `url(${database[count]})`;
//     }
// });
// pre.addEventListener('click', ()=>{
//     if(count == 0) {
//         count =database.length
//         //  console.log(count);
//         slider.style.backgroundImage = `url(${database[count]})`;
//     }
//     if(count <= database.length) {
//         count--
//         // console.log(count);
//         slider.style.backgroundImage = `url(${database[count]})`;
//     }
// });

// function btnSlide (){
//     // document.querySelector('#indicator').innerHTML = ' ';
//     for(let i = 0; i < database.length; i++) {
          
//             let btn = document.createElement('button');
//             btn.setAttribute('name', i)
//             document.querySelector('#indicator').appendChild(btn);
//             setInterval(()=>{
//                 for( let a =1; a<database.length; a++){
                  
//                     if(btn.name == count) {
//                         btn.style.background ="#ffffff";
//                         btn.style.outline = "3px solid #D0B07C";
                        
//                     }
//                     if (btn.name !=count) {
//                         let width =12;
//                         btn.style.background ="#D0B07C";
//                         btn.style.width = `${width}px`;
//                         btn.style.outline = "none";
//                     }
//                 }
//             },100)
//         }
// }
// btnSlide();



























// // 
// var firstSlider=[
//     './image/placeOneImg.png',
//     './image/placeTwoSlide.png',
//     './image/placeThreeSlide.png',
//     './image/placeFourSlide.png',
//     './image/placeFiveSlide.png',
// ]

// var twoSlider = [
//     './image/сок1.png',
//     './image/сок2.png',
//     './image/сок3.png',
//     './image/сок4.png',
//     './image/сок5.png',
// ]
// var threeSlider = [
//     './image/image 182.png',
//     './image/image 183.png',
//     './image/image 184.png',
//     './image/image 185.png',
//     './image/image 186.png',
// ]
// var fourSlider = [
// './image/1пр.png',
// './image/2пр.png',
// './image/3пр.png',
// './image/4пр.png',
// ]
// var fiveSlider =[
//     './image/таб6.png',
//     './image/таб5.png',
//     './image/таб4.png',
//     './image/таб3.png',
//     './image/таб2.png',
//     './image/таб7.png',
//     './image/таб1.png',
// ]
// var sixSlider =[
//     './image/11.png',
//     './image/12.png',
//     './image/13.png',
//     './image/14.png',
//     './image/15.png',
//     './image/16.png',
// ]
// var sevenSlider = [
//     './image/21.png',
//     './image/22.png',
//     './image/23.png',
//     './image/24.png',
//     './image/25.png',
//     './image/26.png',
//     './image/27.png',
//     './image/28.png',
// ]
// var eigthSlider = [
//     './image/31.png',
//     './image/33.png',
//     './image/32.png',
//     './image/34.png',
//     './image/35.png',
//     './image/36.png',
//     './image/37.png',
// ]
// var nineSlider = [
//     './image/48.png',
//     './image/41.png',
//     './image/42.png',
//     './image/43.png',
//     './image/44.png',
//     './image/45.png',
//     './image/46.png',
//     './image/47.png',
// ]
// var database = [
//     './image/placeOneImg.png',
//     './image/placeTwoSlide.png',
//     './image/placeThreeSlide.png',
//     './image/placeFourSlide.png',
//     './image/placeFiveSlide.png',
// ]
// 



