$(".sect-btn").on("click", async function (event) {
  event.preventDefault();
  apod();

  const inputDate = $("#date").val();
  const url = `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${inputDate}`;
  const api = await fetch(url).then((response) => response.json());

  $(".artc").css("display", "block");
  $(".artc-ttl__nasa").html(`${api.title}`);
  $(".artc-txt__nasa").html(`(${api.explanation})`);



  function apod() {
    const data = $("#date").val();
    const img = $(".artc-img__nasa");
    const video = $(".artc-vd__nasa");
    const descricao = $(".artc-txt__nasa");
    const titulo = $('.artc-ttl__nasa');

    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${data}`,

      success: function (pesquisa) {
        titulo.text(pesquisa.title);
        descricao.text(pesquisa.explanation);
        if (pesquisa.media_type == "image") {
          img.attr("src", pesquisa.url);
          img.css("display", "flex");
          video.css("display", "none");
        } else {
          video.attr("src", pesquisa.url);
          img.css("display", "none");
          video.css("display", "flex");
        }
      },
      error: function () {
        titulo.text(`Error in Api. Read the documentation!`);
        img.attr("src","https://media.theobjective.com/app/uploads/2021/10/09122935/nuestro-error-404.jpeg");
        img.css("width", "200px")
        video.css("display", "none");
        descricao.css("display", "none");
      }
    });
  }

});
