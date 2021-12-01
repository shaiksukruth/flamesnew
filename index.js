  document.querySelector(".button").addEventListener("click", function() {
    var Str1;
    Str1 = document.querySelector(".boy").value;
    var str1=Str1.toLowerCase();
    var Str2;
    Str2 = document.querySelector(".girl").value;
    var str2=Str2.toLowerCase();
    var s1 = new Array(26).fill(0);
    var s2 = new Array(26).fill(0);
    var k1 = 0,
      k = 0;
    for (var l = 0; l < str1.length; l++) {
      var c1 = str1[l];
      if (c1 != ' ') {
        var code = c1.charCodeAt(str1[l].toLowerCase());
        k1 = code - 97;
        s1[k1] = s1[k1] + 1;
      }
    }
    for (var l = 0; l < str2.length; l++) {
      var c1 = str2[l];
      if (c1 != ' ') {
        var code = c1.charCodeAt(str1[l]);
        k1 = code - 97;
        s2[k1] = s2[k1] + 1;
      }
    }
    var count1 = 0;
    for (var l = 0; l < s1.length; l++) {
      count1 += Math.abs(s1[l] - s2[l]);
    }
    var flag = 1;
    var len = count1;
    var str = "flames";
    var str3 = "";
    var arr1 = new Array(6).fill(0);
    var count = 0,
      i = 0,
      j = 0,
      y = 6,
      flag = 0,
      k = 0;
    for (i = 0; i < 5; i++) {
      flag = 0;
      for (j = 0; j < len; j++) {
        count++;
        if (count === y) {
          k = count;
          count = 0;
          flag = 1;
        }
      }
      if (count === 0 && flag === 1) {
        str3 = str.replace(str[k - 1], '');
        flag = 0;
        str = str3;
        y--;
        count--;
        if (count === -1) {
          count = 0;
        }
      } else if (count !== 0) {
        arr1[count - 1] = -1;
        str3 = str.replace(str[count - 1], '');
        str = str3;
        y--;
        count--;
        if (count === y) {
          count = 0;
        }
        if (count === -1) {
          count = 0;
        }
      }
    }

    var c = str[0];
    if (len == 0) {
      c = 'x';
    }

    switch (c) {
      case 'f':
        hide();
        function hide() {
          document.querySelector(".boy").style.visibility = "hidden";
          document.querySelector(".girl").style.visibility = "hidden";
          document.querySelector(".button").style.margin = "auto 0";
          document.querySelector(".reload").style.margin = "auto 90px auto 10px";
          document.querySelector(".button").style.visibility ="hidden";
        }

        show();
        function show() {
          document.querySelector(".box").style.padding="0 0 100px 0";
          document.querySelectorAll("h1")[1].innerHTML = "friends 🤝";
          document.querySelector(".box").style.paddingTop="0";

        }
      break;
      case 'l':
        hide1();
        function hide1() {
          document.querySelector(".boy").style.visibility = "hidden";
          document.querySelector(".girl").style.visibility = "hidden";
          document.querySelector(".button").style.margin = "auto 0";
          document.querySelector(".reload").style.margin = "auto 90px auto 10px";
          document.querySelector(".button").style.visibility ="hidden";
        }
        show1();
        function show1() {
          document.querySelectorAll("h1")[1].innerHTML = "lovers 💖";
          document.querySelector(".box").style.padding="0 0 100px 0";
          document.querySelector(".box").style.paddingTop="0";
        }

        break;
      case 'a':
        hide2();
        function hide2() {
          document.querySelector(".boy").style.visibility = "hidden";
          document.querySelector(".girl").style.visibility = "hidden";
          document.querySelector(".button").style.margin = "auto 0";
          document.querySelector(".reload").style.margin = "auto 90px auto 10px";
          document.querySelector(".button").style.visibility ="hidden";
        }
        show2();
        function show2() {
          document.querySelectorAll("h1")[1].innerHTML = "affection 😘";
          document.querySelector(".box").style.padding="0 0 100px 0";
          document.querySelector(".box").style.paddingTop="0";
        }
        break;
      case 'm':
        hide3();

        function hide3() {
          document.querySelector(".boy").style.visibility = "hidden";
          document.querySelector(".girl").style.visibility = "hidden";
          document.querySelector(".button").style.margin = "auto 0";
          document.querySelector(".reload").style.margin = "auto 90px auto 10px";
          document.querySelector(".button").style.visibility ="hidden";
        }
        show3();

        function show3() {
          document.querySelectorAll("h1")[1].innerHTML = "marriage 💑🏻";
          document.querySelector(".box").style.padding="0 0 100px 0";
          document.querySelector(".box").style.paddingTop="0";
        }
        break;
      case 'e':
        hide4();

        function hide4() {
          document.querySelector(".boy").style.visibility = "hidden";
          document.querySelector(".girl").style.visibility = "hidden";
          document.querySelector(".button").style.margin = "auto 0";
          document.querySelector(".reload").style.margin = "auto 90px auto 10px";
          document.querySelector(".button").style.visibility ="hidden";
        }
        show4();

        function show4() {
          document.querySelectorAll("h1")[1].innerHTML = "enemies 😤";
          document.querySelector(".box").style.padding="0 0 100px 0";
          document.querySelector(".box").style.paddingTop="0";
        }
        break;
      case 's':
        hide5();

        function hide5() {
          document.querySelector(".boy").style.visibility = "hidden";
          document.querySelector(".girl").style.visibility = "hidden";
          document.querySelector(".button").style.margin = "auto 0";
          document.querySelector(".reload").style.margin = "auto 90px auto 10px";
          document.querySelector(".button").style.visibility ="hidden";
        }
        show5();

        function show5() {
          document.querySelectorAll("h1")[1].innerHTML = "siblings";
          document.querySelector(".box").style.padding="0 0 100px 0";
          document.querySelector(".box").style.paddingTop="0";
        }
        break;
      default:
      hide6();
      function hide6() {
        document.querySelector(".boy").style.visibility = "hidden";
        document.querySelector(".girl").style.visibility = "hidden";
        document.querySelector(".button").style.margin = "auto 0";
        document.querySelector(".reload").style.margin = "auto 90px auto 10px";
        document.querySelector(".button").style.visibility ="hidden";
      }
      show6();
      function show6() {
        document.querySelectorAll("h1")[1].innerHTML = "Please enter two different names between 2 and 100 characters long!";
        document.querySelectorAll("h1")[1].style.fontSize="20px";
        document.querySelector(".box").style.paddingTop="20px";
      }
      break;
    }
  });

  document.querySelector(".reload").addEventListener("click", function() {

    location.reload();
  });

  // document.querySelector(".button1").addEventListener("click",function(){
  //   show();
  //   function show(){
  //     document.querySelector(".boy").style.visibility="visible";
  //     document.querySelector(".girl").style.visibility="visible";
  //   }
  // });
