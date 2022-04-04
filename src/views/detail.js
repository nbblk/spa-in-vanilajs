import "../components/header";
import "../components/button";

import fetchData from "../utils/fetchData";
import { API_MOVIE_DETAIL } from "../apis/api";

export default async () => {
    const movies = await fetchData(API_MOVIE_DETAIL);
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
