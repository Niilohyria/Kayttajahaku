fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showUsers(data);
  });
function showUsers(data) {
  const container = document.getElementById('Testi');

  const heading = document.createElement('h2');
  heading.textContent = `Tietoja ${data.length} käyttäjästä`;
  container.appendChild(heading);

  data.forEach(user => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${user.nimi}</h3>
      <p><strong>Sähköposti:</strong> ${user.email}</p>
    `;
    container.appendChild(div);
  });
}