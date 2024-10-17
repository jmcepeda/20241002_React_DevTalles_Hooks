// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    const apiKey = "jJjbFssbVLY0evvOTsSibXNMI1VMrtm4";

    const urlAPI = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    console.log(urlAPI);
    const resp = await fetch(urlAPI);

    const { data } = await resp.json();

    console.log(typeof data.images.original.url);
    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No se encontró  la imagen";
  }
};

// getImagen();
