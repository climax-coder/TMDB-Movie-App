import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ2Mjk0ZDcxNTc5NzQ4MGM5NzBhMzgxMDZlNWJmYyIsInN1YiI6IjY1YTA5YzcyZjVjYjIxMDEyZmIxYzE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.651zhIsaPRBLbCzpSnj5Tobp8NtSIN5-zl-vRIbcBkQ";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const getMoviesData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
};
