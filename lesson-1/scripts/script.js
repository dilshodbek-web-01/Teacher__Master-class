"use strict";

movies.splice(50)

// --------------- NORMALIZE ALL MOVIES --------------- //

const AllMovies = movies.map((movies) => {
    return {
        title: movies.title,
        year: movies.year,
        category: movies.categories,
        lang: movies.language,
        id: movies.imdbId,
        time: `${Math.floor(movies.runtime / 60)}h ${movies.runtime % 60}m`,
        summary: movies.summary,
        link: `https://www.youtube.com/embed/${movies.youtubeId}`,
        maxImg: movies.bigThumbnail,
        minImg: movies.smallThumbnail,
        rating: movies.imdbRating
    }
})

console.log(AllMovies);

// ----------------------- RENDER ALL MOVIES function -----------------------//

function renderAllMovies(){
    AllMovies.forEach((el) => {
        const card=createElement('div', 'card shadow-lg', `
        
        <img src="${el.minImg}" alt="img" class="card-img">
                                <div class="card-body">
                                    <h3 class="card-title">
                                        ${el.title}
                                    </h3>
                                    <ul class="list-unstyled">
                                        <li><strong>Year: ${el.year} </strong></li>
                                        <li><strong>Category: ${el.category} </strong></li>
                                        <li><strong>Language: ${el.lang} </strong></li>
                                        <li><strong>Rating: ${el.rating} </strong></li>
                                        <li><strong>Runtime: ${el.time} </strong></li>
                                        <li><p>Runtime: ${el.summary} </p></li>
                                    </ul>

                                    <div class="social d-flex">
                                        <button class="btn btn-danger m-2">
                                            Trailer
                                        </button>

                                        <button class="btn btn-primary m-2">
                                            Read more . . .
                                        </button>

                                        <button class="btn btn-warning m-2">
                                            Add bookmark
                                        </button>
                                    </div>
                                </div>
        
        `);

        

        $('.wrapper').appendChild(card)
    })
}
renderAllMovies()
