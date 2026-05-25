fetch('data/ranking.csv')
  .then(response => response.text())
  .then(text => {
    const linhas = text.trim().split("\n");
    let html = "";

    linhas.forEach((linha, i) => {
      const colunas = linha.split(",");

      html += "<tr>";

      colunas.forEach(col => {
        if (i === 0) {
          html += `<th>${col}</th>`;
        } else {
          html += `<td>${col}</td>`;
        }
      });

      html += "</tr>";
    });

    document.getElementById("tabela").innerHTML = html;
  });
