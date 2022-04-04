class Button extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<button is="load-more-btn">Load more</button>`;

        let btn = this.querySelector("button");

        btn.onclick = (event) => {
            console.log('clicked');
        };
    }
}

customElements.define("load-more-btn", Button);