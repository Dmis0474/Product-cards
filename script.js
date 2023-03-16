let count = 0;

$(".card-button-two").on("click", function () {
  let card = $(".card-nav");
  let imgtodrag = $(this)
    .parent(".buttons")
    .parent(".content")
    .parent(".card")
    .find("img")
    .eq(0);
  if (imgtodrag) {
    var imgclone = imgtodrag
      .clone()
      .offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left,
      })
      .css({
        opacity: "0.8",
        position: "absolute",
        height: "150px",
        width: "150px",
        objectFit: "cover",
        "z-index": "100",
      })
      .appendTo($("body"))
      .animate(
        {
          top: card.offset().top + 20,
          left: card.offset().left + 30,
          width: 75,
          height: 75,
        },
        1000,
        "easeInOutExpo"
      );

    setTimeout(function () {
      count++;
      $(".card-nav .item-count").text(count);
    }, 1500);
    imgclone.animate(
      {
        width: 0,
        height: 0,
      },
      function () {
        $(this).detach();
      }
    );
  }
});
