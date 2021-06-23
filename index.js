console.log("script loaded..!")
function elementCreation(tg,parentElement){
    var child=document.createElement(tg)

    parentElement.append(child)

    return child;
}

var mobj=[
    
"What is HTML5?",
"Name some of the new features of HTML5.",
"Which browsers support HTML5?",
"Is HTML5 backward compatible with old browsers?",
"Are HTML tags case sensitive?",
"What is the purpose of 'section' tag in HTML5?",
"What is the purpose of 'article' tag in HTML5?",
"What is the purpose of 'aside' tag in HTML5?",
"What is the purpose of 'header' tag in HTML5?",
"What is the purpose of 'footer' tag in HTML5?",
"What is the purpose of 'nav' tag in HTML5?",
"What is the purpose of 'dialog' tag in HTML5?",
"What is the purpose of 'figure' tag in HTML5?",
"What are custom attributes in HTML5?",
"What is the purpose of datetime input control in Web form 2.0?",
"What is the purpose of datetime-local input control in Web form 2.0?",
"What is the purpose of date input control in Web form 2.0?",
"What is the purpose of month input control in Web form 2.0?",
"What is the purpose of week input control in Web form 2.0?",
"What is the purpose of time input control in Web form 2.0?",
"What is the purpose of number input control in Web form 2.0?",
"What is the purpose of range input control in Web form 2.0?",
"What is the purpose of email input control in Web form 2.0?",
"What is the purpose of url input control in Web form 2.0?",
"What is the purpose of 'output' tag in HTML5?",
"What is the purpose of 'placeholder' attribute in HTML5?",
"What is the purpose of 'autofocus' attribute in HTML5?",
"What is the purpose of 'required' attribute in HTML5?",
"Can you use SVG tags directly in HTML5 without any plugin?",
"What do you mean by session storage in HTML5?",
"What do you mean by local storage in HTML5?",
"When a session storage data gets deleted?",
"When a local storage data gets deleted?",
"How to utilize a server-sent event in HTML5?",
"What is the purpose of 'canvas' tag in HTML5?",
"What is the purpose of 'audio' tag in HTML5?",
"What is the purpose of 'video' tag in HTML5?",
"What is Geolocation API in HTML?",
]

var Body=document.getElementById("bd")

for(var i=0 ; i<mobj.length ;i++){

    var para=elementCreation("p",Body)

    para.className="para"
    para.innerHTML= "Q"+(i+1)+" . "+mobj[i]

}