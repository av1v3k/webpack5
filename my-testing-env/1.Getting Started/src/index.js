import _ from "lodash";

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let hdr_ele = document.getElementById('headerele');
    hdr_ele.innerHTML = _.capitalize("change the header");
});