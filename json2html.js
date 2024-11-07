export default function json2html(data) {
    // Get the unique keys from the data array to use as table headers
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
  
    // Start building the HTML table
    let html = `<table data-user="sumageethikabrahmakanti@gmail.com">`;
    
    // Create table header
    html += "<thead><tr>";
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
    
    // Create table body
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += "</tr>";
    });
    html += "</tbody></table>";
  
    return html;
}
