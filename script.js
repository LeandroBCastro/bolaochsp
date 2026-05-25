<script>
fetch('data/ranking.csv')
  .then(response => response.text())
  .then(text => {

    const linhas = text.trim().split('\n');

    const ranking = [];

    linhas.forEach((linha, i) => {

      if (i < 2) return;

      const colunas = linha.split(';');

      ranking.push({
        nome: colunas[0],
        pontos: Number(colunas[1])
      });
    });

    const top3 = ranking
      .sort((a, b) => b.pontos - a.pontos)
      .slice(0, 3);

    document.getElementById('podio').innerHTML = `
      <div class="podio">

        <div class="segundo">
          🥈<br>
          ${top3[1].nome}<br>
          ${top3[1].pontos} pts
        </div>

        <div class="primeiro">
          🥇<br>
          ${top3[0].nome}<br>
          ${top3[0].pontos} pts
        </div>

        <div class="terceiro">
          🥉<br>
          ${top3[2].nome}<br>
          ${top3[2].pontos} pts
        </div>

      </div>
    `;

    let html = '';

    linhas.forEach((linha, i) => {

      const colunas = linha.split(';');

      html += '<tr>';

      colunas.forEach(col => {
        if (i === 1) {
          html += `<th>${col}</th>`;
        } else {
          html += `<td>${col}</td>`;
        }
      });

      html += '</tr>';
    });

    document.getElementById('tabela').innerHTML = html;

  });
</script>
