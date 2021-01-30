document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('continueButton').addEventListener('click',()=>{
        console.log(document.getElementById('newGame'));
        console.log(document.getElementById('continueGame'));
    });
    
    document.getElementById('backButton').addEventListener('click',()=>{
        var newGame = document.getElementById('newGame');
        var continueGame = document.getElementById('continueGame');
    });
});