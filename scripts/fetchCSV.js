import { csv } from "https://cdn.jsdelivr.net/npm/d3-fetch@3/+esm";

const fetchCSV = async (songName) => {
    const notes = await csv(`../assets/csv/${songName}.csv`);
    return notes;
}

export { fetchCSV };