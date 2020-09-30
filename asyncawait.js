let btn = document.querySelector("#btnDescargar");
let img = document.querySelector("#imgDia");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=61t4SWatz1mQHBcp5VeiICaBobQpoN8apshCDii0"
    // profe, esta es mi API key, pero de todos modos no funciona, me sale {"code" :404, "msg" : "No "}
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;