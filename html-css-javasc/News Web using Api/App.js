const year = moment().year();
document.getElementById("year").innerHTML = year;



var NewsDataArr = [];

const General = document.getElementById('General');
const Business = document.getElementById('Business');
const Sports = document.getElementById('Sports');
const Technology = document.getElementById('Technology');
const Entertainment = document.getElementById('Entertainment');


General.addEventListener('click',function(){
  let heading = document.getElementById('heading');
  news.innerHTML = '';
  getNews('General');
  heading.innerHTML = 'General';
  heading = '';
});


Business.addEventListener('click',function(){
  let heading = document.getElementById('heading');
  news.innerHTML = '';
  getNews('Business');
  heading.innerHTML = 'Business';
  heading = '';
});


Sports.addEventListener('click',function(){
  let heading = document.getElementById('heading');
  news.innerHTML = '';
  getNews('Sports');
  heading.innerHTML = 'Sports';
  heading = '';
});


Technology.addEventListener('click',function(){
  let heading = document.getElementById('heading');
  news.innerHTML = '';
  getNews('Technology');
  heading.innerHTML = 'Technology';
  heading = '';
});


Entertainment.addEventListener('click',function(){
  let heading = document.getElementById('heading');
  news.innerHTML = '';
  getNews('Entertainment');
  heading.innerHTML = 'Entertainment';
  heading = '';
});

// search data.///////////////////

let getNews = (searchs) => {
  const apiKey = 'da82a580dc16bf30bcdc67cc94974662';
  url = `https://gnews.io/api/v4/search?q=${searchs}&lang=en&country=us&max=8&apikey=da82a580dc16bf30bcdc67cc94974662&`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let news = document.getElementById('news');
      const articles = data.articles;
      // console.log(articles)
      for (var i = 0; i < articles.length; i++) {
        const { image, title, content,publishedAt} = articles[i];
        news.innerHTML += `<a href="#" onclick="golive('${articles[i].url}')">
          <div class="shadow card-group col-lg-3 col-md-4 col-sm-6 p-2 me-auto ms-auto">
            <div class="card">
              <img src="${image}" class="card-img-top img" alt="" />
              <div class="card-body">
                <h5 class="card-title">${title.slice(0, 30)}....</h5>
                <p class="card-text">${content.slice(0, 150)}....</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated ${publishedAt.slice(0, 10)}</small>
              </div>
            </div>
          </div>
        </a>`;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

getNews('Pakistan');

let golive = (url) => {
  window.location.href = url;
};

let NewsSearch = () => {
  let search = document.getElementById('search');
  let heading = document.getElementById('heading');
  let news = document.getElementById('news');

  const searchs = search.value;
  if (searchs === '') {
    heading.innerHTML = 'General';
  } else {
    heading.innerHTML = searchs;
    heading = '';
  }

  news.innerHTML = '';
  getNews(searchs);
  searchs = '';
};

