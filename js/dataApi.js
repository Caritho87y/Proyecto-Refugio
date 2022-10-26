// DATOS DE API 

// const URL_API = "https://api.thedogapi.com/v1/breeds"
const endPoint =
  "https://api.thedogapi.com/v1/breeds?api_key=1cc44288-fc7a-474f-ad28-978a9f5cedf0&limit=10";

const HTMLResponse = document.querySelector(".api");



fetch(endPoint)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      const li = document.createElement("li");
      li.className="lista"
      li.innerHTML = `<img src=${el.image.url}> <div><h3>Nombre: ${el.name}</h3> <p>Edad: ${el.life_span}</p> <button>Adoptar</button></div>`;
      HTMLResponse.appendChild(li);
    });

  })
  .catch((err) => console.log(err));
  
//---------------------------------------------------------------
  // LOADER

  window.onload=function(){
    var contenedor= document.getElementById('contenedor_carga');

    contenedor.style.visibility= 'hidden';
    contenedor.style.opacity='0';
  }
   
  
