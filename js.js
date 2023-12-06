const dugme = document.querySelector("#klik");
dugme.addEventListener("click", ucitajPodatke);

function ucitajPodatke() {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      prikazi(this.responseText);
    }
  });
  xhr.open("GET", "https://fakestoreapi.com/products");
  xhr.send();
  console.log("text!");
}

function prikazi(data) {
  console.log(JSON.parse(data));
  let objNiz = JSON.parse(data);
  let ispis = "";
  objNiz.forEach((element) => {
    ispis += `<div class="artikal"><h1>${element.title}</h1>
    <img src="${element.image}" class="slika" alt="${element.title}"></div> `;
  });
  document.getElementById("container").innerHTML = ispis;
}
