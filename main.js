console.log("***********Project_2***********")

const body = $("body")

const movies = [
{
    action: {
        Avatar : {
            name: "Avatar",
            date: "2009",
            type: "Action",
            img: "121233.jpg"},

        godzilla: {
            name: "godzilla",
            date: "2021",
            type: "Action",
            img: "121233.jpg"},

        Inception: {
            name: "Inception",
            date: "2010",
            type: "Action",
            img: "121233.jpg"},

        Bloodshot : {
            name: "Bloodshot",
            date: "2021",
            type: "Action",
            img: "121233.jpg"},
    }
},
{
    drama: {
        BLACKPANTHER: {
            name: "BLACK_PANTHER",
            date: "2018",
            type: "Drama",
            img: "121233.jpg"},
        BLACKKKLANSMAN: {
            name: "BLACKKKLANSMAN",
            date: "2018",
            type: "Drama",
            img: "121233.jpg"},
        DUNKIRK: {
            name: "DUNKIRK",
            date: "2017",
            type: "Drama",
            img: "121233.jpg"},
        BLACKPANTHER2: {
            name: "BLACK_PANTHER2",
            date: "2018",
            type: "Drama",
            img: "121233.jpg"},
    }
},
]

const baner  = $(".BANEER")
const other =$(".other")
const allmoviesButton1 = $(".allmoviesButton")
const ActionMovies  =   $(".Action")
const DramaMovies=      $(".Drama")
const ditails = $(".ditails")
const FAV= $(".FAV")

////////////////////////////////////////////////////////////////////////
const favoritesFun =()=>{
console.log($(".dateDetails").text())

let z= $(".dateDetails").text()
let c = $(".typeddetails").text()
let v =  $(".namedetalis").text()
let t = $(".DetailsIMg").attr("src")
console.log(t)
let fav

    fav = $(`
    <div class="All">  
            <div >
                <img class="AllImage" id=$  src=${t}>
                </div>
                <div class="Des">
                    <h2 id =  >${v}<h2> 
                    <h2 id="type">${c}</h2>
                    <h2>${z}<h2> 
                </div> 
            </div>
    `)
    FAV.append(fav)
    localStorage.setItem("key",FAV.append(fav));
    let locaal = localStorage.getItem("key")
    FAV.hide()
    
}
///////////////////////////////////////////////////////////////////////////////////
const allMovies = ()=> {
    baner.hide()
movies.forEach(function(ele,i){
    for(const key in movies[i]){
        for(const key2 in movies[i][key]){
            
            
                
            const allMovies = $(`
            <div class="All">  
                <div >
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 

                </div> 
            </div>`)
            other.append(allMovies)
            let a= movies[i][key][key2].name
            $(`#${a}`).on("click", ()=>{
                other.hide()
                console.log("GSddddddddddDFg")
                const DetailsForDrama= $(`
                <div class="DetailsAll">  
                <div >
                    <img class="DetailsIMg" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 class = namedetalis id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 class = typeddetails" id="type">${movies[i][key][key2].type}</h2>
                    <h2 class = dateDetails >${movies[i][key][key2].date}<h2> 
                    <button onclick="favoritesFun()">Add to favorites</button>
                </div> 
                </div>
                `)
                ditails.append(DetailsForDrama)
            })
        }
    }
})

}

const DramaMoviesFun = ()=> {
    baner.hide()
movies.forEach(function(ele,i){
    for(const key in movies[i]){
        for(const key2 in movies[i][key]){
            
            if(key==="drama"){
                
            const allMovies = $(`
            <div class="All">  
                <div >
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 
                    

                </div> 
            </div>`)
            
            other.append(allMovies)
            let a= movies[i][key][key2].name
            $(`#${a}`).on("click", ()=>{
                other.hide()
                console.log("GSddddddddddDFg")
                const DetailsForDrama= $(`
                <div class="DetailsAll">  
                <div >
                    <img class="DetailsIMg" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 
                    <button onclick="favoritesFun()">Add to favorites</button>

                </div> 
                </div>
                `)
                ditails.append(DetailsForDrama)
            })
        }}
    }
})

}


const ActionMoviesFun = ()=> {
    baner.hide()
movies.forEach(function(ele,i){
    for(const key in movies[i]){
        for(const key2 in movies[i][key]){
            
            if(key==="action"){
                
            const allMovies = $(`
            <div class="All">  
                <div >
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 

                </div> 
            </div>`)
            
            other.append(allMovies)
            let a= movies[i][key][key2].name
            $(`#${a}`).on("click", ()=>{
                other.hide()
                console.log("GSddddddddddDFg")
                const DetailsForDrama= $(`
                <div class="DetailsAll">  
                <div >
                    <img class="DetailsIMg" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 
                    <button onclick="favoritesFun()">Add to favorites</button>

                </div> 
                </div>
                `)
                ditails.append(DetailsForDrama)
            })
        }}
    }
})

}






allmoviesButton1.on("click" ,allMovies)
ActionMovies.on("click" ,ActionMoviesFun)
DramaMovies.on("click" ,DramaMoviesFun)

$(".movieall").on("click" ,allMovies)
















