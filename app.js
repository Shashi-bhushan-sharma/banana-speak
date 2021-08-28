var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var txtOutput= document.querySelector("#txt-output");
//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL ="https://api.funtranslations.com/translate/dothraki.json";

console.log(txtInput)

//  txtOutput.innerText="hello";
 console.log(txtOutput);

 function getTranslateURL(text){
   return serverURL + "?" + "text=" + text
 }

 function ErrorHandler(error){
   console.log("An Error Occured !")
   alert("Something Wrong With the Server! \n Please Try Later.")
 }

function clickEventHandler()
{
  //  console.log("clicked!!")
  // console.log("Input",txtInput.value)
  // txtOutput.innerText="dsvnsvdvd"+ txtInput.value+" hehehe";
    fetch(getTranslateURL(txtInput.value))
    .then(response => response.json())
    .then(json => {
      console.log(json.contents.translated)
      txtOutput.innerText=json.contents.translated;})

    .catch(ErrorHandler)
  
}

btnTranslate.addEventListener("click",clickEventHandler)



// "input[name='translator']"