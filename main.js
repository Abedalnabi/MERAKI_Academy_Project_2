console.log("***********Project_2***********")

const body = $("body")

const movies = [
{
    action: {
        Avatar : {
        keyName: "Avatar",
        name: "Avatar  ",
        date: "2009",
        type: "Action",
        img: "121233.jpg"},

    godzilla: {
        keyName: "godzilla",
        name: "godzilla",
        date: "2021",
        type: "Action",
        img: "121233.jpg"},

    Inception: {
        keyName: "Inception",
        name: "Inception",
        date: "2010",
        type: "Action",
        img: "121233.jpg"},

    Bloodshot : {
        keyName: "Bloodshot ",
        name: "Bloodshot",
        date: "2021",
        type: "Action",
        img: "121233.jpg"},
    }
},
{
    drama: {
        BLACKPANTHER: {
        keyName: "BLACKPANTHER",
        name: "BLACK PANTHER",
        date: "2018",
        type: "Drama",
        img: "121233.jpg"},
    BLACKKKLANSMAN: {
        keyName: "BLACKKKLANSMAN",
        name: "BLACKKKLANSMAN",
        date: "2018",
        type: "Drama",
        img: "121233.jpg"},
    DUNKIRK: {
        keyName: "DUNKIRK",
        name: "DUNKIRK",
        date: "2017",
        type: "Drama",
        img: "121233.jpg"},
    BLACKPANTHER2: {
        keyName: "BLACKPANTHER2",
        name: "BLACK PANTHER2",
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



const allMovies = ()=> {
    baner.hide()
    
movies.forEach(function(ele,i){
    for(const key in movies[i]){
        for(const key2 in movies[i][key]){

            const allMovies = $(`
            <div class="All">  
                <div >
                    <img class="AllImage" src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2>${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 

                </div> 
            </div>`)
            other.append(allMovies)
        }
    }
})
}

const ActionMoviesFun = ()=> {
    baner.hide()
    
movies.forEach(function(ele,i){
    for(const key in movies[i]){
        for(const key2 in movies[i][key]){
            console.log(key)
            if(key==="action"){
            const allMovies = $(`
            <div class="All">  
                <div >
                    <img class="AllImage" src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2>${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 

                </div> 
            </div>`)
            other.append(allMovies)
        }}
    }
})
}















allmoviesButton1.on("click" ,allMovies)
ActionMovies.on("click" ,ActionMoviesFun)









