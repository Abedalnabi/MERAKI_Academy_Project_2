console.log("***********Project_2***********")

const body = $("body")
const movies = [{name:`Godzela`, Dec : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium esse illo inventore ab tempore, ut repellat officia quos quod porro earum ducimus animi unde? Enim mollitia animi quod architecto.
                ` ,img : "1212333.jpg>"},{name:`Avatar`, Dec : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium esse illo inventore ab tempore, ut repellat officia quos quod porro earum ducimus animi unde? Enim mollitia animi quod architecto.
                `}]
let img
let hh
let pargagrah
const movieName = ()=>{
    movies.forEach((ele,i)=>{
        if(ele.name===`Godzela`)
    img = $(`<img src= ${movies[0].img} class="img"`)
    hh = $(`<h2 class=name>${movies[0].name}</h2>`)
    pargagrah = $(`<p>${movies[0].Dec}</p>`)
    
})
}

const ADD = ()=>{
    let add = $(`<div class = DesAction></div>`)
    let add2 = $(`  <div class=QQ></div>`)
    let select = $(`<select name="Rate" id="">
                    <option value="5-Stars">5-Stars</option>
                    <option value="4-Stars">4-Stars</option>
                    <option value="3-Stars">3-Stars</option>
                    <option value="2-Stars">2-Stars</option>
                    <option value="1-Stars">1-Stars</option>
                    </select>`)
    movieName()
    add2.append(img)
    add2.append(hh)
    add2.append(pargagrah)
    add2.append(select)
    add.append(add2)
    body.append(add)
}
// }}


const box1 = $(".Action1")
const box2 = $(".Action2")
const box3 = $(".Action3")
const box4 = $(".Action4")
const box5 = $(".Action5")

box1.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD();
});
box2.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD();
});
box3.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD();
});
box4.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD();
});
box5.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD();
});








