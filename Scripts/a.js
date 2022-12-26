var f = ["Styles/Pics/Shoes/Balance/1.jpg","Styles/Pics/Shoes/Balance/2.jpg"
	,"Styles/Pics/Shoes/Balance/3.jpg","Styles/Pics/Shoes/convers/1.jpg",
	"Styles/Pics/Shoes/convers/2.jpg","Styles/Pics/Shoes/convers/3.jpg",
	"Styles/Pics/Shoes/blazer/1.jpg","Styles/Pics/Shoes/blazer/2.jpg",
	"Styles/Pics/Shoes/blazer/3.jpg","Styles/Pics/Shoes/Mart/1.jpg",
	"Styles/Pics/Shoes/Mart/2.jpg","Styles/Pics/Shoes/Mart/3.jpg",
	"Styles/Pics/Shoes/Air_max/1.jpg","Styles/Pics/Shoes/Air_max/2.jpg",
	"Styles/Pics/Shoes/Air_max/3.jpg","Styles/Pics/Shoes/Snow/1.jpg",
	"Styles/Pics/Shoes/Snow/2.jpg","Styles/Pics/Shoes/Snow/3.jpg",
	"Styles/Pics/Shoes/Mart_low/1.jpg","Styles/Pics/Shoes/Mart_low/2.jpg",
	"Styles/Pics/Shoes/Mart_low/3.jpg","Styles/Pics/Shoes/Timber/1.jpg",
	"Styles/Pics/Shoes/Timber/2.jpg","Styles/Pics/Shoes/Timber/3.jpg",
	"Styles/Pics/Shoes/air/1.jpg","Styles/Pics/Shoes/air/2.jpg",
	"Styles/Pics/Shoes/air/3.jpg",]

mini_descr = ["New Balance 530","Nike Blazer Mid 77 Pro Club",
	"Nike SFB 6\" Leather NSW" ,"Timberland 6 Inch Vibram Stacked Boot",
	"Dr. Martens 1460 Greasy","Dr. Martens 1461 Smooth Leather",
	"Nike Air Force 1 07","Nike WMNS Air Max 95","Converse All Star 1970s Hi"];
back_gr = ["Styles/Pics/Shoes/Balance/1.jpg",
	"Styles/Pics/Shoes/blazer/1.jpg",
	"Styles/Pics/Shoes/Snow/1.jpg",
	"Styles/Pics/Shoes/Timber/1.jpg",
	"Styles/Pics/Shoes/Mart/1.jpg",
	"Styles/Pics/Shoes/Mart_low/1.jpg",
	"Styles/Pics/Shoes/air/1.jpg",
	"Styles/Pics/Shoes/Air_max/1.jpg",
	"Styles/Pics/Shoes/convers/1.jpg"];

var mo = document.body.querySelectorAll("div.three_but > button");
mo.forEach(	function (i){
		i.onmouseover = event =>{
			a_bc(event.target);
		}
});
function a_bc(e){
	let parent = e.parentNode.parentNode;
	x = parent.querySelector("img");
	let i=0;
	if(e.id.charAt(1)){
		i = 3*Number(e.id.charAt(1));
	}
	if(e.id.charAt(0)=="a"){
		i+=0;
	}else if(e.id.charAt(0)=="b"){
		i+=1;
	}else{
		i+=2;
	}
	let byId = e.id;
	let chZero = byId.charAt(0);
	let numb = byId.charAt(1);
	let a = "a"+numb;
	let b = "b" +numb;
	let c = "c"+ numb;
	if(chZero=="a"){
		document.getElementById(a).style.background = "white";
		document.getElementById(b).style.background = "black";
		document.getElementById(c).style.background = "black";
		x.src = f[i];
	}	
	else if(chZero=="c"){
		document.getElementById(a).style.background = "black";
		document.getElementById(b).style.background = "black";
		document.getElementById(c).style.background = "white";
		x.src = f[i];

	}
	else{
		document.getElementById(a).style.background = "black";
		document.getElementById(b).style.background = "white";
		document.getElementById(c).style.background = "black";
		x.src = f[i];
	}
	x.style.transition = "all 0.3s";
}
// ===========================================================




a = document.querySelector(".sidebar_wrapper");
var Back_arr = new Array();
empty = document.querySelector(".empy");
var Bound  = new Map();
var Bound2 = new Map();
for(let c = 0; c<9;c++){
	Bound.set(back_gr[c],mini_descr[c]);
}
function like(e){
	if(e.parentNode.style.background == "red"){
		e.parentNode.style.background="#f2f2f2";
		c = e.parentNode.parentNode;
		check = c.querySelector("h4").innerHTML;
		check = check.slice(10,check.length-9);
		a.removeChild(Bound2.get(check));
		Bound2.delete(check);
		if(Bound2.size==0){
			a.append(empty);
		}
	}else{
		e.parentNode.style.background="red";
		if(a.querySelector(".empy")!=null){
			a.removeChild(empty);
		}
		create();
	}
	function create(){
		dad = e.parentNode.parentNode;
		child=dad.querySelector("img");
		child= child.src.split('/');
		child = child.slice(child.length-5,child.length-1).join('/')+"/1.jpg";
		let wind = document.createElement("div");
		wind.className = "fav_block";
		img_1 = document.createElement("img");
		img_1.className = "fav_img";
		img_1.src=child;
		let descr = document.createElement("span");
		descr.className ="fav_descr";
		descr.innerHTML= Bound.get(child);
		let del = document.createElement("span");
		del.className = "del_b";
		if(!Bound2.has(descr.innerHTML)){
			a.append(wind);
			wind.append(img_1);
			wind.append(descr);
			wind.append(del);
			Bound2.set(descr.innerHTML,wind);
		}
		del.onclick = function(i){
			gdgs = i.target.parentNode.querySelector("span").innerHTML;
			a.removeChild(Bound2.get(gdgs));
			Bound2.delete(gdgs);
			e.parentNode.style.background="#f2f2f2";
			if(Bound2.size==0){
			a.append(empty);
		}
		};
	}
}
flag_320 = true;
flag_768 = true;



head = document.querySelector("header");
window.addEventListener('resize', check_size);
window.addEventListener('load', check_size);
side = document.querySelector(".sidebar_wrapper");
main = document.querySelector(".main_wrapper");
nav = document.body.querySelector(".nav_panel");
bodad = document.body.querySelector(".body_wrapper");
hamb = document.querySelector(".menu__box");
del = nav.querySelector(".nav_b_wr");
navig = nav.querySelector(".navigation");
function show_fav() {
	if(side.style.left == "15px"){
		side.style.left = "-200%";
	}else{
		side.style.left = "15px";
	}

}
men_tog = document.querySelector("#menu__toggle");
men_tog.onchange = function(){
	if(!men_tog.checked && side.style.left == "15px"){
		side.style.left ="-200%";
	}
}
function display_fav(){
	document.body.append(side);
}
function check_size(){
	 if(320<window.innerWidth  && window.innerWidth<767){
		side.style.left = "-200%";
	 	if(main.querySelector(".sidebar_wrapper")){
		 		main.removeChild(side);
		 		hamb.append(side);
	 	}
 	 	if(bodad.querySelector(".nav_panel"))
	  		bodad.removeChild(nav);
	 	
	}else if(768<window.innerWidth  && window.innerWidth<1150){
		c = nav.querySelectorAll(".nav_b_wr");
		if(c[0])
			if(!c[0].querySelector("span"))
				navig.prepend(del);

		w1 = side.offsetWidth/2;
		side.style.left = "calc(50% - " + String(w1)+"px)";
		fav_cl = document.createElement("span");
		fav_cl.className=("fav_close")
		fav_cl.onclick = function(){
			if(document.body.querySelector(".sidebar_wrapper")){
				document.body.removeChild(side);
			}
		}
		if(!side.querySelector(".fav_close")){
			side.append(fav_cl);
		}
		if(!bodad.querySelector(".nav_panel")){
			head.after(nav);
		}
		if(main.querySelector(".sidebar_wrapper")){
			main.removeChild(side);
			hamb = document.querySelector(".menu__box");
			hamb.append(side);
		}
		
	}else if(window.innerWidth>1150){
 		main.prepend(side);
 		
 		c = nav.querySelectorAll(".nav_b_wr");
		if(c[0])
			if(c[0].querySelector("span"))
				if(c[0].querySelector("span").innerHTML == "favorites")
 					navig.removeChild(del);
	}
}