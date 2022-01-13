var scrollAnim = document.querySelectorAll(".rx-an-fa");

function scrollPosition() {
  if (scrollAnim.length > 0) {
    let scrollAnimLength;
    for (
      scrollAnimLength = 0;
      scrollAnimLength < scrollAnim.length;
      scrollAnimLength++
    ) {
      if (
        scrollAnim[scrollAnimLength].getBoundingClientRect().top <
        window.innerHeight * 0.8
      ) {
        scrollAnim[scrollAnimLength].classList.add("rx-an-fa-in");
      }
    }
  }
}
scrollPosition();
window.onscroll = function () {
  scrollPosition();
};
