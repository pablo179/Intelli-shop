const email = document.getElementById("email"),
  print = document.getElementById("print"),
  password = document.getElementById("password");

  if("user" in localStorage){
    window.location.href ="sale.html"
  }

const submitdata = () => {
  print.innerHTML = "";
  var succes = false;
  axios
    .post("http://localhost:3000/login", {
      email: email.value,
      password: password.value
    })
    .then(e => {
      console.log(e);
      if (!e.data.user) {
        print.innerHTML = e.data.error;
        succes = false;
      } else {
        localStorage.setItem('user', e.data.user.name);
        localStorage.setItem('email', e.data.user.email);
        localStorage.setItem('image', e.data.user.imageURL);
        window.location.href ="sale.html"
      }
    })
    .catch(e => {
      console.log(e);
      print.innerHTML = "Error de conexión intente mas tarde";
      /* succes = false; */
    });
  return succes;
};
