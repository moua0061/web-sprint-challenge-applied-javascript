

const container = document.querySelector('.header-container');

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerMain = document.createElement('div');
  headerMain.classList.add('header');

  const span = document.createElement('span');
  span.classList.add('date');
  span.textContent = date; 
  headerMain.appendChild(span);

  console.log(headerMain);

  const h1 = document.createElement('h1');
  h1.textContent = title; 
  headerMain.appendChild(h1);

  const span2 = document.createElement('span');
  span2.classList.add('temp');
  span2.textContent = temp; 
  headerMain.appendChild(span2);

  return headerMain;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const container = document.querySelector(selector);
  container.appendChild(Header('Lambda Times', 'October 1\, 2021', '81\u00B0'));
}

export { Header, headerAppender }
