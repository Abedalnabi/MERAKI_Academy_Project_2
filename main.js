console.log("***********Project_2***********")

const body = $("body")
const movies = [{name:`Godzela`, Dec : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium esse illo inventore ab tempore, ut repellat officia quos quod porro earum ducimus animi unde? Enim mollitia animi quod architecto.
                ` ,img : "1212333.jpg>"},{name:`Avatar`, Dec : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium esse illo inventore ab tempore, ut repellat officia quos quod porro earum ducimus animi unde? Enim mollitia animi quod architecto.
                `}]

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
    // for(let i =0 ;i<movies.length ; i++){
    //     if($(".Action1").clicked){
        
    let img = $(`<img src= ${movies[0].img} class="img"`)
    let hh = $(`<h2 class=name>${movies[0].name}</h2>`)
    let pargagrah = $(`<p>${movies[0].Dec}</p>`)

    add2.append(img)
    add2.append(hh)
    add2.append(pargagrah)
    add2.append(select)
    add.append(add2)
    body.append(add)
}
// }}

const box = $(".BANEER")

    
box.on("click", () => {
    console.log("List item has been clicked");
    $(".BANEER").hide()
    ADD();
});


