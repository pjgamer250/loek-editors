const movies=[


{
name:"Kaavalan",
category:"Love Cutz",
image:"",
link:"https://drive.google.com/drive/folders/1Yf8rN8B7zPwpdrxz5QIztCWrZUtVzVnK"
},


{
name:"LEO",
category:"Love Cutz",
image:"leo.jpg",
link:"https://drive.google.com/drive/folders/1lFACzy425BYpgr48colcJlk7elVXKhdL"
},


{
name:"LEO",
category:"Mass Cutz",
image:"leo.jpg",
link:"https://drive.google.com/drive/folders/1r62dBbc3T7GBXnaWv9GTGbM9Pz4bx61T"
},


{
name:"Master",
category:"Love",
image:"master.jpg",
link:"https://drive.google.com/drive/folders/1rjYj-Ytz55HQJXpqFG_XOkvy-Y6mp0XD"
},


{
name:"Master",
category:"Mass",
image:"master.jpg",
link:"https://drive.google.com/drive/folders/1y8eAECVfV6olk9k53yjHsYWzlnbYd-TC"
}


];



let box=document.getElementById("movies");


function show(data){

box.innerHTML="";


data.forEach(m=>{


box.innerHTML+=`

<div class="card">


${m.image ?

`<img class="poster" src="${m.image}">`

:

`<div class="noimg">🎬</div>`

}



<h2>${m.name}</h2>

<div class="category">
🏷 ${m.category}
</div>


<button onclick="openDrive('${m.link}')">

CLICK HERE

</button>


</div>

`;

});


}


function openDrive(link){

window.open(link,"_blank");

}



document.getElementById("search").oninput=(e)=>{


let s=e.target.value.toLowerCase();


show(

movies.filter(x=>

(x.name+" "+x.category)
.toLowerCase()
.includes(s)

)

);


};



setTimeout(()=>{

document.getElementById("loader").style.display="none";

document.querySelector(".main").style.display="block";


show(movies);


},2000);