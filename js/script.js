$(".sect-btn").on("click", async function (event) {
  event.preventDefault();

  const data = $("#date").val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${data}`,
    success: function () {
      
    },
    error: function () {
      
    },
  });
});
