$(".sect-btn").on("click", function (event) {
  event.preventDefault();
  apod();
});

function apod() {
  const artigo = $(".artc")
  const data = $("#date").val();
  const ttl = $(".artc-ttl__nasa");
  const dscc = $(".artc-txt__nasa");
  const img = $(".artc-img__nasa");
  const vdo = $(".artc-vd__nasa");

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${data}`,

    success: function (search) {
      artigo.css("visibility", "visible");
      ttl.text(search.title);
      dscc.text(search.explanation);

      if (search.media_type == "image") {
        img.attr("src", search.url);
        img.css("display", "block");
        vdo.css("display", "none");
      } else {
        vdo.attr("src", search.url);
        img.css("display", "none");
        vdo.css("display", "block");
      }
      return search;
    },

    error: function () {
      artigo.css("display", "flex");
      ttl.text(`Erro na Api`);
      dscc.text(`Por favor, insira uma data entre 16 de junho de 1995 (exceto 17, 18 e 19 de junho de 1995.) e o dia ATUAL.`);
      img.attr("src","./image/findSerch.png");
      img.css("width", "150px")
      vdo.css("display", "none");
    },
  });
}
