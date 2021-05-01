console.log("***********Project_2***********")

const body = $("body")

const movies = [
{
    action: {
        Avatar : {
            name: "Avatar",
            date: "2009",
            type: "Action Movie",
            img: "https://images-na.ssl-images-amazon.com/images/I/61ADl6omqPL._AC_SL1500_.jpg",
            des :`Avatar (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video: `https://www.youtube.com/embed/5PSNL1qE6VY`
        },

        godzilla: {
            name: "godzilla",
            date: "2021",
            type: "Action Movie",
            img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:888/q:75/https://bleedingcool.com/wp-content/uploads/2021/03/godzilla_vs_kong_ver12_xlg.jpg"},

        Inception: {
            name: "Inception",
            date: "2010",
            type: "Action Movie",
            img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/82896/82479/inception_original_us_one_sheet_buy_now_at_starstills__53755__70259.1394512651.jpg?c=2"},

        Bloodshot : {
            name: "Bloodshot",
            date: "2021",
            type: "Action Movie",
            img: "https://pics.filmaffinity.com/Bloodshot-229984487-large.jpg"},
    }
},
{
    drama: {
        BLACKPANTHER: {
            name: "BLACK_PANTHER",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/4f/89/3c/4f893ce0705c9a0e32336da67e098051.jpg"},
        BLACKKKLANSMAN: {
            name: "BLACKKKLANSMAN",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/bc/63/82/bc6382b2bbb06785b11d3c98172d9ced.jpg"},
        DUNKIRK: {
            name: "DUNKIRK",
            date: "2017",
            type: "Drama Movie",
            img: "https://m.media-amazon.com/images/I/91a9Ez60pmL._AC_SY741_.jpg"},
        BLACKPANTHER2: {
            name: "BLACK_PANTHER2",
            date: "2018",
            type: "Drama Movie",
            img: "https://cdna.artstation.com/p/assets/images/images/020/321/338/large/jakub-maslowski-black-panther-ii.jpg?1567335561"},
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
const footer =$(".footer")

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
                    <div class = year > ${movies[i][key][key2].date}</div>
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    

                </div> 
            </div>`)
            other.append(allMovies)
            let a= movies[i][key][key2].name
            $(`#${a}`).on("click", ()=>{
                footer.hide()
                other.hide()
                console.log("GSddddddddddDFg")
                const DetailsForDrama= $(`
                <div class="DetailsAll">  
                    <div >
                    <img class="DetailsIMg" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                    </div>
                    <div class="Des1">
                        <h2 class = namedetalis id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                        <p id = size>${movies[i][key][key2].des}</p>
                        <h2 class = typeddetails" id="type">${movies[i][key][key2].type}</h2>
                        <h2 class = dateDetails >${movies[i][key][key2].date}<h2> 
                        <iframe width="700" height="315" src="${movies[i][key][key2].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> 
                    <button id="nobuton" onclick="favoritesFun()">Add to favorites</button>

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
                <div class = year > ${movies[i][key][key2].date}</div>
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    

                </div> 
            </div>`)
            
            other.append(allMovies)
            let a= movies[i][key][key2].name
            $(`#${a}`).on("click", ()=>{
                footer.hide()
                other.hide()
                console.log("GSddddddddddDFg")
                const DetailsForDrama= $(`
                <div class="DetailsAll">  
                <div >
                <div class = year > ${movies[i][key][key2].date}</div>
                    <img class="DetailsIMg" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des1">
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
                <div class = year > ${movies[i][key][key2].date}</div>
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type">${movies[i][key][key2].type}</h2>

                </div> 
            </div>`)
            
            other.append(allMovies)
            let a= movies[i][key][key2].name
            $(`#${a}`).on("click", ()=>{
                footer.hide()
                other.hide()
                console.log("GSddddddddddDFg")
                const DetailsForDrama= $(`
                <div class="DetailsAll">  
                <div >
                    <img class="DetailsIMg" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des1">
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

///////////////////////////////////////
const aboutus = $(".AboutUs")
u=0
aboutus.on("click",()=>{
footer.hide()
baner.hide()
other.hide()
u++
if(u===1){
const about = $(`
    <h1 class = H1 > <span style="color: red;">Mo</span>_Movies</h1>
    <p class = P>Welcome, thank you for using our website

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque facere cupiditate laborum sint, rerum porro vitae quidem eius reprehenderit voluptate pariatur nobis nemo architecto quod fugit, ipsum quia. Nemo, repudiandae!
        We are a site specializing in films and serials of all kinds, including action, comedy and entertainment. Here you will find information about films and videos for describing the film as well as film evaluations by the approved sites.</p>
        <p class =P>Thanks</p>
    <h1 class = H1>Contact Us</h1>
    <p class = P><i class='bx bxs-phone-call bx-tada' ></i>Phone :0789814895</p>
    <p class = P> <i class='bx bx-mail-send bx-tada' ></i>email:abedalnabi96@gmail.com<p>
    <p class = P><i class='bx bx-phone-incoming bx-tada' ></i>Telphone : 065894862<p>

    `)

    body.append(about)}
})
///////////////////////////////////////

allmoviesButton1.on("click" ,allMovies)
ActionMovies.on("click" ,ActionMoviesFun)
DramaMovies.on("click" ,DramaMoviesFun)

$(".movieall").on("click" ,allMovies)

















