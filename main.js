// <!-- Example of what your HTML should look like -->
// <article id="colored-reindeer">
//     <section style="color: Blue">Dasher</section>
//     <section style="color: Red">Dancer</section>
//     etc...
// </article>
import {coloredReindeerBuilder} from './reindeer.js';

const reindeerElement = document.getElementById("colored-reindeer")
let htmlString = ""
//takes reindeer array from reindeer .js, loops over to build an html string that is injected into index.html

const reindeerArray = coloredReindeerBuilder()

for (const reindeer of reindeerArray){
    htmlString +=  `<section style="color: ${reindeer.color}">${reindeer.name}</section>`
}
// console.log(htmlString)
reindeerElement.innerHTML = htmlString