if(!("user" in localStorage)){
  window.location.href ="login.html"
  }
  var miarray=['uno','dos','tres'];

  localStorage.setItem("names",JSON.stringify(miarray));
  var storedNames = JSON.parse(localStorage.getItem("names"));
  console.log(storedNames)

  document.getElementById("show-sidebar").addEventListener("click",()=>
    document.getElementById("sidebar").classList.remove("hidden")
  )
  document.getElementById("close-sidebar").addEventListener("click",()=>
    document.getElementById("sidebar").classList.add("hidden")
  )