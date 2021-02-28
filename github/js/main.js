// 전역을 더럽히지 않게하기 위해서 즉시 실행 함수를 실행
// window, document를 즉시실행 함수가 인수로 받게 되고 함수에 전달
// 모듈화
(function (window, document) {
  "use strict";

  // 요소를 담고 있는 변수는 앞에 $표시를 해주는 경우가 많다
  const $toggles = document.querySelectorAll(".toggle"); // NodeList, 유사 배열, 배열이 아님
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener("click", () => {
    toggleElements();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      OffElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, (toggle) => {
      toggle.classList.toggle("on");
    });
  }

  function OffElements() {
    [].forEach.call($toggles, (toggle) => {
      toggle.classList.remove("on");
    });
  }
})(window, document);
