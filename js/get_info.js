let info_json;
const language_list = ['zh', 'en'];
// Get Site Language
const URL_search = new URLSearchParams(window.location.search);
let site_language = URL_search.get('lang');
// If getting no language from url param, use 'zh'
if (!language_list.includes(site_language)) site_language = 'zh';

document.querySelector('.language-changeable').classList.add(site_language);

async function get_info() {
    let res = await fetch("../static/info.json");
    let json_data = await res.json();
    info_json = json_data;
}

function main() {
    const information = info_json[site_language];
    console.log(information);
}

get_info().then(() => main());

