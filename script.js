var choice=document.getElementsByClassName("choice");

function Customer(no){
  document.cookie="Auth=Customer";
  choice[0+no].style.boxShadow="0px 5px darkblue";
  choice[1+no].style.boxShadow="none";
}
function Hotel(no){
  document.cookie="Auth=Hotel";
  choice[0+no].style.boxShadow="none";
  choice[1+no].style.boxShadow="0px 5px darkblue";
}

function Hide(){
  document.getElementById("bg-modal").style.position="absolute";
  document.getElementById("bg-modal").style.zIndex="2";
}

function RegisterView(){
  Hide();
  RemoveAll();
  document.getElementById("bg-modal").style.display="flex";
  document.getElementById("modal-Register").style.display="block";
}
function LoginView(){
  Hide();
  RemoveAll();
  document.getElementById("bg-modal").style.display="flex";
  document.getElementById("modal-Login").style.display="block";
}
function CardView(){
  Hide();
  RemoveAll();
  document.getElementById("bg-modal").style.display="flex";
  document.getElementById("modal-CardEntry").style.display="block";
}
function RemoveAll(){
  document.getElementById("bg-modal").style.display="none";
  document.getElementById("modal-Register").style.display="none";
  document.getElementById("modal-Login").style.display="none";
  document.getElementById("modal-CardEntry").style.display="none";

  document.cookie = "Auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; //delete cookie

  for (var i = 0; i < choice.length; i++) {     //remove shadow comes on selecting auth as
    choice[i].style.boxShadow="none";
  }
}

window.matchMedia("(min-width: 600px)").addListener(()=>{document.getElementById("GroupLi").style.display="block";});

function changeIcon(){
  let state=document.getElementById("GroupLi").style.display;

  if(state == "block"){
    document.getElementById("GroupLi").style.display="none";
  }
  else
    document.getElementById("GroupLi").style.display="block";
}

function LoginCheckCreditionals(){
  let user=document.getElementById("LoginEmail");
	let pass=document.getElementById("LoginPassword");
  let auth_as=checkIsCookieSet(document.cookie);
  if(!auth_as)
	{
		alert("Choose Authentication as user or hotel.!!");
		return false;
	}
	if(user.value=="")
	{
		alert("Enter User ID!!");
		return false;
	}
	if(pass.value=="")
	{
		alert("Enter Password!!");
		return false;
	}
	if(pass.value.length<=6)
	{
		alert("Password length must be greater than 6!!");
		return false;
	}
}

function checkIsCookieSet(name){
  let cookieArray=name.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    let cookie=cookieArray[i].split("=");
    if(cookie[0]=="Auth" && (cookie[1]=="Customer" || cookie[1]=="Hotel"))
      return true;
  }
  return false;
}

function RegisterCheckCreditionals(){
  let firstName=document.getElementById("FName");
  let lastName=document.getElementById("LName");
  let user=document.getElementById("RegisterEmail");
  let pass=document.getElementById("RegisterPassword");
  let confirmpass=document.getElementById("ConfirmPassword");
  let auth_as=checkIsCookieSet(document.cookie);
  if(!auth_as)
	{
		alert("Choose Authentication as user or hotel.!!");
		return false;
	}
  if(firstName.value=="")
	{
		alert("Enter First Name!!");
		return false;
	}
  if(lastName.value=="")
	{
		alert("Enter Last Name!!");
		return false;
	}
	if(user.value=="")
	{
		alert("Enter Email!!");
		return false;
	}
	if(pass.value=="")
	{
		alert("Enter Password!!");
		return false;
	}
	if(pass.value.length<=6)
	{
		alert("Password length must be greater than 6!!");
		return false;
	}
  if(confirmpass.value=="")
	{
		alert("Enter password for confirmation!!");
		return false;
	}
  if(pass.value !== confirmpass.value)
  {
		alert("Passwords are not matching!!");
		return false;
	}
}

function CardCheckCreditionals(){
  let hotel=document.getElementById("Hotel");
	let city=document.getElementById("City");
  let state=document.getElementById("State");
  let date=document.getElementById("Date");
  let cost=document.getElementById("Cost");

	if(hotel.value=="")
	{
		alert("Enter Hotel Name!!");
		return false;
	}
	if(city.value=="")
	{
		alert("Enter City!!");
		return false;
	}
  if(state.value=="")
	{
		alert("Enter State!!");
		return false;
	}
  if(date.value=="")
  {
    alert("Enter Date!!");
    return false;
  }
  if(cost.value=="")
  {
    alert("Enter Cost!!");
    return false;
  }
}

function CreateCard(name,location,date,cost,index){
  let outerdiv=document.getElementById("CardContainer");
	let div=document.createElement("div");
	outerdiv.appendChild(div);

  if(index==0)
    div.setAttribute("class","ViewCard FirstCard");
  else
    div.setAttribute("class","ViewCard");

	let h1=document.createElement("h1");
	let p1=document.createElement("p");
	let p2=document.createElement("p");
  let p3=document.createElement("p");
	let childDiv=document.createElement("div");

  div.appendChild(h1);
	div.appendChild(p1);
	div.appendChild(p2);
  div.appendChild(p3);
	div.appendChild(childDiv);

  h1.setAttribute("class","Hotel");
  p1.setAttribute("class","Location");
  p2.setAttribute("class","Date");
  p3.setAttribute("class","Cost");
	childDiv.setAttribute("class","CardBookNow");

  h1.innerHTML=name;
  p1.innerHTML=location;
  p2.innerHTML=date;
  p3.innerHTML="Start @ ₹"+cost+" /-";
  childDiv.innerHTML="BOOK NOW";
}

function AjaxRequest(value){
  const xhr=new XMLHttpRequest();
  let outerdiv=document.getElementById("CardContainer");
  let scriptsdiv=document.getElementById("Create");
  xhr.onreadystatechange=function(){
    if(this.readyState==4 && this. status==200){
      outerdiv.innerHTML="";
      scriptsdiv.innerHTML="";
      let array=this.responseText.split("</script>");
      for (var i = 0; i < array.length; i++) {
        array[i]=array[i].substring(9,array[i].length);
      }
      for (var i = 0; i < array.length-1; i++) {
        // console.log(array[i]+",");
        eval(array[i]);
      }
    }
  };
  xhr.open('get','FetchCitiesCards.php?CityFetch='+value,true);
  xhr.send();
}
