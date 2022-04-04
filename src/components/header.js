class Header extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =  `<header>movie list</header>`;
    }
}

customElements.define('main-header', Header);

