if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("ServiceWorker registration successful with scope");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration Failed");
      console.log(error);
    });
}