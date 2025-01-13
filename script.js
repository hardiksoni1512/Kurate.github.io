const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)






 
 var mover=document.getElementById("cMover");
 var content2nd=document.getElementById("content2nd");
 var currentXPosition=0;
 var currentYPosition=0;
 window.onload = function() {
     window.scrollTo(0, 0);
     
   };
 
   window.addEventListener('load', function() {
    // Get a reference to the video element
    var video = document.getElementById('workingvideo');

    // Ensure the video is muted for autoplay to work reliably
    video.muted = true;

    // Play the video once it's loaded and ready
    video.addEventListener('loadedmetadata', function() {
        video.play();
    });

    // Restart the video when it ends to create an infinite loop
    video.addEventListener('ended', function() {
        video.currentTime = 0; // Rewind to the beginning
        video.play();
    });
});

 
 
 
   window.addEventListener('load', function() {
     // Check if the entry div has been displayed previously
     const entryDisplayed = localStorage.getItem('entryDisplayed');
     
     // If it hasn't been displayed, show the entry div and set the flag in local storage
     if (!entryDisplayed) {
         showEntryDiv();
         localStorage.setItem('entryDisplayed', 'true');
     }
 });
 /* Developed by Amresh kumar roy Github -: https://github.com/amreshkumar-web?tab=repositories */
 function showEntryDiv() {
     // Code to show the entry div
     document.getElementById('entry').style.display = 'flex';
     
     // After 1 second, start the animation
     setTimeout(function() {
         document.getElementById('entry').style.animation = 'moveon 1s ease-in-out forwards';
     }, 1000);
 }
 
   window.addEventListener('load', function() {
     // After window loads, set the display of the element with id 'entry' to 'none' after 1 second
     setTimeout(function() {
         document.getElementById('entry').style.display = 'none';
     }, 3500); // 1000 milliseconds = 1 second
 });
 
  
   function viewmore() {
     var btn = document.getElementById("viewmorebtn");
     var isVisible = btn.innerHTML === "View more";
    if(window.innerWidth>=1270){
     if(btn.style.position=="static"){
         btn.style.position="absolute";
     }
     else{
         btn.style.position="static";
     }
    }
    else{
     btn.style.position="absolute";
    }
     if (isVisible) {
         btn.innerHTML = "View less";
         for (let i = 9; i <= 21; i++) {
             document.getElementById('pro' + i).style.display = 'block';
         }
         multiProjects.forEach(function(project) {
             project.style.height = 'auto';
         });
     } else {
         btn.innerHTML = "View more";
         for (let i = 10; i <= 21; i++) {
             document.getElementById('pro' + i).style.display = 'none';
         }
         multiProjects.forEach(function(project) {
             project.style.height = '0';
         });
     }
 }
 
 /* Developed by Amresh kumar roy Github -: https://github.com/amreshkumar-web?tab=repositories */
   
 
 /* var frontContent=document.getElementById("grad2") */
 /* var fc=document.getElementById("frontContent") */
 /* var phoneImg=document.getElementById("phoneImg") */
 /* const mouseMove = (event) => {
     const moverRect = mover.getBoundingClientRect();
     currentXPosition = (event.clientX) + scrollX - moverRect.width / 2;
     currentYPosition = (event.clientY) + scrollY - moverRect.height / 2;
    /*  console.log(currentXPosition,currentYPosition) 
     mover.style.transition="0.3s ease-out"
     mover.style.top = currentYPosition + "px";
     mover.style.left = currentXPosition + "px";   
 }
 window.addEventListener('mousemove' , mouseMove); */
 /* Developed by Amresh kumar roy Github -: https://github.com/amreshkumar-web?tab=repositories */
 //for computing fontSize
 /* function getComputedStyleValue(element, property) {
     return window.getComputedStyle(element, null).getPropertyValue(property);
 }
 const computedFontSize = parseFloat(getComputedStyleValue(frontContent, 'font-size')); */
 // computing end
 
 
 window.addEventListener('scroll',() => {
     let value=window.scrollY;
     var bgScroll = value / 5; // Adjust the divisor for a smoother or faster effect
     /* document.querySelector('.mars').style.backgroundPositionY = bgScroll + 'px'; */
     const svg = document.querySelector('svg');
 /* Developed by Amresh kumar roy Github -: https://github.com/amreshkumar-web?tab=repositories */
 // Select SVG text elements within the SVG element
 const svgTextElements = svg.querySelectorAll('text');
     let sValue=1.3-(value)/(window.innerHeight);
     /* console.log(value); */
     let nvalue=(value*5)/(window.innerHeight);
     
    
     console.log(value)
     
     if(value>200){
         document.getElementById("zoom2").style.scale=`${nvalue}`
         document.getElementById("zoom2").marginLeft=`${nvalue*50}px`
     }
     else{
         document.getElementById("zoom2").style.scale="1"
     }
 
     /* if (value > 2080) {
         document.getElementById('imgSec').style.animation = 'scrollAnimation 15s linear infinite';
         document.getElementById('imgSec2').style.animation = 'scrollAnimation 15s linear infinite reverse';
     } */
    /*  if(nvalue>4.5){
         document.getElementById("navbarOption").style.color="black";
         document.getElementById("navbarOption").style.backgroundColor="rgba(0, 0, 0, 0.089)";
         /* document.getElementById("c2nd").style.overflowY="scroll" 
     }
     else {
         document.getElementById("navbarOption").style.color="white";
         document.getElementById("navbarOption").style.backgroundColor="rgba(0, 0, 0, 0.089)";
        
         /* document.getElementById("c2nd").style.overflowY="hidden" 
     } */
 
 
 /* for navabar transition */
 var headElement = document.getElementById("head");
 var paraElement = document.getElementById("para");
 var btnElement = document.getElementById("btn");
 var headElement2 = document.getElementById("head2");
 var paraElement2 = document.getElementById("para2");
 var btnElement2 = document.getElementById("btn2");
 if (nvalue > 2) {
     headElement.style.transition = "opacity 1.5s ease-in-out, margin-top 1s ease-in-out";
     headElement.style.marginTop = "0";
     headElement.style.opacity = "1";
 }
 
 if (nvalue > 2.5) {
     
     paraElement.style.transition = "opacity 1.5s ease-in-out, margin-top 1s ease-in-out";
     paraElement.style.marginTop = "0";
     paraElement.style.opacity = "1";
 }
 
 if (nvalue > 3) {
     
     btnElement.style.transition = "opacity 1.5s ease-in-out, margin-top 1s ease-in-out";
     btnElement.style.marginTop = "0";
     btnElement.style.opacity = "1";
 }
 if(nvalue<2.2){
     btnElement.style.marginTop = "5%";
     btnElement.style.opacity = "0";
     paraElement.style.marginTop = "10%";
     paraElement.style.opacity = "0";
     headElement.style.marginTop = "30%";
     headElement.style.opacity = "0";
 }
 if(nvalue<11){
     paraElement2.style.marginTop = "10%";
     paraElement2.style.opacity = "0";
     headElement2.style.marginTop = "30%";
     headElement2.style.opacity = "0";
 }
 if (nvalue > 11) {
     headElement2.style.transition = "opacity 1.5s ease-in-out, margin-top 1s ease-in-out";
     headElement2.style.marginTop = "0";
     headElement2.style.opacity = "1";
 }
 if (nvalue > 11.5) {
     
     paraElement2.style.transition = "opacity 1.5s ease-in-out, margin-top 1s ease-in-out";
     paraElement2.style.marginTop = "0";
     paraElement2.style.opacity = "1";
 }
 
 if (nvalue > 13) {
     
     btnElement2.style.transition = "opacity 1.5s ease-in-out, margin-top 1s ease-in-out";
     btnElement2.style.marginTop = "0";
     btnElement2.style.opacity = "1";
 }
 
 
 
 
 
 
 
     /* if(nvalue>0 && ((value)/(window.innerHeight)+0.8)<1.9){
         
         
         frontContent.style.fontSize=`${(nvalue*5)+(computedFontSize-3)}px` 
     }if(nvalue<1.2){
         frontContent.style.fontSize=`${computedFontSize}`
     } */
    /*  if(value>50 ){
        /*  document.getElementById("planet").style.top=`${value+300}px` 
         fc.style.marginTop=`-${value}px`
       
           /*   document.getElementById("planet").style.width=`${value+400}px` 
     } */
 
 
 
     //autoscrolling
     if(nvalue>5.3){
         document.getElementById("slider1").style.transition="margin-top 2s ease-in-out , opacity 3s ease-in-out";
         document.getElementById("slider1").style.marginTop="0";
         document.getElementById("slider1").style.opacity="1"
         document.getElementById("slider0").style.transition="margin-top 1.5s ease-in-out , opacity 3s ease-in-out";
         document.getElementById("slider0").style.marginTop="0";
         document.getElementById("slider0").style.opacity="1"
     }
     else{
        
         document.getElementById("slider1").style.marginTop="200%";
         document.getElementById("slider1").style.opacity="0"
         document.getElementById("slider0").style.marginTop="200%";
         document.getElementById("slider0").style.opacity="0"
     }
    /* if(nvalue>13.5){ 
    /*  document.getElementById("card1").style.transition="1s ease-in-out" 
     document.getElementById("card2").style.transition="1s ease-in-out"
     document.getElementById("card3").style.transition="1s ease-in-out"
     document.getElementById("card4").style.transition="1s ease-in-out"
    /*  document.getElementById("card1").style.opacity="1" 
     document.getElementById("card2").style.opacity="1"
     document.getElementById("card3").style.opacity="1"
     document.getElementById("card4").style.opacity="1"
    } */
 
 
 /* Developed by Amresh kumar roy Github -: https://github.com/amreshkumar-web?tab=repositories */
    //project page
   
   
    
 })
  
 
 
 
 
 /* var content2ndm= document.querySelector('.content2nd');
 var ch2 = document.querySelector('.ch2');
 var c3=document.getElementById("ch3");
 var c4=document.getElementById("ch4") */
 
 /* content2ndm.addEventListener('scroll', function() {
     var scrollTop = content2ndm.scrollTop;
     console.log(scrollTop);
     var blurValue = scrollTop / 50; // Adjust the value to control the blur intensity
     var scaleValue = 1 - (scrollTop / content2ndm.clientHeight); // Adjust the value to control the scale factor
 
     // Apply blur and scale transformation
     ch2.style.filter = `blur(${blurValue}px)`;
     ch2.style.transform = `scale(${scaleValue})`;
 
     if(scrollTop>276){
         ch3.style.filter = `blur(${blurValue-276}px)`;
         ch3.style.transform = `scale(${scaleValue+1})`;
     }
     
     ch4.style.filter = `blur(${blurValue-300}px)`;
     ch4.style.transform = `scale(${scaleValue+2})`;
     
     console.log(scrollTop);
 }); */
 
 /* Developed by Amresh kumar roy Github -: https://github.com/amreshkumar-web?tab=repositories */

 let movement=[];
 function homelogo(){
     document.getElementById("homepart").style.display="block";
     document.getElementById("projectpart").style.display="none";
     document.getElementById("servicepart").style.display="none";
     document.getElementById("aboutpart").style.display="none";
     document.getElementById("contactpart").style.display="none";
     document.getElementById('menu-toggle').checked = false;
     document.getElementById('serviceBtn').style.border = "none";
     document.getElementById('contactBtn').style.border = "none";
     document.getElementById('aboutBtn').style.border = "none";
     document.getElementById('projectBtn').style.border = "none";

     window.scrollTo(0, 0); 
     movement.push("homelogo()")
     console.log(movement);
     AOS.refresh();
 }
 function project(){
     document.getElementById("projectpart").style.display="block";
     document.getElementById("homepart").style.display="none";
     document.getElementById("servicepart").style.display="none";
     document.getElementById("aboutpart").style.display="none";
     document.getElementById("contactpart").style.display="none";
     document.getElementById('menu-toggle').checked = false;
     
 
     document.getElementById('serviceBtn').style.border = "none";
     document.getElementById('contactBtn').style.border = "none";
     document.getElementById('aboutBtn').style.border = "none";
     document.getElementById('projectBtn').style.border = "2px";
     document.getElementById('projectBtn').style.borderBottom = "#a780cf solid";
     movement.push("project()")
     console.log(movement);
     window.scrollTo(0, 0); 
     AOS.refresh();
 }
 function service(){
     document.getElementById("homepart").style.display="none";
     document.getElementById("projectpart").style.display="none";
     document.getElementById("servicepart").style.display="block";
     document.getElementById("aboutpart").style.display="none";
     document.getElementById("contactpart").style.display="none";
     document.getElementById('menu-toggle').checked = false;
     
 
     document.getElementById('projectBtn').style.border = "none";
     document.getElementById('contactBtn').style.border = "none";
     document.getElementById('aboutBtn').style.border = "none";
     document.getElementById('serviceBtn').style.border = "2px";
 document.getElementById('serviceBtn').style.borderBottom = "#a780cf solid";
 movement.push("service()")
 console.log(movement);
     window.scrollTo(0, 0); 
     AOS.refresh();
 }
 function about(){
     document.getElementById("homepart").style.display="none";
     document.getElementById("projectpart").style.display="none";
     document.getElementById("servicepart").style.display="none";
     document.getElementById("aboutpart").style.display="block";
     document.getElementById("contactpart").style.display="none";
     document.getElementById('menu-toggle').checked = false;
   
 
     document.getElementById('projectBtn').style.border = "none";
     document.getElementById('serviceBtn').style.border = "none";
     document.getElementById('contactBtn').style.border = "none";
     document.getElementById('aboutBtn').style.border = "2px";
 document.getElementById('aboutBtn').style.borderBottom = "#a780cf solid";
 movement.push("about()")
 console.log(movement);
     window.scrollTo(0, 0); 
     AOS.refresh();
 }
 
 function contact(){
     document.getElementById("homepart").style.display="none";
     document.getElementById("projectpart").style.display="none";
     document.getElementById("servicepart").style.display="none";
     document.getElementById("aboutpart").style.display="none";
     document.getElementById("contactpart").style.display="block";
     document.getElementById('menu-toggle').checked = false;
     document.getElementById('projectBtn').style.border = "none";
     document.getElementById('serviceBtn').style.border = "none";
     document.getElementById('aboutBtn').style.border = "none";
     document.getElementById('contactBtn').style.border = "2px";
 document.getElementById('contactBtn').style.borderBottom = "#a780cf solid";
 movement.push("contact()")
 console.log(movement);
     window.scrollTo(0, 0); 
     AOS.refresh();
 }
 

 window.addEventListener('popstate', function(event) {
    var index=movement.length - 1;
    if (movement.length >= 2) {
        let functionName = movement[index - 1]; // Get the function name from the array
        eval(functionName); // Evaluate the function using eval()
    } else {
        console.log('Invalid index.'); // Handle cases where index is out of range
    }
     index=index-1;
     movement.pop();
});

























 let dropcount1 = 0;
 let dropcount2 = 0;
 let dropcount3 = 0;
 
 function droppers(arrow, element, dropcount) {
     if (dropcount % 2 == 0) {
         document.getElementById(arrow).style.transition = "0.5s ease-in-out"
         document.getElementById(arrow).style.transform = "rotateZ(180deg)"
         document.getElementById(element).style.transition = "0.5s ease-in-out"
         document.getElementById(element).style.height = "120px";
     } else {
         document.getElementById(arrow).style.transform = "rotateZ(0deg)"
         document.getElementById(element).style.height = "0px";
     }
 }
 
 function dropdiv() {
     document.getElementById("svg2").style.transform = "rotateZ(0deg)"
         document.getElementById("dropDiv2").style.height = "0px";
         document.getElementById("svg3").style.transform = "rotateZ(0deg)"
         document.getElementById("dropDiv1").style.height = "0px";
     droppers("svg1", "dropDiv", dropcount1);
     dropcount1++;
     dropcount2=0
     dropcount3=0
     
     
 }
 
 function dropdiv2() {
     document.getElementById("svg1").style.transform = "rotateZ(0deg)"
         document.getElementById("dropDiv").style.height = "0px";
         document.getElementById("svg3").style.transform = "rotateZ(0deg)"
         document.getElementById("dropDiv1").style.height = "0px";
     droppers("svg2", "dropDiv2", dropcount2);
     dropcount2++;
     dropcount3=0;
     dropcount1=0;
 }
 
 function dropdiv1() {
     document.getElementById("svg1").style.transform = "rotateZ(0deg)"
     document.getElementById("dropDiv").style.height = "0px";
     document.getElementById("svg2").style.transform = "rotateZ(0deg)"
     document.getElementById("dropDiv2").style.height = "0px";
     droppers("svg3", "dropDiv1", dropcount3);
     dropcount3++;
     dropcount1=0;
     dropcount2=0;
 }
 
 
 
 /* menu close */


 
 
 
 
 
 