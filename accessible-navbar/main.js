// Get references to the nav menu and buttons
const navMenu = document.getElementById('nav-menu');
const openMenuButton = document.getElementById('open-menu-button');




//a blind person usually navigates with the keyboard using focus only, using the Tab key to move through interactive elements like links and buttons 
// Focus trapping is a technique used to keep the keyboard focus within a specific area of the page, such as a modal dialog or a dropdown menu, when it is open 
// Ensure that when the menu is open, the focus is trapped within the menu and the user can navigate through the menu items using the Tab key
// When the menu is closed, the focus should return to the button that opened the menu
//focus should not be placed on elements that are not visible or interactive, such as hidden menus or disabled buttons.

//INERT ATTRIBUTE
    // inert attribute is not yet fully supported in all browsers, but it is supported in most modern browsers. 
    // It is supported in Chrome, Edge, and Firefox, but not yet supported in Safari.
    // inert attribute removes element from accessibility tree, makes it untabbable just like hidden -->
    // inert attribute is used to make the nav menu non-interactive when it is closed, so that screen readers and keyboard users cannot interact with it -->
    // inert does not hide the element from screen readers(like hidden does), it just makes it non-interactive. 
    // When the menu is opened using JavaScript, the inert attribute should be removed to make the menu interactive again.
    //assign the inert attribute to the nav menu only for mobile view when the menu is closed

//javascript media query to check if the viewport width is less than or equal to 700px (mobile view)
//if the viewport width is less than or equal to 700px, add the inert attribute to the nav menu
//if the viewport width is greater than 700px, remove the inert attribute from the nav menu
const mediaQuery = window.matchMedia('(width < 700px)');



//when the user resizes the viewport, the media query will be re-evaluated and the handleViewportChange function will be called
// Add a listener to the media query to handle changes in viewport width
mediaQuery.addEventListener('change', (e) => handleViewportChange(e));//without this line the inert attribute will not be added or removed when the user resizes the viewport
// Note: The 'change' event is fired when the evaluation of the media query changes, i.e., when the viewport crosses the defined threshold (700px in this case).


// You can add the event listener in two ways:
// 1. mediaQuery.addEventListener('change', handleViewportChange);
//    This works if your handler expects the event object as its first parameter.
// 2. mediaQuery.addEventListener('change', (e) => handleViewportChange(e));
//    This is preferred for clarity, as it explicitly passes the event object to your handler.


// Function to handle viewport changes
function handleViewportChange(e) {
//On screens above 700px returns MediaQueryList {media: '(width: 700px)', matches: false, onchange: null}
//On screens 700px and below returns MediaQueryList {media: '(width: 700px)', matches: true, onchange: null}
//the property 'matches' is a boolean that indicates whether the document currently matches the media query list or not
 console.log(e);
 
 //TODO: Add inert attribute to nav menu when closed for mobile view only
    if (e.matches) {
        // if e.matches == true, the viewport width is less than or equal to 700px
        navMenu.setAttribute('inert', 'true');
    } else {
        // if e.matches == false, the viewport width is greater than 700px
        navMenu.removeAttribute('inert');
    }
}

//**************************************************************************************************************************************** */




//TODO: Add functionality to open and close the nav menu when the buttons are clicked



// Function to open the menu
function openMenu() {
  navMenu.classList.add('open');

  //TODO: When the menu is open, set focus to the first link in the menu
  const firstLink = navMenu.querySelector('a');
  firstLink.focus();

  // aria-expanded="false" should be toggled to "true" when the menu is open
  openMenuButton.setAttribute('aria-expanded', 'true'); // Update aria-expanded to true when menu is open
    // Remove inert attribute from nav menu when opened
    navMenu.removeAttribute('inert');
}

// Function to close the menu   
function closeMenu() {
  navMenu.classList.remove('open');

  //TODO: When the menu is closed, set focus back to the open menu button
  openMenuButton.focus();       
    openMenuButton.setAttribute('aria-expanded', 'false'); // Update aria-expanded to false when menu is closed
    // Add inert attribute to nav menu when closed for mobile view only
    if (mediaQuery.matches) {
        navMenu.setAttribute('inert', 'true');
    }

}

//**************************************************************************************************************************************** */


//when a menu item is clicked and it takes you to a different section of the page, the menu should close automatically
// Get all the links in the nav menu
const navLinks = navMenu.querySelectorAll('nav a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu when a link is clicked
        closeMenu();
    });
});



// Initial check on page load
handleViewportChange(mediaQuery);