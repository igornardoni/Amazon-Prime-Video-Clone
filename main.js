let main = document.querySelectorAll('.main .center')[0];

// Movies (pt 1)
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 10)
            return;
        if(j == 0){
            main.innerHTML+=`
            
            <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

            `;
        }else{
            if(j == 1){
                main.innerHTML+= ` 
                <h2><strong><em>Movies:</em></strong> Watch the new releases movies</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }else{
                main.innerHTML+= ` 
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }
        }

    })
    
})

// Movies (pt 2)

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=2')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 10)
            return;
        if(j == 0){
            main.innerHTML+=`
            
            <div class="banner-principal" style="margin-top: 20px; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

            `;
        }else{
            if(j == 1){
                main.innerHTML+= ` 
                <h2><strong><em>Channels:</em></strong> Recently added</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }else{
                main.innerHTML+= ` 
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }
        }

    })
    
})

// Movies (pt 3)

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=3')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 15)
            return;
        if(j == 0){
            main.innerHTML+=`
            
            <div class="banner-principal" style="margin-top: 20px; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

            `;
        }else{
            if(j == 1){
                main.innerHTML+= ` 
                <h2><strong><em>Store:</em></strong> Rent or Buy your movie</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }else{
                main.innerHTML+= ` 
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }
        }

    })
    
})

// TV Series (pt 1)

fetch('https://api.themoviedb.org/3/tv/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 20)
            return;
        if(j == 0){
            main.innerHTML+=`
            
            <div class="banner-principal" style="margin-top: 20px; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

            `;
        }else{
            if(j == 1){
                main.innerHTML+= ` 
                <h2><strong><em>TV Shows:</em></strong> Most popular</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }else{
                main.innerHTML+= ` 
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }
        }

    })
    
})

// TV Series (pt 2)

fetch('https://api.themoviedb.org/3/tv/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=2')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 20)
            return;
        if(j == 0){
            main.innerHTML+=`
            
            <div class="banner-principal" style="margin-top: 20px; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

            `;
        }else{
            if(j == 1){
                main.innerHTML+= ` 
                <h2><strong><em>TV Shows:</em></strong> Popular</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }else{
                main.innerHTML+= ` 
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }
        }

    })
    
})

// TV Series (pt. 3)

fetch('https://api.themoviedb.org/3/tv/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=3')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 20)
            return;
        if(j == 0){
            main.innerHTML+=`
            
            <div class="banner-principal" style="margin-top: 20px; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

            `;
        }else{
            if(j == 1){
                main.innerHTML+= ` 
                <h2><strong><em>TV Shows:</em></strong> Most recommended</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }else{
                main.innerHTML+= ` 
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                
                `;
            }
        }

    })
    
})

