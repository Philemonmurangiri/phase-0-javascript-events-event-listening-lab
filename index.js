function addingEventListener() {
  let  input = "I was clicked"
}
const input  = document.getElementsByClassName("button")
input.addingEventListener("button", input )

function addingEventListener() {
    let input = document.getElementById('button');
    input.addEventListener('click', function() {
      console.log('Button clicked!');
    });
  }