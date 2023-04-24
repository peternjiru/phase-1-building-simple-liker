// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let errorMsg = document.querySelector("#modal")
errorMsg.className = "hidden"

const liker = document.getElementsByClassName("like-glyph")

for (let element of liker) {

  element.addEventListener("click", function () {
    // call the fetchUserData function when the button is clicked
    mimicServerCall().then(userData => {


      if (element.textContent == EMPTY_HEART) {
        element.textContent = FULL_HEART
        element.className = "activated-heart"
        element.style.cursor = "pointer"

      } else {
        element.textContent = EMPTY_HEART
        element.className = "like-glyph"
      }



    }).catch(error => {
      // handle errors here
      
        errorMsg.className = ""

        setTimeout(() => {
          errorMsg.className = "hidden"
        }, 3000);
  
    });
  });

}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}