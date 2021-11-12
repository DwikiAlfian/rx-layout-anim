var scrollAnim = document.querySelectorAll(".rx-an-fa");

function scrollPosition() {
  if (scrollAnim.length > 0) {
    let scrollAnimLength;
    let scrollAnimPositionTop =
      document.documentElement.scrollTop - window.innerHeight * 0.65;
    let scrollAnimPositionBottom =
      document.documentElement.scrollTop + window.innerHeight * 0.65;
    for (
      scrollAnimLength = 0;
      scrollAnimLength < scrollAnim.length;
      scrollAnimLength++
    ) {
      if (
        scrollAnim[scrollAnimLength].getBoundingClientRect().top <
        document.documentElement.scrollTop
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
