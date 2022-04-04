import home from "./views/home.js";
import detail from "./views/detail.js";

import "./styles.css";

const routes = {
    "/": { title: "movies", render: home },
    "detail": { title: "detail", render: detail} 
}

async function router () {
    let view = routes[location.pathname];
    console.log(view);

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render()
        
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

window.addEventListener("click", e => {
    if (e.target.matches(["data-link"])) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
window.addEventListener("popstate", router);

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// The diff btw 'load' is that the DOMContentLoaded event fires when all the nodes in the page have been constructed in the DOM tree. The load event fires when all resources such as images and sub-frames are loaded completely.
window.addEventListener("DOMContentLoaded", router);