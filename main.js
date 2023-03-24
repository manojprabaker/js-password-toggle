let div=document.querySelector(".container");
let ip=document.createElement("input");
ip.setAttribute("type","password");
ip.classList.add("pass")
div.appendChild(ip);

let ckbx=document.createElement("input");
ckbx.setAttribute("type","checkbox");
div.appendChild(ckbx);

ckbx.addEventListener("click",show);
function show() {
	var pwd =document.querySelector(".pass").value;
	console.log(pwd);
	if(ip.type==="password")
	{
		ip.type="text";
	}
	else{
		ip.type="password";
	}
}