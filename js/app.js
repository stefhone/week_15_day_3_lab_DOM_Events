document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('#new-item-form');
  formElement.addEventListener('submit', handleFormSubmit);

});


const handleFormSubmit = function (event) {
  event.preventDefault();
  
 
  
  
  const listItem = document.createElement('li');
  listItem.classList = 'list-item';
  listItem.textContent = ``;
  const resultListItem = document.querySelector('#reading-list');
  resultListItem.appendChild(listItem);

  const newH1 = document.createElement('h1');
  newH1.textContent = event.target.title.value; 
  const newH1Container = document.querySelector('.list-item');
  newH1Container.appendChild(newH1); 

  const newH3 = document.createElement('h3');
  newH3.textContent = event.target.author.value; 
  const newH3Container = document.querySelector('.list-item');
  newH3Container.appendChild(newH3); 

  const newP = document.createElement('p');
  newP.textContent = event.target.category.value; 
  const newPContainer = document.querySelector('.list-item');
  newPContainer.appendChild(newP); 

  const formElement = document.querySelector('#new-item-form');
  formElement.reset();
}
