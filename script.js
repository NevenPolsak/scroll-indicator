function myFunction() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;

  document.getElementById("indicator").style.width = scrolled + "%";
}

window.onscroll = function () {
  myFunction();
};
