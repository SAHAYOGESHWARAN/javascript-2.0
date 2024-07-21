window.onload = function () {
    const elementmain = document.getElementById("main");
    elementmain.style.color = "red";
  
    const clickHandle = e => {
        console.log(e.target.innerHTML);
    };
   
    const buttons = document.querySelectorAll("button");

    buttons.forEach(eachButton => {
        eachButton.addEventListener("click", clickHandle);
    });

    setTimeout(() => {
        console.log('removed');
        buttons.forEach(eachButton => {
            eachButton.removeEventListener("click", clickHandle);
        });
    }, 10000);
};
