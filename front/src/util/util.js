export default function loadMovies() {
    const url = 'http://localhost:3017'
    const moviesArr = fetch(url
        , {method: "GET"}
    ).then(res => res.json()).then(data => console.log(data))
}