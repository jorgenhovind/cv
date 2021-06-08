function renderCsv(path, target) {
    d3.text(path, function (data) {
        let parsedCSV = d3.csv.parseRows(data);
        d3.select(target)
            .append("table")

            .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

            .selectAll("td")
            .data(function (d) {
                return d;
            }).enter()
            .append("td")
            .text(function (d) {
                return d;
            });
    })
}

renderCsv("positions.csv", ".positions")
renderCsv("education.csv", ".education")
