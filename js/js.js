
let header = document.createElement("header"),
logo = document.createTextNode("A@A"),
div  = document.createElement("div"), 
ul = document.createElement("ul");
div.className="logo",ul.className="navbar",header.className="header";
 let it = ["Home","About","Conact","Ask Me"];
it.map((IT)=>{
  let li = document.createElement("li")
  li.innerHTML = IT
  ul.append(li)
  li.style.padding = "0 20px"
})
//add header to Body
div.append(logo)
header.append(div);
header.append(ul);
document.body.prepend(header);
//style body
div.style.cssText="margin:10px 5px; color:rgb(35,169,110); font-weight: bold;font-size: 35px "
document.body.style.cssText ="margin:0; padding:0; box-sizing: border-box;"
header.style.cssText = "; display:flex; justify-content:space-between; algin-item:center; color:black; font-family: cursive;font-weight: bold;font-size: large;" 
ul.style.cssText = "list-style-type:none; margin:0 ; padding:0; display:flex; margin:10px 5px"
//creat Div Number
let bigDiv= document.createElement("div");
bigDiv.className ="continar"
// style bigDiv
bigDiv.style.cssText=
"display: grid;grid-template-columns: 1fr 1fr 1fr; gap: 25px; margin: 20px 5px;"
for(i=0 ; i < 12 ; i++){
  let sDiv = document.createElement("div")
  let son = document.createElement("h2")
  let span = document.createElement("span")
  let Num = document.createTextNode(`${i}`)
  textSpan = document.createTextNode("project")
  son.append(Num)
  span.append(textSpan)
  sDiv.append(son , span)
bigDiv.append(sDiv)
sDiv.style.cssText=" text-align: center;border-radius: 7px;background-color: rgb(194, 194, 193);"
span.style.cssText = "display: block;margin-bottom: 10px;font-family: cursive;"
}
document.body.append(bigDiv)
//create footer
let footer = document.createElement("footer");
footer.className = "footer";
 let spanFooter = document.createElement("span");
 let footerDiv =  document.createElement("div");
let textFooter = document.createTextNode("Copyright,2021");
//style footer
footer.style.cssText=
"background-color:rgb(35,169,110);display: flex;justify-content: center; height:70px; "
spanFooter.style.cssText = 
" font-family: cursive; display: block; margin-top:20px"
spanFooter.append(textFooter);
footerDiv.append(spanFooter)
footer.append(footerDiv);
document.body.append(footer);
