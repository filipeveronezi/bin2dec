function bin2Dec() {
  let bin = document.querySelector("#binary").value;
  let dec = 0;

  for (let i = bin.length - 1; i >= 0; i--) {
    if (bin[i] != 0 && bin[i] != 1) {
      alert("You must type a binary number!");
      return;
    }
    let multiplier = Math.pow(2, i);

    console.log(multiplier);

    dec += bin[bin.length - 1 - i] * multiplier;

    console.log(dec);
  }

  document.querySelector("#result").value = dec.toString();
}
