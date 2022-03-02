let myLibrary = [];



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
    let card = document.createElement('div');
    card.classList = 'card-body';
      
    const content = `
    <div class="card-body" data-index="${myLibrary.indexOf(book)}">
          <h4>${book.title}</h5>
          <p>${book.author}</p>
          <p>${book.pages}</p>
          <p>${book.read}</p>
          <button class='remove-book-btn' data-index="${myLibrary.indexOf(book)}">Remove</button>
        </div>`;
    
    container.innerHTML += content;
    myLibrary = []
    document.querySelectorAll('.remove-book-btn').forEach(btn => {btn.addEventListener('click',() => {
    card = btn.closest("div")
    const parent = card.parentNode;
    parent.removeChild(card);})})
    
})}



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit-btn').addEventListener('click', addBookCard)
})

function openForm() {
  document.getElementById('form-container').style.display = 'flex';
}

function closeForm() {
  document.getElementById('form-container').style.display = 'none';
}

