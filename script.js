function verify() {
  let input = document.getElementById("txt");
  let value = input.value;
  if (value == null || value <= 0 || value >= 4000)
    return alert("Valor inválido!");
  if (isNaN(value)) {
    function RomToArab1(n) {
      switch (n) {
        case "I":
          return 1;
        case "V":
          return 5;
        case "X":
          return 10;
        case "L":
          return 50;
        case "C":
          return 100;
        case "D":
          return 500;
        case "M":
          return 1000;
      }
    }
    function roman_to_Int() {
      let text = document.getElementById("txt");
      let t = String(text.value);
      let txt = t;
      let num = RomToArab1(txt.charAt());
      let pre, now;
      let res = document.getElementById("res");

      for (let i = 1; i < txt.length; i++) {
        now = RomToArab1(txt.charAt(i));
        pre = RomToArab1(txt.charAt(i - 1));
        if (now <= pre) {
          num += now;
        } else {
          num = num - pre * 2 + now;
        }
      }
      if (num >= 4000) return alert("O número é maior que 3999.");
      if (/[ABEFGHJKNOPQRSTUWYZ]/.test(value)) {
        return alert("Erro: A string contém letras proibidas!");
      } else if (/\d/.test(value)) {
        return alert("O valor inserido é inválido!");
      } else if (/IIII|VVVV|XXXX|LLLL|CCCC|DDDD|MMMM/.test(value)) {
        return alert("A letra não pode ser repetida mais de três vezes!");
      } else {
        res.innerHTML = `O número romano <strong>${t}</strong> em arábico é igual a <strong>${num}</strong>.`;
      }
    }
    roman_to_Int();
  } else {
    const numeros = [
      {
        numero: 1000,
        romano: "M",
      },
      {
        numero: 900,
        romano: "CM",
      },
      {
        numero: 500,
        romano: "D",
      },
      {
        numero: 400,
        romano: "CD",
      },
      {
        numero: 100,
        romano: "C",
      },
      {
        numero: 90,
        romano: "XC",
      },
      {
        numero: 50,
        romano: "L",
      },
      {
        numero: 40,
        romano: "XL",
      },
      {
        numero: 10,
        romano: "X",
      },
      {
        numero: 9,
        romano: "IX",
      },
      {
        numero: 5,
        romano: "V",
      },
      {
        numero: 4,
        romano: "IV",
      },
      {
        numero: 1,
        romano: "I",
      },
    ];
    function conversao() {
      let number = document.getElementById("txt");
      let n = Number(number.value);
      let letraroman = "";
      let input = n;
      let res = document.getElementById("res");
      for (let i = 0; i < numeros.length; i++) {
        if (numeros[i].numero <= input) {
          input -= numeros[i].numero;
          letraroman += numeros[i].romano;
          i--;
        }
      }
      res.innerHTML = `O número arábico <strong>${n}</strong> em romano se escreve <strong>${letraroman}</strong>.`;
    }

    conversao();
  }
}
