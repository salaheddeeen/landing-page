/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//1- get all existing sections
var sections = document.getElementsByTagName("section");

//2- build the navbar list from the sections retrieved

builNavBarList();
//3- append for the list in the navbar menu
//navBarList.innerHTML = navBarListItems;


function builNavBarList(){
    var navBarList = document.getElementById("navbar__list");

    for(let section of sections){
        let sectionLink = section.getAttribute('id');
        let sectionName = section.getAttribute('data-nav');
        //navBarListItems = navBarListItems+'<li><a href="#'+section.id+'">'+section.id+'</a> </li>';
        let listItem = document.createElement('li');
        listItem.innerHTML = '<a class="menu__link" href="#'+sectionLink+'">'+sectionName+'</a>';
        navBarList.appendChild(listItem);

    }
}

//add style to the selected element

//check all sections, section by section -- if section is within the view port

function isSectionInViewPort(elm){
    let sectionPostion = elm.getBoundingClientRect();
   // alert('section: '+elm.id+' position:'+sectionPostion);
    return sectionPostion.top >=0;
}

function toggelActiveClass(){
    for(let section of sections){
        if(isSectionInViewPort(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }else{
            section.classList.remove('your-active-class');
        }

    }
}

document.addEventListener('scroll',toggelActiveClass)