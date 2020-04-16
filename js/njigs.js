let age=prompt("please enter your age");
if (age>=18){
    console.log("you can drive a small car");
}else if (age>=24){
    console.log("you can drive a truck");
}else if (age<18){
    console.log("you are too young to drive");
}

// Function to change theme ------ trial things
function changeCSS(cssFile, cssLinkIndex) {
    //algorithm => set a variable to get the link
    //You can create a new link, and replace the old one with the new one. 
    //If you put it in a function, you can reuse it wherever it's needed
     let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
     let newlink = document.createElement("link");
     
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}