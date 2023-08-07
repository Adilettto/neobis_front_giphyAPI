const apiKey = "DBoRdKcUH2gHqN0Q5W2eTRB6zjJRmnoQ";

let searchBtn = document.querySelector(".search__btn");

let generateGif = () => {
  
  
  document.querySelector(".wrapper").style.display = "block";

  // default gif value
  let q = document.querySelector(".search-box").value;
  // gifs limit
  let gifCount = 6;

  //api URL
  let URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;

  document.querySelector(".wrapper").innerHTML = "";

  fetch(URL)
    .then((res) => res.json())
    .then((info) => {
      console.log(info.data);

      let gifsData = info.data;
      gifsData.forEach((gif) => {
        let container = document.createElement("div");
        container.classList.add("container");
        let card = document.createElement("img");
        
        card.setAttribute("src", gif.images.downsized_medium.url);

    
        document.querySelector(".wrapper").style.display = "grid";

        container.append(card);
        document.querySelector(".wrapper").append(container);
      });
    });
};

//Generate GIFS when the user clicks on Search or on screen load
searchBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);
