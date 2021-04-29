console.log("***********Project_2***********")

const body = $("body")
const movies = [{name:`Godzela`, Dec : "Dsdasda" ,img: "1212333.jpg>"}
                ,{name:`Avatar`, Dec : "Dgfdssa" ,img: "1212333.jpg>"}
                ,{name:`Seized`, Dec : "Drewtsa" ,img: "1212333.jpg>"}
                ,{name:`Voyagers`, Dec : "Dsgfsdga" ,img: "1212333.jpg>"}
                ,{name:`Wrath of Man.`, Dec : "Dsdfgsfsa" ,img: "1212333.jpg>"}
                ,{name:`Stowaway`, Dec : "Dsagfsdgsf" ,img: "1212333.jpg>"}
                ,{name:`Without Remorse.`, Dec : "Ddfgsdsa" ,img: "1212333.jpg>"}
                ,{name:`Things Heard & Seen.`, Dec : "Dgsdfgsa" ,img: "1212333.jpg>"}
                ,{name:`Avatar`, Dec : "Dsgsdfga" ,img: "1212333.jpg>"}
                ,{name:`Attack on titan`, Dec : "Dsgsdfgsdfa" ,img: "1212333.jpg>"}
                ,{name:`Godzela`, Dec : "Dsgsdfgsda" ,img: "1212333.jpg>"}
                ,{name:`Godzela`, Dec : "Dfgsdfgssa" ,img: "1212333.jpg>"}
                ,{name:`Godzela`, Dec : "Dsdfgsdfa" ,img: "1212333.jpg>"}
                ,{name:`Godzela`, Dec : "Dgsdfgsa" ,img: "1212333.jpg>"}
                ,{name:`Godzela`, Dec : "Dssdfgsa" ,img: "1212333.jpg>"}
                ,{name:`Godzela`, Dec : "Dretwweta" ,img: "1212333.jpg>"}
            ]
let FavoriteMovies=[]


let img
let hh
let pargagrah
let fav 
let video

const movieName = (i)=>{
    movies.forEach((ele,x)=>{
    // img = $(`<img src= ${movies[i].img} class="img"`)
    hh = $(`<h2 class=name>${movies[i].name}</h2>`)
    pargagrah = $(`<p>${movies[i].Dec}</p>`)
 
 video = $('<div class="vidio">    <iframe  width="500" height="220" src="https://www.youtube.com/embed/z6nc9IkQfcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    <div class="perant"></div>')
})
}

const ADD = (i)=>{
    let add = $(`<div class = DesAction></div>`)
    let add2 = $(`<div class=QQ></div>`)
     // let select = $(`<select name="Rate" id=""><option value="5-Stars">5-Stars</option><option value="4-Stars">4-Stars</option>  <option value="3-Stars">3-Stars</option> <option value="2-Stars">2-Stars</option> <option value="1-Stars">1-Stars</option> </select>`) 
    fav = $("<button class=fav>Add to Favorites</button>")
    movieName(i)
    add2.append(img)
    add2.append(hh)
    add2.append(pargagrah)
    add2.append(video)
    // add2.append(select)
    add2.append(fav)
    add.append(add2)
    body.append(add)
}
const favorite = ()=>{

    fav.on(click, ()=>{
        //how to creat fav ??
    })
}


const box1 = $(".Action1")
const box2 = $(".Action2")
const box3 = $(".Action3")
const box4 = $(".Action4")
const box5 = $(".Action6")
const box6 = $(".Action7")
const box7 = $(".Action8")
const box8 = $(".Action9")
const box9 = $(".Action10")
const box10= $(".Action11")
const box11= $(".Action12")
const box12= $(".Action13")
const box13= $(".Action14")
const box14= $(".Action15")
const box15= $(".Action16")
const box16= $(".Action17")


box1.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(0);
});
box2.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(1);
});
box3.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(3);
});
box4.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(4);
});
box5.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(5);
});
box6.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(6);
});
box7.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(7);
});
box8.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(8);
});
box9.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(9);
});
box10.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(10);
});
box11.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(11);
});
box12.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(12);
});
box13.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD(13);
});









