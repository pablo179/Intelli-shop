const name = document.getElementById("name"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirm = document.getElementById("confirm"),
  print = document.getElementById("print"),
  imgURL = document.getElementById("imgURL");

const submitdata = () => {
  if (name.classList.contains("err")) name.classList.remove("err");
  if (email.classList.contains("err")) email.classList.remove("err");
  if (password.classList.contains("err")) password.classList.remove("err");
  if (confirm.classList.contains("err")) confirm.classList.remove("err");
  print.innerHTML="";
  var succes = false;
  if (password.value !== confirm.value) {
    if (!password.classList.contains("err")) password.classList.add("err");
    if (!confirm.classList.contains("err")) confirm.classList.add("err");
    print.innerHTML = "Error al confirmar contraseña";
    succes = false;
  } else {
    axios
      .post("http://localhost:3000/newUser", {
        name: name.value,
        email: email.value,
        password: password.value,
        imageURL: imgURL.value
      })
      .then(e => {
        console.log(e);
        if (!e.data.user) {
          print.innerHTML = e.data.error;
          succes=false;
        }else{
          window.alert("Usuario creado con exito")
          window.location.href ="login.html"
        }
      })
      .catch(e => {
        console.log(e);
        print.innerHTML = "Error de conexión intente mas tarde";
      });
  }
  return succes;
};
