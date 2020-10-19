export default function getSemaineSA(dateDDR) {
  // calcul millisecondes en jours
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const today = new Date();
  const todayInUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const dateDDRInUTC = Date.UTC(
    dateDDR.getFullYear(),
    dateDDR.getMonth(),
    dateDDR.getDate()
  );

  const diffInDays = Math.floor((todayInUTC, dateDDRInUTC) / MS_PER_DAY);
  const semaineSAInDays = diffInDays + 14;

  const semaineSA = {
    weeks: semaineSAInDays / 7,
    days: semaineSAInDays % 7,
  };

  return semaineSA;
}
