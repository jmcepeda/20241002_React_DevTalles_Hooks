const apikey = "qliUqRdzYPcj7pkqNG8NzCVOU0UgyQvz";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apikey}`);
const peticion2 = fetch(
  `https://api.giphy.com/v1/gifs/random?apikey=${apikey}`
);
const peticion3 = fetch(
  `https://api.giphy.com/v1/gifs/random?apikey=${apikey}`
);

peticion
  .then((resp) => {
    resp.json().then((data) => {
      console.log(data.data.images.original.url);
    });
  })
  .catch((err) => {
    console.log(err);
  });

peticion2
  .then((resp) => resp.json())
  .then((data) => console.log(data.data.images.original.url))
  .catch((err) => {
    console.log(err);
  });

peticion3
  .then((resp) => resp.json())
  .then(({ data }) => {
    const url = data.images.original.url;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch((err) => {
    console.log(err);
  });
