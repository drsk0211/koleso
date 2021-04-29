window.onload = function () {
  let quiz = [
    "1. Как вы оцениваете сферу своих любовных отношений - выберите от 1 до 10",
    "2. Как вы оцениваете финансовую сферу - выберите от 1 до 10",
    "3. Как вы оцениваете сферу хобби/увлечений - выберите от 1 до 10",
    "4. Как вы оцениваете сферу дружбы - выберите от 1 до 10",
    "5. Как вы оцениваете сферу здоровья - выберите от 1 до 10",
    "6. Как вы оцениваете сферу работы/карьеру - выберите от 1 до 10",
    "7. Как вы оцениваете сферу отношений с семьёй и близкими",
    "8. Как вы оцениваете сферу личного роста, духовного развития (не относится к религии)"];

  let step = 0;
  let result = [];

  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    min: 1,
    max: 10,
    from: 5,
});



  function showQuestion(qNumber) {
    document.querySelector(".question").innerHTML = quiz[step];
  }
  document.querySelector(".cont").onclick = function () {
    event.stopPropagation();
    result[step] = $(".js-range-slider").data.slider;
    console.log(result);
    step++;
    showQuestion(step);
    if (step === 8) {


      var opt = {
        responsive: false,
        maintainAspectRatio: false,
       
      scales: {
        
        r: {
          grid: {
          color: 'white'
          },
          max: 10,
          beginAtZero: true,
          pointLabels: {
            color: 'white',
            font: {
              size: 16,
              
            }
          }
        }
      },
     
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#343a40',
              font: {
                size: 20,
              },
            },
          },

        }
    };

    var dataL = {
      labels: ['Здоровье', 'Отношения', 'Окружение', 'Призвание', 'Обеспеченность', 'Самосовершенствование', 'Яркость жизни', 'Духовность'],
      datasets: [
        {
          label: '',
          borderwidth: 1,
          data: result,
          backgroundColor: [
            '#00C4CD',
            '#8301D5',
            '#FFFC00',
            '#FF7600',
            '#FFA48E',
            '#FFE88E',
            '#00FC96',
            '#FD0081'
          ]
        },
        
      ]
    };

    var ctx = document.getElementById('myChart');
    ctx.height = 700;
    ctx.width = 700;
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: dataL,
      options: opt,
    }
    );

    $(".q").hide();
    $(".button").hide();
    $(".header").hide();
    $("#slider").hide();
    $(".itog").show();
    $(".slider").hide();
  }

}
showQuestion(step);



var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0],
    connect: true,
    tooltips: [true],
    step: 1,
    range: {
        'min': 0,
        'max': 10
    },
    
});


}



/* 
$(function () {
  var handle = $("#custom-handle");
  $("#slider").slider({
    min: 0,
    max: 10,
    animate: "fast",
    create: function () {
      handle.text($(this).slider("value"));
    },
    slide: function (event, ui) {
      handle.text(ui.value);
    }
  });
}); */