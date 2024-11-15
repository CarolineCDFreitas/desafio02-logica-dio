function getRankingData(win, defeat) {
  const rankingData = win - defeat;

  let level;

  if (win < 10) {
    level = "Ferro";
  } else if (win >= 11 && win <= 20) {
    level = "Bronze";
  } else if (win >= 21 && win <= 50) {
    level = "Prata";
  } else if (win >= 51 && win <= 80) {
    level = "Ouro";
  } else if (win >= 81 && win <= 90) {
    level = "Diamante";
  } else if (win >= 91 && win <= 100) {
    level = "Lendário";
  } else if (win >= 101) {
    level = "Imortal";
  }

  return `O Herói tem saldo de ${rankingData} está no nível de ${level}`;
}

let ranking = getRankingData(4, 40);
console.log(ranking);
