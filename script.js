	function loadPopularMovies() {
		fetch("https://api.themoviedb.org/3/movie/popular?api_key=26e6c70b1c0f7b13af614c4aa81998bf")
		.then((response) => {return response.json();})
		.then((newResponse) => {
			var popularMovies = newResponse.results.slice(0, 12);
			popularMovies.forEach((movie) => {
				var poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
				document.getElementById("popular").insertAdjacentHTML("beforeend", `<a href="" class="col-lg-2 col-md-3 mb-4">
					<img class="rounded-1 w-100" src="${poster}" alt=""/></a>`);
			});
		});
	}

	function loadTrendingMovies() {
		fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=26e6c70b1c0f7b13af614c4aa81998bf")
		.then((response) => {return response.json();})
		.then((newResponse) => {
			var trendingMovies = newResponse.results.slice(0, 8);
			trendingMovies.forEach((movie) => {
			  //it will execute based on the array size
			  var poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
			  document.getElementById("trending").insertAdjacentHTML("beforeend",`<a href="" class="col-lg-2 col-md-3 mb-4"><img class="rounded-1 w-100" src="${poster}" alt="" /></a>`);
			});
		});
	}
	window.addEventListener("DOMContentLoaded", () => {
		loadPopularMovies(); //set
		loadTrendingMovies(); //set
	});

	// =====================================
	document.getElementById("searchBtn").addEventListener("click", () => {
		document.getElementById("general-section").style.display = "none";
		var query = document.getElementById("searchInput").value;

		fetch(`https://api.themoviedb.org/3/search/movie?api_key=26e6c70b1c0f7b13af614c4aa81998bf&query=${query}`)
		.then((response) => {return response.json();})
		.then((newResponse) => {
			var movies = newResponse.results;
			movies.forEach((movie) => {
				var poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
				document.getElementById("searchResults").insertAdjacentHTML("beforeend",`<a href="" class="col-lg-2 col-md-3 mb-4"><img class="rounded-1 w-100" src="${poster}" alt=""/></a>`);
			});
		});
	});