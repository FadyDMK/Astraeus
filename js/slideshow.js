//we select the elements we need for the slider function
const slider = document.querySelector('.slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

//all the data wee need for the slide
const images=["image1.png","image2.jpg","image3.jpg","image4.png"];
const headings=["The Tarantula Nebula","Northern Lights over Southern Europe","The Medulla Nebula Supernova Remnant","NGC 1333: Stellar Nursery in Perseus"];
const descriptions=["The Tarantula Nebula, also known as 30 Doradus, is more than a thousand light-years in diameter, a giant star forming region within nearby satellite galaxy the Large Magellanic Cloud.","Did you see an aurora over the past two nights? Many people who don't live in Earth's far north did. Reports of aurora came in not only from northern locales in the USA as Alaska, but as far south as Texas and Arizona.","What powers this unusual nebula? CTB-1 is the expanding gas shell that was left when a massive star toward the constellation of Cassiopeia exploded about 10,000 years ago. ","In visible light NGC 1333 is seen as a reflection nebula, dominated by bluish hues characteristic of starlight reflected by interstellar dust."];



let id = 0;

//the function for the slider
function slide(id){
    //set the background image
    slider.style.backgroundImage = `url(Img/${images[id]})`;


    //Add image fade to animation
    slider.classList.add('image-fade');

    //now to stop the animation after it's finished
    setTimeout(() =>{
        slider.classList.remove('image-fade');
    },550);

    //now to change the heading
    heading.innerText = headings[id];

    //now for the description
    description.innerText= descriptions[id];
}

//I am adding a click event listener to left arrow
arrLeft.addEventListener('click',(event) =>{
    //decrement img id
    id--
    
    //now we check if the id is less than the number of available slides
    if(id<0){
        //we change to the last image
        id=images.length-1
    }

    //now we execute the slide function
    slide(id);
} )
arrRight.addEventListener('click',(event) =>{
    //increment img id
    id++;
    //alert(id);
    //now we check if the id is less than the number of available slides
    if(id>images.length-1){
        //we change to the first image
        id=0
    }

    //now we execute the slide function
    slide(id);
} )



