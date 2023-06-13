window.onload = function () {
    const params = new URLSearchParams(window.location.href);
    var x1 = params.get("width");
    var y1 = params.get("height");
    var f = params.get("floor");
    var cubicle = params.get("cubicle");
    var img;
    //const office = params.get("office");
    console.log(cubicle);
    if (cubicle != null) {
        switch (cubicle) {
            case "1":
                console.log("selected");
                x1 = 188;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "2":
                console.log("selected");
                x1 = 237;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "3":
                console.log("selected");
                x1 = 280;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "4":
                console.log("selected");
                x1 = 313;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "5":
                console.log("selected");
                x1 = 346;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "6":
                console.log("selected");
                x1 = 388;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "7":
                console.log("selected");
                x1 = 505;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "8":
                console.log("selected");
                x1 = 548;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "9":
                console.log("selected");
                x1 = 582;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "10":
                console.log("selected");
                x1 = 615;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "11":
                console.log("selected");
                x1 = 648;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "12":
                console.log("selected");
                x1 = 682;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "13":
                console.log("selected");
                x1 = 714;
                y1 = 23;
                f = "first";
                img = document.getElementById("first");
                break;
            case "14":
                console.log("selected");
                x1 = 262;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "15":
                console.log("selected");
                x1 = 290;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "16":
                console.log("selected");
                x1 = 317;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "17":
                console.log("selected");
                x1 = 345;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "18":
                console.log("selected");
                x1 = 372;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "19":
                console.log("selected");
                x1 = 399;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "20":
                console.log("selected");
                x1 = 427;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "21":
                console.log("selected");
                x1 = 455;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "22":
                console.log("selected");
                x1 = 399;
                y1 = 120;
                f = "first";
                img = document.getElementById("first");
                break;
            case "23":
                console.log("selected");
                x1 = 427;
                y1 = 120;
                f = "first";
                img = document.getElementById("first");
                break;
            case "24":
                console.log("selected");
                x1 = 455;
                y1 = 120;
                f = "first";
                img = document.getElementById("first");
                break;
            case "25":
                console.log("selected");
                x1 = 526;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "26":
                console.log("selected");
                x1 = 556;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "27":
                console.log("selected");
                x1 = 587;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "28":
                console.log("selected");
                x1 = 618;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "29":
                console.log("selected");
                x1 = 648;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "30":
                console.log("selected");
                x1 = 526;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "31":
                console.log("selected");
                x1 = 556;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "32":
                console.log("selected");
                x1 = 587;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "33":
                console.log("selected");
                x1 = 618;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "34":
                console.log("selected");
                x1 = 648;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "35":
                console.log("selected");
                x1 = 515;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "36":
                console.log("selected");
                x1 = 550;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "37":
                console.log("selected");
                x1 = 580;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "38":
                console.log("selected");
                x1 = 615;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "39":
                console.log("selected");
                x1 = 646;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "40":
                console.log("selected");
                x1 = 646;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "41":
                console.log("selected");
                x1 = 718;
                y1 = 87;
                f = "first";
                img = document.getElementById("first");
                break;
            case "42":
                console.log("selected");
                x1 = 747;
                y1 = 87;
                f = "first";
                img = document.getElementById("first");
                break;
            case "43":
                console.log("selected");
                x1 = 718;
                y1 = 145;
                f = "first";
                img = document.getElementById("first");
                break;
            case "44":
                console.log("selected");
                x1 = 747;
                y1 = 145;
                f = "first";
                img = document.getElementById("first");
                break;
            case "45":
                console.log("selected");
                x1 = 446;
                y1 = 185;
                f = "first";
                img = document.getElementById("first");
                break;
            case "46":
                console.log("selected");
                x1 = 446;
                y1 = 224;
                f = "first";
                img = document.getElementById("first");
                break;
            case "47":
                console.log("selected");
                x1 = 446;
                y1 = 257;
                f = "first";
                img = document.getElementById("first");
                break;
            case "48":
                console.log("selected");
                x1 = 446;
                y1 = 287;
                f = "first";
                img = document.getElementById("first");
                break;
            case "49":
                console.log("selected");
                x1 = 488;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "50":
                console.log("selected");
                x1 = 516;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "51":
                console.log("selected");
                x1 = 543;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "52":
                console.log("selected");
                x1 = 572;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "53":
                console.log("selected");
                x1 = 597;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "54":
                console.log("selected");
                x1 = 488;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "55":
                console.log("selected");
                x1 = 516;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "56":
                console.log("selected");
                x1 = 543;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "57":
                console.log("selected");
                x1 = 572;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "58":
                console.log("selected");
                x1 = 597;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "59":
                console.log("selected");
                x1 = 445;
                y1 = 331;
                f = "first";
                img = document.getElementById("first");
                break;
            case "60":
                console.log("selected");
                x1 = 445;
                y1 = 362;
                f = "first";
                img = document.getElementById("first");
                break;
            case "61":
                console.log("selected");
                x1 = 455;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "62":
                console.log("selected");
                x1 = 498;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "63":
                console.log("selected");
                x1 = 525;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "64":
                console.log("selected");
                x1 = 552;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "65":
                console.log("selected");
                x1 = 580;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "66":
                console.log("selected");
                x1 = 606;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "67":
                console.log("selected");
                x1 = 635;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "68":
                console.log("selected");
                x1 = 663;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "69":
                console.log("selected");
                x1 = 498;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "70":
                console.log("selected");
                x1 = 525;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "71":
                console.log("selected");
                x1 = 551;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "72":
                console.log("selected");
                x1 = 580;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "73":
                console.log("selected");
                x1 = 606;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "74":
                console.log("selected");
                x1 = 635;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "75":
                console.log("selected");
                x1 = 663;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "76":
                console.log("selected");
                x1 = 707;
                y1 = 332;
                f = "first";
                img = document.getElementById("first");
                break;
            case "77":
                console.log("selected");
                x1 = 707;
                y1 = 362;
                f = "first";
                img = document.getElementById("first");
                break;
            case "78":
                console.log("selected");
                x1 = 707;
                y1 = 392;
                f = "first";
                img = document.getElementById("first");
                break;
            case "79":
                console.log("selected");
                x1 = 495;
                y1 = 440;
                f = "first";
                img = document.getElementById("first");
                break;
            case "80":
                console.log("selected");
                x1 = 530;
                y1 = 440;
                f = "first";
                img = document.getElementById("first");
                break;
            case "81":
                console.log("selected");
                x1 = 568;
                y1 = 440;
                f = "first";
                img = document.getElementById("first");
                break;
             case "82":
                console.log("selected");
                x1 = 220;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "83":
                console.log("selected");
                x1 = 265;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "84":
                console.log("selected");
                 x1 = 297;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "85":
                console.log("selected");
                x1 = 395;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "86":
                console.log("selected");
                x1 = 427;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "87":
                console.log("selected");
                x1 = 454;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "88":
                console.log("selected");
                 x1 = 480;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "89":
                console.log("selected");
                x1 = 508;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "90":
                console.log("selected");
               x1 = 534;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "91":
                console.log("selected");
                x1 = 561;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "92":
                console.log("selected");
                  x1 = 588;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "93":
                console.log("selected");
                 x1 = 615;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "94":
                console.log("selected");
                 x1 = 643;
                y1 = 25;
                f = "second";
                img = document.getElementById("second");
                break;
            case "95":
                console.log("selected");
                x1 = 680;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "96":
                console.log("selected");
                x1 = 290;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "97":
                console.log("selected");
                x1 = 317;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "98":
                console.log("selected");
                x1 = 345;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "99":
                console.log("selected");
                x1 = 372;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "100":
                console.log("selected");
                x1 = 399;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "101":
                console.log("selected");
                x1 = 427;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "102":
                console.log("selected");
                x1 = 455;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "103":
                console.log("selected");
                x1 = 399;
                y1 = 120;
                f = "first";
                img = document.getElementById("first");
                break;
            case "104":
                console.log("selected");
                x1 = 427;
                y1 = 120;
                f = "first";
                img = document.getElementById("first");
                break;
            case "105":
                console.log("selected");
                x1 = 455;
                y1 = 120;
                f = "first";
                img = document.getElementById("first");
                break;
            case "106":
                console.log("selected");
                x1 = 526;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "107":
                console.log("selected");
                x1 = 556;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "108":
                console.log("selected");
                x1 = 587;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "109":
                console.log("selected");
                x1 = 618;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "110":
                console.log("selected");
                x1 = 648;
                y1 = 73;
                f = "first";
                img = document.getElementById("first");
                break;
            case "111":
                console.log("selected");
                x1 = 526;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "112":
                console.log("selected");
                x1 = 556;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "113":
                console.log("selected");
                x1 = 587;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "114":
                console.log("selected");
                x1 = 618;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "115":
                console.log("selected");
                x1 = 648;
                y1 = 104;
                f = "first";
                img = document.getElementById("first");
                break;
            case "116":
                console.log("selected");
                x1 = 515;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "117":
                console.log("selected");
                x1 = 550;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "118":
                console.log("selected");
                x1 = 580;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "119":
                console.log("selected");
                x1 = 615;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "120":
                console.log("selected");
                x1 = 646;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "121":
                console.log("selected");
                x1 = 646;
                y1 = 146;
                f = "first";
                img = document.getElementById("first");
                break;
            case "122":
                console.log("selected");
                x1 = 718;
                y1 = 87;
                f = "first";
                img = document.getElementById("first");
                break;
            case "123":
                console.log("selected");
                x1 = 747;
                y1 = 87;
                f = "first";
                img = document.getElementById("first");
                break;
            case "124":
                console.log("selected");
                x1 = 718;
                y1 = 145;
                f = "first";
                img = document.getElementById("first");
                break;
            case "125":
                console.log("selected");
                x1 = 747;
                y1 = 145;
                f = "first";
                img = document.getElementById("first");
                break;
            case "126":
                console.log("selected");
                x1 = 446;
                y1 = 185;
                f = "first";
                img = document.getElementById("first");
                break;
            case "127":
                console.log("selected");
                x1 = 446;
                y1 = 224;
                f = "first";
                img = document.getElementById("first");
                break;
            case "128":
                console.log("selected");
                x1 = 446;
                y1 = 257;
                f = "first";
                img = document.getElementById("first");
                break;
            case "129":
                console.log("selected");
                x1 = 446;
                y1 = 287;
                f = "first";
                img = document.getElementById("first");
                break;
            case "130":
                console.log("selected");
                x1 = 488;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "131":
                console.log("selected");
                x1 = 516;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "132":
                console.log("selected");
                x1 = 543;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "133":
                console.log("selected");
                x1 = 572;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "134":
                console.log("selected");
                x1 = 597;
                y1 = 254;
                f = "first";
                img = document.getElementById("first");
                break;
            case "135":
                console.log("selected");
                x1 = 488;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "136":
                console.log("selected");
                x1 = 516;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "137":
                console.log("selected");
                x1 = 543;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "138":
                console.log("selected");
                x1 = 572;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "140":
                console.log("selected");
                x1 = 597;
                y1 = 285;
                f = "first";
                img = document.getElementById("first");
                break;
            case "141":
                console.log("selected");
                x1 = 445;
                y1 = 331;
                f = "first";
                img = document.getElementById("first");
                break;
            case "142":
                console.log("selected");
                x1 = 445;
                y1 = 362;
                f = "first";
                img = document.getElementById("first");
                break;
            case "143":
                console.log("selected");
                x1 = 455;
                y1 = 85;
                f = "first";
                img = document.getElementById("first");
                break;
            case "144":
                console.log("selected");
                x1 = 498;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "145":
                console.log("selected");
                x1 = 525;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "146":
                console.log("selected");
                x1 = 552;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "147":
                console.log("selected");
                x1 = 580;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "148":
                console.log("selected");
                x1 = 606;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "150":
                console.log("selected");
                x1 = 635;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "151":
                console.log("selected");
                x1 = 663;
                y1 = 357;
                f = "first";
                img = document.getElementById("first");
                break;
            case "152":
                console.log("selected");
                x1 = 498;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "153":
                console.log("selected");
                x1 = 525;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "154":
                console.log("selected");
                x1 = 551;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "155":
                console.log("selected");
                x1 = 580;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "156":
                console.log("selected");
                x1 = 606;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "157":
                console.log("selected");
                x1 = 635;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "158":
                console.log("selected");
                x1 = 663;
                y1 = 386;
                f = "first";
                img = document.getElementById("first");
                break;
            case "159":
                console.log("selected");
                x1 = 707;
                y1 = 332;
                f = "first";
                img = document.getElementById("first");
                break;
            case "160":
                console.log("selected");
                x1 = 707;
                y1 = 362;
                f = "first";
                img = document.getElementById("first");
                break;
            default:
                document.write("<center>Error fetching cubicle!</center>");
        }
    }
    if (f === "first") {
        img = document.getElementById("first");
    }
    if (f === "second") {
        img = document.getElementById("second");
    }
    //create canvaas
    console.log(img);
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 1000);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "blue");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(x1, y1, 25, 25);


};
