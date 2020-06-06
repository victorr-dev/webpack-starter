export default class Main {
  render () {
    const app = document.querySelector('#app')

    app.insertAdjacentHTML('beforeend', '<h1>Hola Mundo</h1>')
  }
};
