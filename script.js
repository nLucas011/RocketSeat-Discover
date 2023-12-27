function ToggleMode() { 
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a imagem // 
  const img = document.querySelector("#profile img")

  // substituir imagem // 
  if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png') // se estiver com light mode, mudar a imagem//
  } else {
      img.setAttribute('src', './assets/Avatar.png') // se nao tiver light mode, manter a imagem normaç//
  } 
}