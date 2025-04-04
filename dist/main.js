import { series } from './data.js';
const tableBody = document.querySelector("#series-table tbody");
const averageText = document.getElementById("average-seasons");
let totalSeasons = 0;
series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
});
const average = (totalSeasons / series.length).toFixed(2);
averageText.innerHTML = `Average seasons: ${average}`;
