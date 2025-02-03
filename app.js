const inputBox = getElement( 'inputNombre' );

let namesArray = [];

// Let's start by making it so the input is automatically selected, so no click required
inputFocus()


// Creates an input listener in order to press ENTER every time we want to add a name to the list, instead of having to click the button.
inputBox.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        addFriend();
    }
} );


function addFriend() {
    let userWrittenFriend = getInputValue()

    if ( !userWrittenFriend ) { //If no value was written:
        alert( 
            "No value.\nPlease write something." 
        ) 

        clearInputThenFocus();
        return
    }

    if (namesArray.includes( userWrittenFriend )  ) { // If the same name is repeated in the list:
        alert(
            "Name has been repeated.\nPlease provide a different name."
        )
        clearInputThenFocus()
        return
    }

    // If it has a value then:
    addFriendToArray( userWrittenFriend );
    updateFriendsList( userWrittenFriend );

    // Lastly we clear the box and most importantly we gain focus again
    clearInputThenFocus();
}


// Generic function to add names to the array.
// Friend will be picked from this list in the future.
function addFriendToArray( value ) {
    namesArray.push( value );
}


// Updates and shows the list with the names previously added.
function updateFriendsList( name ) {
    // This somehow adds a literal to HTML, from a string to a format.
    getElement('listaAmigos').innerHTML += `<br> ${ name } </br>` ;
}    


// Function to randomize and get 1 friend.
function pickFriend() {
    /*
    Why would it allow you to choose from ONE friend?
    If you had to choose from ONE friend, why even choosing in the first place. There'd be no option!
    Minimum required is two.
    */
    if (namesArray === undefined || namesArray.length < 2) {
        alert( "Please provide at least two friends." )
        return
    }

     let length = namesArray.length;
     
     /*
     Goes through the length of the Array and grabs a name from it.
     We don't have to add + 1 to the whole, given we're not working with numbers but the entirety of the array.
     */
     let chosenNumber = Math.floor( Math.random() * length ) ; 

     let chosenFriend = namesArray[ chosenNumber ] ;


     let result = getElement('resultado') ;
    result.innerHTML = chosenFriend ;
    
}


// Generic function to set value to an element.
function setElementValue( element, value ) {
    element.innerHTML = value;
}


// Get an element by id, ofc it has to be string because JS.
function getElement( element ) {
    return document.getElementById( element );
}


// Returns the current value from inputBox.value
function getInputValue() {
    return inputBox.value;
}


// Clears the inputBox.
function clearBox() {
    inputBox.value = "";
}


// inputBox gains focus
function inputFocus() {
    inputBox.focus();
}


// Best of both worlds.
function clearInputThenFocus() {
    clearBox();
    inputFocus();
}