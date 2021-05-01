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
            img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:888/q:75/https://bleedingcool.com/wp-content/uploads/2021/03/godzilla_vs_kong_ver12_xlg.jpg"
            ,des: "Godzilla vs. Kong is a 2021 American monster film directed by Adam Wingard. A sequel to Godzilla: King of the Monsters (2019) and Kong: Skull Island (2017), it is the fourth film in Legendary's MonsterVerse. It is also the 36th film in the Godzilla franchise, the 12th film in the King Kong franchise, and the fourth Godzilla film to be completely produced by a Hollywood studio.[b] The film stars Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle Chandler, and Demián Bichir. In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a weapon to stop Godzilla's mysterious rampages.",
            video:"https://www.youtube.com/embed/odM92ap8_c0"
        },

        Inception: {
            name: "Inception",
            date: "2010",
            type: "Action Movie",
            img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/82896/82479/inception_original_us_one_sheet_buy_now_at_starstills__53755__70259.1394512651.jpg?c=2"
            ,des: "Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.",
            video:"https://www.youtube.com/embed/YoHD9XEInc0"
        },

        Bloodshot : {
            name: "Bloodshot",
            date: "2021",
            type: "Action Movie",
            img: "https://pics.filmaffinity.com/Bloodshot-229984487-large.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        
        TheBeast: {
            name: "TheBeast",
            date: "2020",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BZDA3MGJlYjItYmMzOC00MGU4LTgzNjEtMjcyOTJkNmNiZmE5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            ,des: "",
            video:""
        },
        HardKill: {
            name: "HardKill",
            date: "2019",
            type: "Action Movie",
            img: "https://cdn.hmv.com/r/w-1280/hmv/files/aa/aa6d7b6b-6b76-49f7-9c8d-43acc534bf9c.jpg"
            ,des: "",
            video:""
        },
        Greenland2020: {
            name: "Greenland2020",
            date: "2011",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            ,des: "",
            video:""
        },
        TheOutpost: {
            name: "TheOutpost",
            date: "2020",
            type: "Action Movie",
            img: "https://lh3.googleusercontent.com/proxy/-gd7AZ-mQpyeB572UFj3sXs07Vt5gvMM0YuRYevXaWSsBUJxrv_LivhLksC35ailtLstk3dy21Z-BKObZPxTuLDSFVsunCIGd8oXOoM"
            ,des: "",
            video:""
        },
        LostBullet: {
            name: "LostBullet",
            date: "2015",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BN2M5MzE4NTMtMDNmOC00ZDQyLTkwYjUtZWY5ZDQ1MjYwNDZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg"
            ,des: "",
            video:""
        },
        TheOldGuard: {
            name: "TheOldGuard",
            date: "2013",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
            ,des: "",
            video:""
        },
        LegacyfLies: {
            name: "LegacyfLies",
            date: "2017",
            type: "Action Movie",
            img: "https://media-cache.cinematerial.com/p/500x/qtpvzi0x/legacy-of-lies-french-dvd-movie-cover.jpg?v=1606119274"
            ,des: "",
            video:""
        },
        BLACKKKLANSMAN: {
            name: "BLACKKKLANSMAN",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/bc/63/82/bc6382b2bbb06785b11d3c98172d9ced.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
    }
},
{
    drama: {
        BLACKPANTHER: {
            name: "BLACK_PANTHER",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/4f/89/3c/4f893ce0705c9a0e32336da67e098051.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
            
            
        BLACKKKLANSMAN: {
            name: "BLACKKKLANSMAN",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/bc/63/82/bc6382b2bbb06785b11d3c98172d9ced.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        DUNKIRK: {
            name: "DUNKIRK",
            date: "2017",
            type: "Drama Movie",
            img: "https://m.media-amazon.com/images/I/91a9Ez60pmL._AC_SY741_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        BLACKPANTHER2: {
            name: "BLACK_PANTHER2",
            date: "2018",
            type: "Drama Movie",
            img: "https://cdna.artstation.com/p/assets/images/images/020/321/338/large/jakub-maslowski-black-panther-ii.jpg?1567335561"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        LostBullet: {
            name: "LostBullet",
            date: "2015",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BN2M5MzE4NTMtMDNmOC00ZDQyLTkwYjUtZWY5ZDQ1MjYwNDZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg"
            ,des: "",
            video:""
        },
        TheOldGuard: {
            name: "TheOldGuard",
            date: "2013",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
            ,des: "",
            video:""
        },
        LegacyfLies: {
            name: "LegacyfLies",
            date: "2017",
            type: "Action Movie",
            img: "https://media-cache.cinematerial.com/p/500x/qtpvzi0x/legacy-of-lies-french-dvd-movie-cover.jpg?v=1606119274"
            ,des: "",
            video:""
        },
        BLACKKKLANSMAN: {
            name: "BLACKKKLANSMAN",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/bc/63/82/bc6382b2bbb06785b11d3c98172d9ced.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        TheOutpost: {
            name: "TheOutpost",
            date: "2020",
            type: "Action Movie",
            img: "https://lh3.googleusercontent.com/proxy/-gd7AZ-mQpyeB572UFj3sXs07Vt5gvMM0YuRYevXaWSsBUJxrv_LivhLksC35ailtLstk3dy21Z-BKObZPxTuLDSFVsunCIGd8oXOoM"
            ,des: "",
            video:""
        },
        HardKill: {
            name: "HardKill",
            date: "2019",
            type: "Action Movie",
            img: "https://cdn.hmv.com/r/w-1280/hmv/files/aa/aa6d7b6b-6b76-49f7-9c8d-43acc534bf9c.jpg"
            ,des: "",
            video:""
        },
        Greenland2020: {
            name: "Greenland2020",
            date: "2011",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            ,des: "",
            video:""
        },
        TheOutpost: {
            name: "TheOutpost",
            date: "2020",
            type: "Action Movie",
            img: "https://lh3.googleusercontent.com/proxy/-gd7AZ-mQpyeB572UFj3sXs07Vt5gvMM0YuRYevXaWSsBUJxrv_LivhLksC35ailtLstk3dy21Z-BKObZPxTuLDSFVsunCIGd8oXOoM"
            ,des: "",
            video:""
        },
        LostBullet: {
            name: "LostBullet",
            date: "2015",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BN2M5MzE4NTMtMDNmOC00ZDQyLTkwYjUtZWY5ZDQ1MjYwNDZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg"
            ,des: "",
            video:""
        },
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
            img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:888/q:75/https://bleedingcool.com/wp-content/uploads/2021/03/godzilla_vs_kong_ver12_xlg.jpg"
            ,des: "Godzilla vs. Kong is a 2021 American monster film directed by Adam Wingard. A sequel to Godzilla: King of the Monsters (2019) and Kong: Skull Island (2017), it is the fourth film in Legendary's MonsterVerse. It is also the 36th film in the Godzilla franchise, the 12th film in the King Kong franchise, and the fourth Godzilla film to be completely produced by a Hollywood studio.[b] The film stars Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle Chandler, and Demián Bichir. In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a weapon to stop Godzilla's mysterious rampages.",
            video:"https://www.youtube.com/embed/odM92ap8_c0"
        }
        
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
                    <p id = size>${movies[i][key][key2].des}</p>
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 
                    <iframe width="700" height="315" src="${movies[i][key][key2].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
                <button id="nobuton" onclick="favoritesFun()">Add to favorites</button>

                
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
                    <p id = size>${movies[i][key][key2].des}</p>
                    <h2 id="type">${movies[i][key][key2].type}</h2>
                    <h2>${movies[i][key][key2].date}<h2> 
                    <iframe width="700" height="315" src="${movies[i][key][key2].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
                <button id="nobuton" onclick="favoritesFun()">Add to favorites</button>

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

















