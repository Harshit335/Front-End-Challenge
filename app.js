let slide = 0;

function next() {
  if (slide == 0) {
    document.querySelector("#john").style.display = "block";
    document.querySelector("#tanya").style.display = "none";
    slide += 1;
  } else {
    document.querySelector("#john").style.display = "none";
    document.querySelector("#tanya").style.display = "block";
    slide = 0;
  }
}


function prev() {
  if (slide == 0) {
    document.querySelector("#tanya").style.display = "none";
    document.querySelector("#john").style.display = "block";
    slide += 1;
  } else {
    document.querySelector("#john").style.display = "none ";
    document.querySelector("#tanya").style.display = "block";
    slide = 0;
  }
}
