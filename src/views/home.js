import "../components/nav";
import "../components/header";
import "../components/button";

import fetchData from "../utils/fetchData";
import { API_MOVIE_SORTED_BY_PROD_YEAR } from "../apis/api";

export default async () => {
    const movies = await fetchData(API_MOVIE_SORTED_BY_PROD_YEAR);
    const listItems = movies.map((item) => `<li>${item.title}</li>`).join('\n');
    console.log(listItems);

    return `
    <main-nav></main-nav>
    <main-header></main-header>
    <main>
        <ul>
            ${listItems}
        </ul>
        <load-more-btn></load-more-btn>
    </main>
    `
}
