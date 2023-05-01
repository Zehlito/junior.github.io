const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg") {
    myImage.setAttribute("src", "imagens/2023-04-23 (2).png");
  } else {
    myImage.setAttribute("src", "imagens/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg");
  }
};