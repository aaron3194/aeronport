function myFunction(x) {
  //   x = document.querySelector('container-drawer');
  x.classList.toggle('change');
  const btndrawer = document.getElementById('m-d');
  if (btndrawer.style.display === 'block') {
    btndrawer.style.display = 'none';
  } else {
    btndrawer.style.display = 'block';
  }
}

function myFunctions(x) {
  const removeMenu = document.getElementById('m-d');
  const iconRemove = document.getElementById('#icon');
  if (x.matches) {
    // If media query matches
    removeMenu.style.display = 'none';
    iconRemove.style.display = 'none';
  } else {
    removeMenu.style.display = 'none';
    iconRemove.style.display = 'block';
  }
}

var x = window.matchMedia('(max-width: 700px)');
myFunctions(x); // Call listener function at run time
x.addListener(myFunctions); // Attach listener function on state changes
