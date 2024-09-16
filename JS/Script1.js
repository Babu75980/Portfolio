    // Scroll selection active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
var header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);
};
function Playvideo(){
    document.getElementById('myimg').style.display='none'
    document.getElementById('selfintro').style.display='flex'
    document.getElementById('selfintro').innerHTML=src='../media/video_20240915_111033.mp4'
    // document.getElementById('introbtn1').innerHTML='Close';
    document.getElementById('introbtn1').style.display='none'
    document.getElementById('stopbtn1').style.display='flex'

}
function close(){
    //  document.getElementById('#myimg').style.display='inline-block'
    // document.getElementById('#selfintro').style.display='none'
    // document.getElementById('#introbtn').innerHTML='seemyintroduction'
    // document.getElementById('selfintro').style.display='none'
   
    // document.getElementById('#myimg').innerHTML=src='../media/PROFILE OF BABU.jpg'

}
    
    