document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('#new-item-form');
  formElement.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});


const handleFormSubmit = function (event) {
  event.preventDefault();

  // 1 create element which is a function that is going to create our list item
  const readingListItem = createReadingListItem(event.target);
  // 2 give new element content - NO CONTENT REQUIRED SO CAN SKIP THIS PART
  // 3 add to the DOM attach to parent element, unordered list with id 'readling-list'
  const readingList = document.querySelector('#reading-list');
  // 4 use DOM method appendChild
  readingList.appendChild(readingListItem);

  event.target.reset();
 
}

const createReadingListItem = function (form) { 
  const readingListItem = document.createElement('li');
  readingListItem.classList = 'list-item';

  const title = document.createElement('h2');
  title.textContent = form.title.value; 
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value; 
  readingListItem.appendChild(author); 

  const category = document.createElement('p');
  category.textContent = form.category.value; 
  readingListItem.appendChild(category); 

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}
