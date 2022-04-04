class Nav extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<nav><a href="/home" data-link="home">home</a><a href="/detail" data-link="detail">detail</a></nav>`;
  }
}
customElements.define("main-nav", Nav);
