var NewB = ["Styles/Pics/Shoes/Balance/Big/1.jpg","Styles/Pics/Shoes/Balance/Big/2.jpg","Styles/Pics/Shoes/Balance/Big/3.jpg","Styles/Pics/Shoes/Balance/Big/4.jpg","Styles/Pics/Shoes/Balance/Big/5.jpg"];
var Blazer =["Styles/Pics/Shoes/blazer/Big/1.jpg","Styles/Pics/Shoes/blazer/Big/2.jpg","Styles/Pics/Shoes/blazer/Big/3.jpg","Styles/Pics/Shoes/blazer/Big/4.jpg","Styles/Pics/Shoes/blazer/Big/5.jpg"];
var SFB =["Styles/Pics/Shoes/Snow/Big/1.jpg","Styles/Pics/Shoes/Snow/Big/2.jpg","Styles/Pics/Shoes/Snow/Big/3.jpg","Styles/Pics/Shoes/Snow/Big/4.jpg","Styles/Pics/Shoes/Snow/Big/5.jpg"];
var Timber =["Styles/Pics/Shoes/Timber/Big/1.jpg","Styles/Pics/Shoes/Timber/Big/2.jpg","Styles/Pics/Shoes/Timber/Big/3.jpg","Styles/Pics/Shoes/Timber/Big/4.jpg","Styles/Pics/Shoes/Timber/Big/5.jpg"];
var Dr_mart_high =["Styles/Pics/Shoes/Mart/Big/1.jpg","Styles/Pics/Shoes/Mart/Big/2.jpg","Styles/Pics/Shoes/Mart/Big/3.jpg","Styles/Pics/Shoes/Mart/Big/4.jpg","Styles/Pics/Shoes/Mart/Big/5.jpg"];
var Dr_mart_low =["Styles/Pics/Shoes/Mart_low/Big/1.jpg","Styles/Pics/Shoes/Mart_low/Big/2.jpg","Styles/Pics/Shoes/Mart_low/Big/3.jpg","Styles/Pics/Shoes/Mart_low/Big/4.jpg","Styles/Pics/Shoes/Mart_low/Big/5.jpg"];
var Air =["Styles/Pics/Shoes/air/Big/1.jpg","Styles/Pics/Shoes/air/Big/2.jpg","Styles/Pics/Shoes/air/Big/3.jpg","Styles/Pics/Shoes/air/Big/4.jpg","Styles/Pics/Shoes/air/Big/5.jpg"];
var Air_max =["Styles/Pics/Shoes/Air_max/Big/1.jpg","Styles/Pics/Shoes/Air_max/Big/2.jpg","Styles/Pics/Shoes/Air_max/Big/3.jpg","Styles/Pics/Shoes/Air_max/Big/4.jpg","Styles/Pics/Shoes/Air_max/Big/5.jpg"];
var Converse =["Styles/Pics/Shoes/convers/Big/1.jpg","Styles/Pics/Shoes/convers/Big/2.jpg","Styles/Pics/Shoes/convers/Big/3.jpg","Styles/Pics/Shoes/convers/Big/4.jpg","Styles/Pics/Shoes/convers/Big/5.jpg"];

z = document.querySelector(".ref_wrap");
wid_2 = document.querySelector(".pad").offsetWidth;
wid_1 = z.offsetWidth;
till = (wid_1 - wid_2);
co = -(wid_2/4);


var x = document.body.querySelector(".Shoe_galary > img");
var name = document.title;
if(name == "New_Balance"){
	back = NewB;
}else if(name == "Air_Max"){
	back = Air_max;
}else if(name == "Blazer"){
	back = Blazer;
}else if(name == "SFB_Leather"){
	back = SFB;
}else if(name == "Air_Force"){
	back = Air;
}else if(name=="Dr.Martens_1460"){
	back = Dr_mart_high;
}else if(name=="Converse"){
	back = Converse;
}else if(name=="Timberland"){
	back = Timber;
}else{
	back = Dr_mart_low;
}
x.src = back[0];
x.style.objectFit = "cover";
var i = 0;

function left(){
	if(i == 0){
		i = back.length-1;
	}else{
		i--;
	}
	x.src = back[i];
	x.style.objectFit = "cover";
	x.style.transition = "all 0.3s";
}
function right(){
	if(i == back.length-1){
		i = 0;
	}else{
		i++;
	}
	x.src = back[i];
	x.style.objectFit = "cover";
	x.style.transition = "all 0.3s";

}
// =============



// =====================

back_targ = document.querySelectorAll(".small_link_pic");
mini_descr = ["New Balance 530","Nike Blazer Mid 77",
	"Nike SFB 6" ,"Timberland 6 Inch Boot",
	"Dr. Martens 1460","Dr. Martens 1461",
	"Nike Air Force 1 07","Nike WMNS Air Max 95","Converse All Star"];
back_gr = ["Styles/Pics/Shoes/Balance/1.jpg",
	"Styles/Pics/Shoes/blazer/1.jpg",
	"Styles/Pics/Shoes/Snow/1.jpg",
	"Styles/Pics/Shoes/Timber/1.jpg",
	"Styles/Pics/Shoes/Mart/1.jpg",
	"Styles/Pics/Shoes/Mart_low/1.jpg",
	"Styles/Pics/Shoes/air/1.jpg",
	"Styles/Pics/Shoes/Air_max/1.jpg",
	"Styles/Pics/Shoes/convers/1.jpg"];
mini_links=["Balance.html","Blazer.html",
	"SFB_Nike.html","Timberland.html",
	"Dr_Martens_high.html","Dr_Martens_low.html",
	"Air.html","Air_max.html","Converse.html"];
j = new Array();
c = back[0].split('/');
c = c.slice(0,4).join("/")+"/"+c[5];
for(let v=0;v<back_gr.length;v++){
	if(back_gr[v]!=c){
		j.push(v);
	}
}

j.sort(()=>Math.random()-0.5)
c=0;
back_targ.forEach(function(i){
	parent = i.parentNode;
	grand_par = parent.parentNode;
	grand_par.href = mini_links[j[c]];
	descr_ch = parent.querySelector(".mini_descr");
	i.style.background="url("+back_gr[j[c]]+")";
	i.style.backgroundSize   = "cover";
	i.style.backgroundPosition = "center";
	descr_ch.innerHTML = mini_descr[j[c]];
	c++;
})

// ========================================
pick_i = document.body.querySelectorAll(".pick_img > img");
ss =pick_i[0].parentNode;
ss.style.opacity = "0.4";
ss.style.transform = "scale(0.8)";

function change_bg(t){
	pick_i.forEach(function(ev){
		f = ev.parentNode;
		f.style.opacity="1";
		f.style.transform = "scale(1)";
	});
	f = t.parentNode
	f.style.opacity = "0.4";
	f.style.transform = "scale(0.8)";
	img_bg = t.src;
	img_bg_arr = img_bg.split('/');
	a = img_bg_arr.slice(img_bg_arr.length-5,img_bg_arr.length-1).join('/');
	a+="/Big/" + img_bg_arr.slice(img_bg_arr.length-1,img_bg_arr.length).join('/');
	a=a.slice(0,a.length-3)+"jpg";
	x.src = a;
	x.style.objectFit = "cover";
	x.style.transition = "all 0.3s";
}
// ========================================
size_p = document.body.querySelectorAll(".size > div");
var Size_picked; 
var lable = document.querySelector(".Name");
c = lable.innerHTML;
lable = c.slice(19,c.length-18);
function size_pic(ev){
	size_p.forEach(function (e){
		e.style.background="none";
		e.style.color = "black";
	});
	Size_picked=ev;
	ev.style.background = "#4a4848";
	ev.style.color = "white";
}
function Buy(){
	if(Size_picked){
		
		let shop = document.createElement("div");
		shop.className = "Buy_window";
		let h4 = document.createElement("h4");
		h4.innerHTML = "Order";
		let s = document.createElement("span");
		s.className = "Size_wind";
		s.innerHTML =lable +" Size: "+Size_picked.innerHTML;
		let s1 = document.createElement("span");
		s1.className = "Size_wind";
		s1.innerHTML = "Name: ";
		let s2 = document.createElement("span");
		s2.className = "Size_wind";
		s2.innerHTML = "Contact Information: ";
		let name = document.createElement("input");
		name.className = "name_wind";
		name.type = "text";
		name.placeholder ="Let us know you better";
		name.setAttribute("required", "");
		let cont = document.createElement("input");
		cont.className = "cont_wind";
		cont.type = "text";
		cont.placeholder = "Email, phone number or social media";
		cont.setAttribute("required", "");
		let sub = document.createElement("input");
		sub.className = "sub_wind";
		sub.type = "submit";
		fav_cl = document.createElement("span");
		fav_cl.className=("fav_close")
		fav_cl.onclick = function(){
			if(document.body.querySelector(".Buy_window")){
				document.body.removeChild(shop);
			}
		}
		sub.onclick = function(i){
			if(name.value.length>0 && cont.value.length>0){
				document.body.removeChild(shop);
				setTimeout(function() {	alert(name.value +", cпасибо за заказ, наш ассистент скоро свяжется с вами по поводу заказа!");}, (100));
			}
			if(!name.value.length>0){	
				name.style.border = "2px solid red";
			}
			if(!cont.value.length>0){	
				cont.style.border = "2px solid red";
			}
		}
		document.body.append(shop);
		shop.append(h4);
		shop.append(s);
		shop.append(s1);

		shop.append(name);
		shop.append(s2);

		shop.append(cont);
		shop.append(sub);
		shop.append(fav_cl);
		
	}
	else{
		alert("Выберите размер!")
	}
}


















// =======================

function right_scroll(){
	if(co>-till-10){
		co-=2;
		z.style.left = String(co)+"px";
	}
}
function left_scroll(){
	if(co<10){
		co+=2;
		z.style.left = String(co)+"px";
	}
	
}
lefty = document.querySelector(".arrow_left_windows");
righty= document.querySelector(".arrow_right_windows");

let intervalId = null;

lefty.addEventListener('mouseenter', () => {
	intervalId = setInterval(() => {
		left_scroll();
	}, 1)
});

lefty.addEventListener('mouseleave', () => {
	clearInterval(intervalId);
});

righty.addEventListener('mouseenter', () => {
	intervalId = setInterval(() => {
		right_scroll();
	}, 1)
});

righty.addEventListener('mouseleave', () => {
	clearInterval(intervalId);
});

window.addEventListener('resize',  function(){
	wid_2 = document.querySelector(".pad").offsetWidth;
	wid_1 = z.offsetWidth;
	till = (wid_1 - wid_2);
	co = - (wid_2/4);
});

