const onePiece = new Book('One Piece', 'Eichiro Oda', "1041", 'Not read')
let myLibrary = [onePiece];



function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(ev) {
  ev.preventDefault();
  let newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('read').value
  ) 
  myLibrary.push(newBook);
  document.querySelector('form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit-btn').addEventListener('click', addBookToLibrary)
})

const container = document.getElementById('card-holder');
function addBookCard(ev) {
    myLibrary.forEach(book => {
    console.log(book)
    const card = document.createElement('div');
    card.classList = 'card-body';
    const content = `
    <div class="card-body">
          <h5>${book.title}</h5>
          <p>${book.author}</p>
          <p>${book.pages}</p>
          <p>${book.read}</p>
        </div>`;
    container.innerHTML += content;
    myLibrary = []
})}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit-btn').addEventListener('click', addBookCard)
})