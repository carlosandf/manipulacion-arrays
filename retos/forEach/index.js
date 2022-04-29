const tasks = [
  { title: 'hacer la cena', state: true },
  { title: 'hacer la limpieza', state: false },
  { title: 'sacar al perro', state: true },
  { title: 'lavar los platos', state: false }
]

const render = document.getElementById('app');
const nodes = []
tasks.forEach(elem => {
  const node =
    `
  <li>
    ${elem.title}
    <input
      type = "checkbox"
      ${ elem.state ? 'checked' : '' }
    />
  </li>
  `
  nodes.push(node)
})

app.innerHTML = nodes.join('')