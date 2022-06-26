// store all checkboxes 
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
// variable to store the changing event of being checked
let lastChecked;
// function to handle the function of event listener
function handleCheck (e) {
    // store the checkboxes inbetween two clicks as false
    let inBetween = false;
    // if the shiftkey and the user is checking boxed
        if(e.shiftKey && this.checked) {
            // loop through each checkbox
            checkboxes.forEach(checkbox => {
                console.log(checkbox);
                // if the checkbox is the one we clicked or the first (lastchecked)
                if(checkbox === this || checkbox === lastChecked){
                    // make it not false... ie true
                    inBetween = !inBetween;
                }
                // then if it is inbetween then check it
                if(inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        // making lastchecked variable the one that was clicked
    lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));