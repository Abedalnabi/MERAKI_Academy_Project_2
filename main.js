console.log("***********Project_2***********")

const body = $("body")

const movies = [
{
    action: {
        Avatarr : {
            name: "Avatarr",
            date: "2009",
            type: "Action Movie",
            img: "https://images-na.ssl-images-amazon.com/images/I/61ADl6omqPL._AC_SL1500_.jpg",
            des :`Avatar (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video: `https://www.youtube.com/embed/5PSNL1qE6VY`
        },

        godzilla1: {
            name: "godzilla1",
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
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        HardKill: {
            name: "HardKill",
            date: "2019",
            type: "Action Movie",
            img: "https://cdn.hmv.com/r/w-1280/hmv/files/aa/aa6d7b6b-6b76-49f7-9c8d-43acc534bf9c.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        Greenland2020: {
            name: "Greenland2020",
            date: "2011",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        TheOutpost: {
            name: "TheOutpost",
            date: "2020",
            type: "Action Movie",
            img: "https://eplay-prod.s3.eu-west-1.amazonaws.com/store/movie_region_poster/32279/file/movie_detail_image/ed6f38d7a57e1ed4191a556753d4de76.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        LostBullet: {
            name: "LostBullet",
            date: "2015",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BN2M5MzE4NTMtMDNmOC00ZDQyLTkwYjUtZWY5ZDQ1MjYwNDZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        TheOldGuard3: {
            name: "TheOldGuard",
            date: "2013",
            type: "Action Movie",
            img: "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        LegacyfLies: {
            name: "LegacyfLies",
            date: "2017",
            type: "Action Movie",
            img: "https://media-cache.cinematerial.com/p/500x/qtpvzi0x/legacy-of-lies-french-dvd-movie-cover.jpg?v=1606119274"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        BLACKKKLANSMAN: {
            name: "BLACKKKLANSMAN",
            date: "2018",
            type: "Action Movie",
            img: "https://i.pinimg.com/originals/bc/63/82/bc6382b2bbb06785b11d3c98172d9ced.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
    }
},
{
    Tvserios: {
        Vikings : {
            name: "Vikings",
            date: "2013",
            type: "Tv Serios",
            img: "https://i.pinimg.com/474x/94/bf/81/94bf8150c0916e5e2ec94fda12ba4a7d.jpg",
            des :`Vikings (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video: `https://www.youtube.com/embed/Auzs95InJzo`
        },

        The100: {
            name: "The100",
            date: "2011",
            type: "Tv Serios",
            img: "https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg",
            des :`Vikings (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video:"https://www.youtube.com/embed/odM92ap8_c0"
        },

        GameOfThrons: {
            name: "GameOfThrons",
            date: "2011",
            type: "Tv Serios",
            img: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            des :`Vikings (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video:"https://www.youtube.com/embed/YoHD9XEInc0"
        },

        PekyBlinders : {
            name: "PekyBlinders",
            date: "2013",
            type: "Tv Serios",
            img: "https://i.pinimg.com/originals/d4/65/2d/d4652d0351fd059977785a8f7a14e400.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        
        LaCasaDePable: {
            name: "LaCasaDePable",
            date: "2017",
            type: "Tv Serios",
            img: "https://images-na.ssl-images-amazon.com/images/I/810h-WgKS9L._AC_SL1500_.jpg",
            des :`Vikings (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        Dark: {
            name: "Dark",
            date: "2020",
            type: "Tv Serios",
            img: "https://cdn.hmv.com/r/w-1280/hmv/files/aa/aa6d7b6b-6b76-49f7-9c8d-43acc534bf9c.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        StrangerThings: {
            name: "StrangerThings",
            date: "2016",
            type: "Tv Serios",
            img: "https://i5.walmartimages.com/asr/57f859d3-1c00-4c58-ae6a-153666998989_1.467bd554430098a7173ada9bd8e635bf.jpeg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        BreakingBad: {
            name: "BreakingBad",
            date: "2008",
            type: "Tv Serios",
            img: "https://images-na.ssl-images-amazon.com/images/I/51fWOBx3agL._AC_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        
        TheOldGuard1: {
            name: "TheOldGuard1",
            date: "2013",
            type: "Tv Serios",
            img: "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        LegacyfLies1: {
            name: "LegacyfLies1",
            date: "2017",
            type: "Tv Serios",
            img: "https://media-cache.cinematerial.com/p/500x/qtpvzi0x/legacy-of-lies-french-dvd-movie-cover.jpg?v=1606119274"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        BLACKKKLANSMAN_1: {
            name: "BLACKKKLANSMAN_1",
            date: "2018",
            type: "Tv Serios",
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
            
            
        BLACKKKLANSMAN_3: {
            name: "BLACKKKLANSMAN_3",
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
       
        TheOldGuard2: {
            name: "TheOldGuard2",
            date: "2013",
            type: "Drama Movie",
            img: "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        LegacyfLies2: {
            name: "LegacyfLies2",
            date: "2017",
            type: "Drama Movie",
            img: "https://media-cache.cinematerial.com/p/500x/qtpvzi0x/legacy-of-lies-french-dvd-movie-cover.jpg?v=1606119274"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        BLACKKKLANSMAN_2: {
            name: "BLACKKKLANSMAN_2",
            date: "2018",
            type: "Drama Movie",
            img: "https://i.pinimg.com/originals/bc/63/82/bc6382b2bbb06785b11d3c98172d9ced.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        
        HardKill: {
            name: "HardKill",
            date: "2019",
            type: "Drama Movie",
            img: "https://cdn.hmv.com/r/w-1280/hmv/files/aa/aa6d7b6b-6b76-49f7-9c8d-43acc534bf9c.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        Greenland2020: {
            name: "Greenland2020",
            date: "2011",
            type: "Drama Movie",
            img: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            ,des: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
            video:"https://www.youtube.com/embed/vOUVVDWdXbo"
        },
        
       
        Avatar : {
            name: "Avatar",
            date: "2009",
            type: "Drama Movie",
            img: "https://images-na.ssl-images-amazon.com/images/I/61ADl6omqPL._AC_SL1500_.jpg",
            des :`Avatar (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,[9][10] a room-temperature superconductor.[11] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.`,
            video: `https://www.youtube.com/embed/5PSNL1qE6VY`
        },

        godzilla: {
            name: "godzilla",
            date: "2021",
            type: "Drama Movie",
            img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:888/q:75/https://bleedingcool.com/wp-content/uploads/2021/03/godzilla_vs_kong_ver12_xlg.jpg"
            ,des: "Godzilla vs. Kong is a 2021 American monster film directed by Adam Wingard. A sequel to Godzilla: King of the Monsters (2019) and Kong: Skull Island (2017), it is the fourth film in Legendary's MonsterVerse. It is also the 36th film in the Godzilla franchise, the 12th film in the King Kong franchise, and the fourth Godzilla film to be completely produced by a Hollywood studio.[b] The film stars Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle Chandler, and Demián Bichir. In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a weapon to stop Godzilla's mysterious rampages.",
            video:"https://www.youtube.com/embed/odM92ap8_c0"
        }
        
    }
},
]
////////////////////////////// Variables
const baner  = $(".BANEER")
const other =$(".other")
const allmoviesButton1 = $(".allmoviesButton")
const ActionMovies  =   $(".Action")
const DramaMovies=      $(".Drama")
const ditails = $(".ditails")
const FAV= $(".FAV")
const footer =$(".footer")
let conterforlocal=1
/////////////////////////////////////FAV FUN
arr=1
arr1=1
arr2=2
const favoritesFun =(a)=>{

arr++
arr1++
arr2++

// let b=JSON.stringify()
// console.log(b)
// localStorage.setItem(a,$(".namedetalis").text())
// localStorage.setItem(a,$(".dateDetails").text()) 
// localStorage.setItem(`${JSON.stringify(a)}+img`,$(".DetailsIMg").attr("src"))

let poiu=$(".DetailsIMg").attr("src")



    // let ddddd
    // localStorage.setItem("key", JSON.stringify(ddddd))
    // console.log(ddddd)
    // FAV.append(ddddd)
    // arr.push(ddddd)
    
}
/////////////////////////-------------------
const Myfaverite = $(".Myfaverite")
Myfaverite.on('click',()=>{
    FAV.html("")
    FAV.show()
    other.hide()
    ditails.hide()
    allbaneer.show()
    about1.html("")
    baner.hide()
    singIn.html("")
/////////////////////////////////-----------------------------------------

////////////////////////////
// let key 
// let value
// for (let i=0 ; i<localStorage.length ;i++){

//     key = localStorage.key(i)
//     value = localStorage.getItem(key)
//     console.log("key",key)
//     console.log("val",value)
// }


/////////////////////////////////////-------------------
    
    

    for(let j=1 ; j<=localStorage.length-2;j++){
        let fav = $(`
        <div class="All">  
                <div >
                    <img class="AllImage" id=$  src=${localStorage.getItem(j)}>
                    </div>
                    <div class="Des">
                        <h2 class = nameOfFav  >${localStorage.getItem(++j)}<h2> 
                        <h2 id="type">${localStorage.getItem(++j)}</h2>
                    </div> 
                </div>
        `)
        FAV.append(fav)
    }
})
////////////////////////////////////----------------------------------------------------------------
//////////////////////////////////All Movie FUN

const allMovies = ()=> {
    baner.hide()
    ditails.show()
    FAV.hide()

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
                    <h2 class = color9 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
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
                    <button id= "nobuton" >Add to favorites</button>

                </div>
                
                `)
                
                
                ditails.append(DetailsForDrama)
                arryForFav12 =["Avatarr","godzilla1","Inception"]
                
                
                $("#nobuton").on('click',()=>{
                    // i can use array and push all the elemant to empty array and then call array in fav fun
                    // arryForFav.push(movies[i][key][key2].img)
                    // arryForFav.push(movies[i][key][key2].name)
                    // arryForFav.push(movies[i][key][key2].type)


                    if(localStorage.getItem('xxx')===null){
                        console.log("FDSA")
                        localStorage.setItem('iii',1) 
                        localStorage.setItem('xxx',"DASDAS") 
                    }
                        localStorage.setItem('iii',Number(localStorage.getItem('iii'))) 
                    
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].img ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].name ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].type )
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    })
                    // localStorage.setItem(movies[i][key][key2].name,arryForFav)

                    // localStorage.setItem(`item${movies[i][key][key2].name}`,arryForFav[0])
                    // localStorage.setItem(`item${movies[i][key][key2].img}`,arryForFav[1])
                    // localStorage.setItem(`item${movies[i][key][key2].des}`,arryForFav[2])
                    
                    

                    
                
                
            })
        
        }
    }
    
})

}
////////////////////////////////Drama Movie FUN

const DramaMoviesFun = ()=> {
    baner.hide()
    ditails.show()
    FAV.hide()

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
                    <h2 class = color9 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
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
                        <h2 class = namedetalis id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                        <p id = size>${movies[i][key][key2].des}</p>
                        <h2 class = typeddetails id="type">${movies[i][key][key2].type}</h2>
                        <h2 class = dateDetails >${movies[i][key][key2].date}<h2> 
                        <iframe width="700" height="315" src="${movies[i][key][key2].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> 
                    <button id="nobuton" onclick="favoritesFun()">Add to favorites</button>
                </div>
                `)
                ditails.append(DetailsForDrama)
                arryForFav =[]
                $("#nobuton").on('click',()=>{
                    // i can use array and push all the elemant to empty array and then call array in fav fun
                    // arryForFav.push(movies[i][key][key2].img)
                    // arryForFav.push(movies[i][key][key2].name)
                    // arryForFav.push(movies[i][key][key2].type)
                    if(localStorage.getItem('xxx')===null){
                        console.log("FDSA")
                        localStorage.setItem('iii',1) 
                        localStorage.setItem('xxx',"DASDAS") 
                    }
                        localStorage.setItem('iii',Number(localStorage.getItem('iii'))) 
                    
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].img ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].name ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].type )
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    })
            })
        }}
    }
})

}

/////////////////////////Action Movie FUN

const ActionMoviesFun = ()=> {
    baner.hide()
    ditails.show()
    FAV.hide()

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
                    <h2 class = color9 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 id="type1">${movies[i][key][key2].type}</h2>
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
                        <h2 class = typeddetails id="type">${movies[i][key][key2].type}</h2>
                        <h2 class = dateDetails>${movies[i][key][key2].date}<h2> 
                        <iframe width="700" height="315" src="${movies[i][key][key2].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> 
                    <button id="nobuton" onclick="favoritesFun()">Add to favorites</button>
                </div>
                `)
                ditails.append(DetailsForDrama)
                arryForFav =[]
                $("#nobuton").on('click',()=>{
                    // i can use array and push all the elemant to empty array and then call array in fav fun
                    // arryForFav.push(movies[i][key][key2].img)
                    // arryForFav.push(movies[i][key][key2].name)
                    // arryForFav.push(movies[i][key][key2].type)
                    if(localStorage.getItem('xxx')===null){
                        console.log("FDSA")
                        localStorage.setItem('iii',1) 
                        localStorage.setItem('xxx',"DASDAS") 
                    }
                        localStorage.setItem('iii',Number(localStorage.getItem('iii'))) 
                    
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].img ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].name ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].type )
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    })
            })
        }}
    }
})

}

///////////////////////////TV Serios FUN
const Tvserios = ()=> {
    baner.hide()
    ditails.show()

movies.forEach(function(ele,i){
    for(const key in movies[i]){
        for(const key2 in movies[i][key]){
            
            if(key==="Tvserios"){
            
            const allMovies = $(`
            <div class="All">  
                <div >
                <div class = year > ${movies[i][key][key2].date}</div>
                    <img class="AllImage" id=${movies[i][key][key2].name}  src=${movies[i][key][key2].img}>
                </div>
                <div class="Des">
                    <h2 class = color9 id = ${movies[i][key][key2].name} >${movies[i][key][key2].name}<h2> 
                    <h2 class="type">${movies[i][key][key2].type}</h2>
                </div> 
            </div>`)
            const type = $(".type")
            type.css({
                "color" : "red",
            })

            
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
                        <h2 class = typeddetails id="type">${movies[i][key][key2].type}</h2>
                        <h2 class = dateDetails >${movies[i][key][key2].date}<h2> 
                        <iframe width="700" height="315" src="${movies[i][key][key2].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> 
                    <button id="nobuton" onclick="favoritesFun()">Add to favorites</button>

                </div>
                `)
                ditails.append(DetailsForDrama)
                arryForFav =[]
                $("#nobuton").on('click',()=>{
                    // i can use array and push all the elemant to empty array and then call array in fav fun
                    // arryForFav.push(movies[i][key][key2].img)
                    // arryForFav.push(movies[i][key][key2].name)
                    // arryForFav.push(movies[i][key][key2].type)
                    if(localStorage.getItem('xxx')===null){
                        console.log("FDSA")
                        localStorage.setItem('iii',1) 
                        localStorage.setItem('xxx',"DASDAS") 
                    }
                        localStorage.setItem('iii',Number(localStorage.getItem('iii'))) 
                    
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].img ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].name ) 
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    localStorage.setItem(localStorage.getItem('iii'),movies[i][key][key2].type )
                    localStorage.setItem('iii',Number(localStorage.getItem('iii'))+1)
                    conterforlocal++
                    })
                
            })
        }}
    }
})

}
/////////////////////////About us Button FUN
const aboutus = $(".AboutUs")
const about1 = $(".aboutus1")
function about(){

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

    about1.append(about)
}


aboutus.on("click",()=>{
        about1.show()
        allbaneer.show()
        about()
        baner.hide()
        other.hide()
        singIn.html("")


    })

///////////////////////Buttons FUN
const upperPage = $(".upperPage")
allmoviesButton1.on("click" ,allMovies)
ActionMovies.on("click" ,ActionMoviesFun)
DramaMovies.on("click" ,DramaMoviesFun)

$(".movieall").on("click" , ()=>{
    FAV.hide()
    allbaneer.show()
    other.html("")
    other.show()
    about1.html("")
    footer.html("")
    ditails.html("")
    singIn.html("")
    allMovies()

})

$(".Tvserios").on("click" , ()=>{
    FAV.hide()
    allbaneer.show()
    other.html("")
    other.show()
    about1.html("")
    ditails.html("")
    singIn.html("")


    Tvserios()
    footer(hide)    

})




//////////////////// thems style
const Changecoler =  ()=> {
    let mainColor = true;
    const color9 =$('.color9')
    console.log(mainColor)
    return  () =>{
        if (mainColor) {
            mainColor = false;
            body.css({
                "--main-color":"rgb(0, 0, 0)",
                "--sub-color":"rgb(255, 255, 255)",
            })
            color9.css({
                color: "wheat",

            })
        } else {
            mainColor = true;
            body.css({
                "--main-color":"rgb(255, 255, 255)",
                "--sub-color":"rgb(0, 0, 0)",
                
            })
            
            


    }
};
};
const colerthems = Changecoler();


///////////////// home button
const home = $(".home")
const allbaneer = $(".ALL_Banner")


///////////////Sing in FUN

const singIn =$(".singIn")
const singInbutton = $(".Sing-in")

singInbutton.on('click',()=>{
    singIn.html("")
    baner.hide()
    footer.hide()
    other.hide()
    allbaneer.hide()
    FAV.hide()


    const sing = $(`
    <div class = regester>
        <div> <input class=username type="text" value="some text" placeholder = 'User name'/></div>
        <div><input class=pass type="text" value="some text" placeholder = 'Password'/></div>
        <h3 >dont have account </h3>
        <h3 >Regester now </h3>


    </div>

    `)
    singIn.append(sing)

})
// console.log(username1)

// function singInFun(user,pass){
//     array=[]
//     obj ={}

//     const pass =$(".pass").val
//     let username1 =$(".username").val();

//     obj.name= username1
//     obj.pass=pass
//     array.push(obj)
//     array.forEach((ele,i)=>{
//         if(obj.name){


//         }


//     })


// }

















