import { information } from '/src/js/get_info.js';
class Artworks extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let teams = ''
        for (let team of information.art_teams) {
            console.log(team);
            teams += `
                <div class="team-container">
                    <a class="team-name" href="/artworks/?id=${team.id}">${team.title}</a>
                </div>
            `
        }
        this.innerHTML = `
            <link rel="stylesheet" href="/css/artworks.css" />
            <div class="teams-container">
                ${teams}
            </div>
        `
    }
}

window.customElements.define('list-all-artworks', Artworks);