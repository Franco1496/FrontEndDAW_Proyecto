const customInitFunctions = () => {
  $(function () {
    var set = function () {
      let listElements = document.querySelectorAll('.list__button--click');

      listElements.forEach(listElement => {
        listElement.addEventListener('click', () => {

          listElement.classList.toggle('arrow');

          let height = 0;
          let menu = listElement.nextElementSibling;
          if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
          }

          menu.style.height = `${height}px`;

        })
      });
    }
    $(window).ready(set);
    $(window).on("resize", set);
  });


}

customInitFunctions();
