import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const fetchCSV = async (songName) => {
    const notes = await d3.csv(`../assets/csv/${songName}.csv`);
    return notes;
}

export { fetchCSV };