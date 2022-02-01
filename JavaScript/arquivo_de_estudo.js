$('nav.nav2 h2').click(function(){
	$('nav.nav2 ul').slideToggle();
})

const burger = document.querySelector("#burger")

burger.addEventListener("click",()=>{
	document.body.classList.toggle("stop-scrolling")
} )
