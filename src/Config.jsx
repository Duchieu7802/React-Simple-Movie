export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const API_KEY = "84eb2ae36d8416146f44d030412bd242";
const tmdbEndpoint = `https://api.themoviedb.org/3`;
//`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${API_KEY}`
export const tmdbAPI = {
	getMovieList: (type, page = 1) =>
		`${tmdbEndpoint}/movie/${type}?api_key=${API_KEY}&page=${page}`,
	getMovieDetail: (movieID) =>
		`${tmdbEndpoint}/movie/${movieID}?api_key=${API_KEY}`,
	getMovieSearch: (type, query, page) =>
		`${tmdbEndpoint}/${type}/movie?query=${query}&api_key=${API_KEY}&page=${page}`,
	getMovieCredit: (movieID) =>
		`${tmdbEndpoint}/movie/${movieID}/credits?api_key=${API_KEY}`,
	getMovieVideo: (movieID) =>
		`${tmdbEndpoint}/movie/${movieID}/videos?api_key=${API_KEY}`,
	getMovieSimilar: (movieID) =>
		`${tmdbEndpoint}/movie/${movieID}/similar?api_key=${API_KEY}`,
	imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
	image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
