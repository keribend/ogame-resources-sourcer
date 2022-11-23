let Metal = Number(document.getElementById("resources_metal").dataset.raw/1000);
let Crystal = Number(document.getElementById("resources_crystal").dataset.raw/1000);
let Deuterium = Number(document.getElementById("resources_deuterium").dataset.raw/1000);
let res = Math.round(Metal) + "\t" + Math.round(Crystal) + "\t" + Math.round(Deuterium);
console.log(res);
