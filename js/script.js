window.onload = () => {
  let goBackUp = document.getElementById('goBackUp');

  goBackUp.onclick = () => {
    scrollTop();
  }

  openCloseMenu();
}

window.onscroll = () => {
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  if((scrollPos / scrollHeight) > 0.2) {
    goBackUp.style.opacity = "1";
    goBackUp.style.pointerEvents = "all";
  } else {
    goBackUp.style.opacity = "0";
    goBackUp.style.pointerEvents = "none";
  }
}

scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

openCloseMenu = () => {
  let openClose = document.getElementById('openClose');
  let menu = document.getElementById('menu');

  let menuStats = false;

  openClose.onclick = () => {
    if(menuStats == false) {
      menu.style.width = "100%";
      menu.style.height = "100vh";
      openClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      menuStats = true;
      document.body.style.overflow = "hidden";
    } else {
      menu.style.width = "0%";
      menu.style.height = "0vh";
      openClose.innerHTML = '<i class="fa-solid fa-bars"></i>';
      menuStats = false;
      document.body.style.overflow = "visible";
    }
  }

  let getClick = document.querySelectorAll('.getClick');

  getClick.forEach(e => {
    e.onclick = () => {
      menuStats = false;
  
      menu.style.width = "0%";
      menu.style.height = "0vh";
      openClose.innerHTML = '<i class="fa-solid fa-bars"></i>';
      menuStats = false;
      document.body.style.overflow = "visible";
    }
  });
}