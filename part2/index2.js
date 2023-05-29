const text = "<p>Убираем <a>все</a> ненужные <br>теги</p>"
const clearText = text.replace(/(<([^>]+)>)/gi, '');

console.log(clearText);