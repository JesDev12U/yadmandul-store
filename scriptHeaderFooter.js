fetch("inicioSesionClientes.html")
  .then((response) => response.text())
  .then((html) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let header = doc.querySelector("header");
    let footer = doc.querySelector("footer");
    document.querySelector("header").innerHTML = header.innerHTML;
    document.querySelector("footer").innerHTML = footer.innerHTML;
  });
