import _ from "lodash";

function buttonclicked() {
    let hdr_ele = document.getElementById('headerele');
    hdr_ele.innerHTML = _.capitalize("change the header");

}

export default buttonclicked;