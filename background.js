let allResources = document.getElementsByClassName("values resources groupresources");
let res = ""
for (let i = 1; i < allResources.length; i++) {
    let m = parseInt(allResources[i].querySelector(".metal").firstChild.textContent.replaceAll('.',''))/1000
    let c = parseInt(allResources[i].querySelector(".crystal").firstChild.textContent.replaceAll('.',''))/1000
    let d = parseInt(allResources[i].querySelector(".deuterium").firstChild.textContent.replaceAll('.',''))/1000
    res += Math.round(m) + "\t" + Math.round(c) + "\t" + Math.round(d) + "\n"
}
console.log(res);
