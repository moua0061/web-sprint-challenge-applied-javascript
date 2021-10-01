import { headerAppender } from "./header";








const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divClass = document.createElement('div');
  divClass.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;
  divClass.appendChild(headlineDiv);
  console.log(headlineDiv);

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  divClass.appendChild(authorDiv);

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-container');
  authorDiv.appendChild(imgDiv);

  const authorImg = document.createElement('img');
  authorImg.src = article.authorPhoto;
  imgDiv.appendChild(authorImg);

  const span = document.createElement('span');
span.textContent = `By ${article.authorName}`;
  authorDiv.appendChild(span);

  return divClass;
}


import axios from 'axios';

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  const cardContainer = document.querySelector(selector);

  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {
    console.log(resp);

    Object.keys(resp.data.articles).forEach(article => {
      const newArray = resp.data.articles[article]
      newArray.forEach((element) => {
        cardContainer.appendChild(Card(element))
      })
    })

  })
  .catch(err => {
    //do something if failed
    console.log('Your shit ain\'t working !!!!!');
  })
}

export { Card, cardAppender }
