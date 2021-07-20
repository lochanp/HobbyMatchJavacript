/*var Users = function(name,Gender,hobby,img) {
	this.name = name;
	this.Gender = Gender;
	this.hobby = hobby;
	this.img = img;
}
var lochan =new Users('Lochan','F','reading','image2.png');
var devi =new Users('Devi','F','teaching','image2.png');
var niki =new Users('Niki','F','coding','image2.png');
var sam =new Users('Sam','M','coding','image1.png');
var yomi =new Users('yomi','M','reading','image1.png');
var mann =new Users('mann','M','teaching','image1.png');*/

var users =[
{
	name:"Lochan",
	Gender:"F",
	hobby:"reading",
	img:"image2.png"
},
{
	name:"Devi",
	Gender:"F",
	hobby:"teaching",
	img:"image2.png"
},
{
	name:"Niki",
	Gender:"F",
	hobby:"coding",
	img:"image2.png"
},
{
	name:"Sammy",
	Gender:"M",
	hobby:"coding",
	img:"image1.png"
},
{
	name:"Jake",
	Gender:"M",
	hobby:"reading",
	img:"image1.png"
},
{
	name:"Anna",
	Gender:"M",
	hobby:"teaching",
	img:"image1.png"
},
];


window.addEventListener("load",function() {

	function search() {

		var hobbyField=document.getElementById("hobby");
		var hobby=hobbyField.value;


		var genderField =document.getElementById("Gender");
		var selectedIndex =genderField.selectedIndex;
		var Gender =genderField.options[selectedIndex].value;
	

		var resultsHtml =" ";
		for (var i = 0 ; i<users.length ; i++) {
			//gender
			if (Gender == "A" || Gender == users[i].Gender) {
				
				if (hobby == "" || hobby == users[i].hobby) {
					resultsHtml +="<div class='people-row'>\
					<img src ='images/" + users[i].img +"'/>\
					<div class='people-info'>\
					<div>" +users[i].name +"</div>\
					<div>" +users[i].hobby +"</div></div>\
					<button>Add friend</button></div>";
				}
			}
		}
		var results =document.getElementById("results");
		results.innerHTML= resultsHtml;
	}
	
	var searchBtn = document.getElementById("searchBtn");
	searchBtn.addEventListener("click",search);


	
});
	
	
