'use strict';
// const inputBox = document.getElementById('input_box');
// const btn = document.querySelector('.searchButton');
// btn.addEventListener('click', async function () {
//   console.log('button clicked!');
//   console.log(inputBox.value);
//   var apiKey = '191ce4ec';
//   const res = await fetch(`http://www.omdbapi.com/?apikey=[${apiKey}]&`);
//   const data = await res.json();
//   console.log(data);
// });

const superHit = document.getElementById('super-hit');
const good = document.getElementById('good');
const flop = document.getElementById('flop');

$(document).ready(function () {
  $('#movieForm').submit(function (event) {
    event.preventDefault();

    var movie = $('#movie').val();
    var apiKey = '191ce4ec';

    var result = '';
    var url = 'http://www.omdbapi.com/?apikey=' + apiKey;

    $.ajax({
      method: 'GET',
      url: url + '&t=' + movie,
      success: function (data) {
        console.log(data);
        result = `
        <div class = "div-output">
  <div class = "image-align">
<img style= "float:left"class="img-thumnail" src= "${data.Poster}"/>
</div>
<br/>
<div>
<h1>Name: ${data.Title}</h1>
<h1>Release date : ${data.Released}</h1>
<h1>Duration : ${data.Runtime}</h1>
<h1>Cast : ${data.Actors}</h1>
<h1>Language : ${data.Language}</h1>
<h1>Director : ${data.Director}</h1>
<h1>Writer : ${data.Writer}</h1>
<h1>Imdb Rating : ${data.imdbRating}</h1>
<h1>Awards : ${data.Awards}</h1>
<h1>Total box-office collection in USD : ${data.BoxOffice}</h1>
</div>


</div>
        
        `;
        $('#result').html(result);
        console.log(data.imdbRating);
        var imdb = data.imdbRating;
        if (imdb > 7) {
          console.log('super-hit');
          superHit.classList.add('green');
        } else if (imdb < 3) {
          console.log('flop');
          flop.classList.add('red');
        } else {
          console.log('good');
          good.classList.add('yellow');
        }
      },
    });
  });
});
