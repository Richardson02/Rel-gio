function carregar() {
  // HORAS
  var hours = window.document.getElementById("hours");
  var data = new Date();
  var hora = data.getHours();
  hours.innerHTML = `${hora}`;

  if (hora >= 0 && hora < 10) {
    hours.innerHTML = `0${hora}`;
  }

  if (hora >= 6 && hora < 12) {
    /* MANHÃ */document.body.style.background = `#A3D5FF`;
  } else if (hora >= 12 && hora < 18) {
    /* TARDE */document.body.style.background = `#FFD580`;
  } else if (hora >= 18 && hora < 24) {
    /* NOITE */ document.body.style.background = `#010119`;
  } else if (hora >= 0 && hora < 5) {
    /* MADRUGADA */document.body.style.background = `#01012b`;
  } else if (hora >= 5 && hora < 6) {
    /* FIM DA MADRUGADA */ document.body.style.background = `#5f85a5`;
  }

  // MINUTOS
  var minutes = window.document.getElementById("minutes");
  var data = new Date();
  var minuto = data.getMinutes();
  minutes.innerHTML = `${minuto}`;

  if (minuto >= 0 && minuto < 10) {
    minutes.innerHTML = `0${minuto}`;
  }

  // SEGUNDOS
  var seconds = window.document.getElementById("seconds");
  var data = new Date();
  var segundo = data.getSeconds();
  seconds.innerHTML = `${segundo}`;

  if (segundo >= 0 && segundo < 10) {
    seconds.innerHTML = `0${segundo}`;
  }
}
