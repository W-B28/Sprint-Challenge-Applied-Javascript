// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

const Article = (data) => {
  //create elements of card
  const card = document.createElement('div'),
    headline = document.createElement('div'),
    authorCont = document.createElement('div'),
    imgCont = document.createElement('div'),
    cardImg = document.createElement('img'),
    cardAuthor = document.createElement('span')

// create classes
card.classList.add('card');
headline.classList.add('headline');
authorCont.classList.add('author');
imgCont.classList.add('img-container');

// add content
headline.textContent = data.headline;
cardImg.src = data.authorPhoto;
cardAuthor.textContent = data.authorName;

// append
card.append(headline);
card.append(authorCont);
authorCont.append(cardAuthor);
authorCont.append(imgCont);
imgCont.append(cardImg);

return card;

}


const cards = document.querySelector('.cards-container')



axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response)
    // The Object.entries() method returns an array of a given object's own
    // enumerable string-keyed property
    // [key, value] pairs, in the same order as that provided by a for...in loop
    const articleTitle = Object.entries(response.data.articles);
    console.log(articleTitle);

    articleTitle.forEach(item =>{
      console.log(item);
      item[1].forEach(data =>{
        const newCard = Article(data);
        cards.append(newCard);
      });
    });
  })
  .catch(error => {
    console.log('Error loading data', error);
  });
