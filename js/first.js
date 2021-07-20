var users =[ 
{
	name:"Lochan",
	Gender:"F",
	hobby:"reading",
	avatar:"images.png"
},
{
	name:"Devi",
	Gender:"F",
	hobby:"Teaching",
	avatar:"images.png"
},
{
	name:"niki",
	Gender:"F",
	hobby:"coding",
	avatar:"images.png"
},
{
	name:"Sam",
	Gender:"M",
	hobby:"coding",
	avatar:"images.png"
},
{
	name:"yomi",
	Gender:"M",
	hobby:"reading",
	avatar:"images.png"
},
{
	name:"mann",
	Gender:"M",
	hobby:"teaching",
	avatar:"images.png"
},
];


window.addEventListener("load",function() 
 { 

	function search() {
		console.log("button clicked");

		var results =document.getElementById("results");
			

		var hobbyField=document.getElementById("hobby");
		var hobby=hobbyField.value;
		console.log(hobby);

		var genderField =document.getElementById("Gender");
		var selectedIndex =genderField.selectedIndex;
		var Gender =genderField.options[selectedIndex].value;
		console.log(Gender); 

		var resultsHtml =" "
		for (var i = 0 ; i<users.length ; i++) {
			resultsHtml="<div class='person-row'>\
			<img =" +users[i].images +"/>\
			<div class='person-info'>\
			<div>" +users[i].name +"</div>\
			<div>" +users[i].hobby +"</div></div>\
			<button>Add friend</button></div>";


		}
		results.innerHTML= resultsHtml;
	
	}
	var searchBtn = document.getElementById("searchBtn");
	searchBtn.addEventListener("click",search);


	
});
	
	
