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
                y1 = 23;
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
            case "60a":
                console.log("selected");
                x1 = 445;
                y1 = 400;
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
                y1 = 25;
               f = "second";
                img = document.getElementById("second");
                break;
            case "96":
                console.log("selected");
                  x1 = 227;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "97":
                console.log("selected");
                x1 = 257;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "98":
                console.log("selected");
                x1 = 287;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "99":
                console.log("selected");
                 x1 = 317;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "100":
                console.log("selected");
                  x1 = 227;
                y1 = 103;
               f = "second";
                img = document.getElementById("second");
                break;
            case "101":
                console.log("selected");
                     x1 = 257;
                y1 = 103;
               f = "second";
                img = document.getElementById("second");
                break;
            case "102":
                console.log("selected");
                    x1 = 287;
                y1 = 103;
               f = "second";
                img = document.getElementById("second");
                break;
            case "103":
                console.log("selected");
                x1 = 317;
                y1 = 103;
               f = "second";
                img = document.getElementById("second");
                break;
            case "104":
                console.log("selected");
                 x1 = 381;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "105":
                console.log("selected");
                 x1 = 411;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "106":
                console.log("selected");
                 x1 = 441;
                y1 = 76;
               f = "second";
                img = document.getElementById("second");
                break;
            case "107":
                console.log("selected");
                x1 = 381;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "108":
                console.log("selected");
               x1 = 411;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "109":
                console.log("selected");
                x1 = 441;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "110":
                console.log("selected");
                x1 = 510;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "111":
                console.log("selected");
               x1 = 540;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "112":
                console.log("selected");
              x1 = 569;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "113":
                console.log("selected");
              x1 = 599;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "114":
                console.log("selected");
               x1 = 629;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "115":
                console.log("selected");
                x1 = 659;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "116":
                console.log("selected");
                x1 = 510;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "117":
                console.log("selected");
               x1 = 540;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "118":
                console.log("selected");
               x1 = 569;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "119":
                console.log("selected");
              x1 = 599;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "120":
                console.log("selected");
              x1 = 629;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "121":
                console.log("selected");
              x1 = 659;
                y1 = 103;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "122":
                console.log("selected");
               x1 = 429;
                y1 = 151;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "123":
                console.log("selected");
               x1 = 496;
                y1 = 151;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "124":
                console.log("selected");
            x1 = 528;
                y1 = 151;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "125":
                console.log("selected");
               x1 = 558;
                y1 = 151;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "126":
                console.log("selected");
              x1 = 588;
                y1 = 151;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "127":
                console.log("selected");
                x1 = 620;
                y1 = 151;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "128":
                console.log("selected");
                x1 = 720;
                y1 = 89;
                f = "second";
                img = document.getElementById("second");
                break;
            case "129":
                console.log("selected");
                x1 = 720;
                y1 = 117;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "130":
                console.log("selected");
                x1 = 720;
                y1 = 145;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "131":
                console.log("selected");
                 x1 = 428;
                y1 = 185;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "132":
                console.log("selected");
                x1 = 495;
                y1 = 185;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "133":
                console.log("selected");
                x1 = 523;
                y1 = 185;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "134":
                console.log("selected");
               x1 = 553;
                y1 = 185;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "135":
                console.log("selected");
                x1 = 583;
                y1 = 185;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "136":
                console.log("selected");
                x1 = 610;
                y1 = 185;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "137":
                console.log("selected");
                x1 = 428;
                y1 = 234;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "138":
                console.log("selected");
                x1 = 482;
                y1 = 234;
                 f = "second";
                img = document.getElementById("second");
                break;
             case "139":
                console.log("selected");
                x1 = 513;
                y1 = 234;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "140":
                console.log("selected");
                 x1 = 543;
                y1 = 234;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "141":
                console.log("selected");
                 x1 = 583;
                y1 = 234;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "142":
                console.log("selected");
                x1 = 615;
                y1 = 234;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "143":
                console.log("selected");
                x1 = 428;
                y1 = 262;
                 f = "second";
                img = document.getElementById("second");
                break;
            case "144":
                console.log("selected");
                x1 = 482;
                y1 = 262;
                f = "second";
                img = document.getElementById("second");
                break;
            case "145":
                console.log("selected");
                x1 = 510;
                y1 = 262;
                f = "second";
                img = document.getElementById("second");
                break;
            case "146":
                console.log("selected");
                x1 = 540;
                y1 = 262;
                f = "second";
                img = document.getElementById("second");
                break;
            case "147":
                console.log("selected");
              x1 = 428;
                y1 = 305;
                f = "second";
                img = document.getElementById("second");
                break;
            case "148":
                console.log("selected");
                 x1 = 483;
                y1 = 305;
                f = "second";
                img = document.getElementById("second");
                break;
             case "149":
                console.log("selected");
                 x1 = 511;
                y1 = 305;
                f = "second";
                img = document.getElementById("second");
                break;
            case "150":
                console.log("selected");
                 x1 = 541;
                y1 = 305;
                f = "second";
                img = document.getElementById("second");
                break;
            case "151":
                console.log("selected");
                x1 = 428;
                y1 = 333;
                f = "second";
                img = document.getElementById("second");
                break;
            case "152":
                console.log("selected");
                x1 = 483;
                y1 = 333;
                f = "second";
                img = document.getElementById("second");
                break;
            case "153":
                console.log("selected");
                x1 = 510;
                y1 = 333;
                f = "second";
                img = document.getElementById("second");
                break;
            case "154":
                console.log("selected");
                x1 = 540;
                y1 = 333;
                f = "second";
                img = document.getElementById("second");
                break;
            case "155":
                console.log("selected");
                x1 = 428;
                y1 = 367;
                f = "second";
                img = document.getElementById("second");
                break;
            case "156":
                console.log("selected");
                x1 = 476;
                y1 = 367;
                f = "second";
                img = document.getElementById("second");
                break;
            case "157":
                console.log("selected");
                x1 = 502;
                y1 = 367;
                f = "second";
                img = document.getElementById("second");
                break;
            case "158":
                console.log("selected");
                x1 = 527;
                y1 = 367;
                f = "second";
                img = document.getElementById("second");
                break;
            case "159":
                console.log("selected");
                x1 = 428;
                y1 = 397;
                f = "second";
                img = document.getElementById("second");
                break;
            case "160":
                console.log("selected");
                 x1 = 428;
                y1 = 423;
                f = "second";
                img = document.getElementById("second");
                break;
            case "161":
                console.log("selected");
                 x1 = 675;
                y1 = 423;
                f = "second";
                img = document.getElementById("second");
                break;
            case "162":
                console.log("selected");
                 x1 = 371;
                y1 = 151;
                f = "second";
                img = document.getElementById("second");
                break;
            case "163":
                console.log("selected");
                x1 = 550;
                y1 = 367;
                f = "second";
                img = document.getElementById("second");
                break;
            case "164":
                console.log("selected");
                x1 = 476;
                y1 = 412;
                f = "second";
                img = document.getElementById("second");
                break;
            case "165":
                console.log("selected");
                x1 = 476;
                y1 = 439;
                f = "second";
                img = document.getElementById("second");
                break
            case "166":
                console.log("selected");
                x1 = 502;
                y1 = 412;
                f = "second";
                img = document.getElementById("second");
                break;
            case "167":
                console.log("selected");
                x1 = 502;
                y1 = 439;
                f = "second";
                img = document.getElementById("second");
                break;
            case "168":
                console.log("selected");
                x1 = 527;
                y1 = 412;
                f = "second";
                img = document.getElementById("second");
                break;
            case "169":
                console.log("selected");
                x1 = 527;
                y1 = 439;
                f = "second";
                img = document.getElementById("second");
                break;
            case "170":
                console.log("selected");
                x1 = 553;
                y1 = 412;
                f = "second";
                img = document.getElementById("second");
                break;
            case "171":
                console.log("selected");
                x1 = 553;
                y1 = 439;
                f = "second";
                img = document.getElementById("second");
                break;
            case "172":
                console.log("selected");
                x1 = 579;
                y1 = 412;
                f = "second";
                img = document.getElementById("second");
                break;
            case "173":
                console.log("selected");
                x1 = 579;
                y1 = 439;
                f = "second";
                img = document.getElementById("second");
                break;
              case "174":
                console.log("selected");
                x1 = 468;
                y1 = 76;
                f = "second";
                img = document.getElementById("second");
                break;
            case "175":
                console.log("selected");
                x1 = 468;
                y1 = 104;
                f = "second";
                img = document.getElementById("second");
                break;
            case "176":
                console.log("selected");
                x1 = 673;
                y1 = 148;
                f = "second";
                img = document.getElementById("second");
                break;
case "300":
                console.log("selected");
                x1 = 88;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "301":
                console.log("selected");
                x1 = 133;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "302":
                console.log("selected");
                x1 = 182;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "303":
                console.log("selected");
                x1 = 229;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "303a":
                console.log("selected");
                x1 = 304;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "304":
                console.log("selected");
                x1 = 578;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
           case "304a":
                console.log("selected");
                x1 = 538;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "305":
                console.log("selected");
                x1 = 625;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "306":
                console.log("selected");
                x1 = 673;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "307":
                console.log("selected");
                x1 = 735;
                y1 = 21;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "308":
                console.log("selected");
                x1 = 123;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "309":
                console.log("selected");
                x1 = 166;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "310":
                console.log("selected");
                x1 = 211;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "311":
                console.log("selected");
                x1 = 256;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "312":
                console.log("selected");
                x1 = 301;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "313":
                console.log("selected");
                x1 = 346;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "314":
                console.log("selected");
                x1 = 391;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "315":
                console.log("selected");
                x1 = 465;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "316":
                console.log("selected");
                x1 = 510;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "317":
                console.log("selected");
                x1 = 555;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "318":
                console.log("selected");
                x1 = 600;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "319":
                console.log("selected");
                x1 = 645;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "320":
                console.log("selected");
                x1 = 690;
                y1 = 86;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "321":
                console.log("selected");
                x1 = 123;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "322":
                console.log("selected");
                x1 = 166;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "323":
                console.log("selected");
                x1 = 211;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "324":
                console.log("selected");
                x1 = 256;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "325":
                console.log("selected");
                x1 = 301;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "326":
                console.log("selected");
                x1 = 346;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "327":
                console.log("selected");
                x1 = 391;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "328":
                console.log("selected");
                x1 = 465;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "329":
                console.log("selected");
                x1 = 510;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "330":
                console.log("selected");
                x1 = 555;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "331":
                console.log("selected");
                x1 = 600;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "332":
                console.log("selected");
                x1 = 645;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "333":
                console.log("selected");
                x1 = 690;
                y1 = 138;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "334":
                console.log("selected");
                x1 = 116;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "335":
                console.log("selected");
                x1 = 161;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "336":
                console.log("selected");
                x1 = 212;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "337":
                console.log("selected");
                x1 = 257;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "338":
                console.log("selected");
                x1 = 310;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "339":
                console.log("selected");
                x1 = 355;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "340":
                console.log("selected");
                x1 = 408;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "341":
                console.log("selected");
                x1 = 452;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "342":
                console.log("selected");
                x1 = 503;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "343":
                console.log("selected");
                x1 = 548;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
            case "344":
                console.log("selected");
                x1 = 600;
                y1 = 195;
                f = "newfirst";
                img = document.getElementById("newfirst");
                break;
case "400":
                console.log("selected");
                x1 = 138;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "401":
                console.log("selected");
                x1 = 183;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "402":
                console.log("selected");
                x1 = 232;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "403":
                console.log("selected");
                x1 = 279;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
           case "403a":
                console.log("selected");
                x1 = 390;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break
            case "404":
                console.log("selected");
                x1 = 578;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "405":
                console.log("selected");
                x1 = 626;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "406":
                console.log("selected");
                x1 = 672;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "407":
                console.log("selected");
                x1 = 730;
                y1 = 21;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "408":
                console.log("selected");
                x1 = 96;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "409":
                console.log("selected");
                x1 = 143;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "410":
                console.log("selected");
                x1 = 187;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "411":
                console.log("selected");
                x1 = 231;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "412":
                console.log("selected");
                x1 = 278;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "413":
                console.log("selected");
                x1 = 320;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "414":
                console.log("selected");
                x1 = 365;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "415":
                console.log("selected");
                x1 = 437;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "416":
                console.log("selected");
                x1 = 482;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "417":
                console.log("selected");
                x1 = 526;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "418":
                console.log("selected");
                x1 = 571;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "419":
                console.log("selected");
                x1 = 616;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "420":
                console.log("selected");
                x1 = 660;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "421":
                console.log("selected");
                x1 = 706;
                y1 = 86;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "422":
                console.log("selected");
                x1 = 96;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "423":
                console.log("selected");
                x1 = 143;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "424":
                console.log("selected");
                x1 = 187;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "425":
                console.log("selected");
                x1 = 231;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "426":
                console.log("selected");
                x1 = 278;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "427":
                console.log("selected");
                x1 = 320;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "428":
                console.log("selected");
                x1 = 365;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "429":
                console.log("selected");
                x1 = 437;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "430":
                console.log("selected");
                x1 = 482;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "431":
                console.log("selected");
                x1 = 526;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "432":
                console.log("selected");
                x1 = 571;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "433":
                console.log("selected");
                x1 = 616;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "434":
                console.log("selected");
                x1 = 660;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "435":
                console.log("selected");
                x1 = 706;
                y1 = 140;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "436":
                console.log("selected");
                x1 = 117;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "437":
                console.log("selected");
                x1 = 162;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "438":
                console.log("selected");
                x1 = 214;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "439":
                console.log("selected");
                x1 = 258;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "440":
                console.log("selected");
                x1 = 310;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "441":
                console.log("selected");
                x1 = 355;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "442":
                console.log("selected");
                x1 = 406;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "443":
                console.log("selected");
                x1 = 450;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "444":
                console.log("selected");
                x1 = 502;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "445":
                console.log("selected");
                x1 = 547;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "446":
                console.log("selected");
                x1 = 600;
                y1 = 198;
                f = "newsecond";
                img = document.getElementById("newsecond");
                break;
            case "shop":
                console.log("selected");
                 x1 = 444;
                y1 = 488;
                f = "first";
                img = document.getElementById("first");
                break;
            case "newhire":
                console.log("selected");
                 x1 = 444;
                y1 = 488;
                f = "first";
                img = document.getElementById("first");
                break;
             case "lobby":
                console.log("selected");
                 x1 = 155;
                y1 = 118;
                f = "first";
                img = document.getElementById("first");
                break;
            case "lobbydesk":
                console.log("selected");
                x1 = 185;
                y1 = 118;
                f = "first";
                img = document.getElementById("first");
                break;
            case "ceo":
                console.log("selected");
                 x1 = 124;
                y1 = 24;
                f = "first";
                img = document.getElementById("first");
                break;
             case "ceoadmin":
                console.log("selected");
                 x1 = 175;
                y1 = 80;
                f = "first";
                img = document.getElementById("first");
                break;
            case "fieldservice":
                console.log("selected");
                 x1 = 428;
                y1 = 482;
                f = "second";
                img = document.getElementById("second");
                break;
            case "newlayout1":
                console.log("selected");
                x1 = 446;
                y1 = 224;
                f = "newlayout1";
                img = document.getElementById("first");
                break;
            case "remote":
                console.log("selected");
                x1 = 444;
                y1 = 488;
                f = "first";
                img = document.getElementById("first");
                break;
            default:
                document.write("<center>Error fetching cubicle! Please contact IT!</center>");
        }
    }
    if (f === "first") {
        img = document.getElementById("first");
    }
    if (f === "second") {
        img = document.getElementById("second");
    }
        if (f === "newfirst") {
        img = document.getElementById("newfirst");
    }
        if (f === "newsecond") {
        img = document.getElementById("newsecond");
    }

    try {
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
    if (f === "newlayout1") {
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 25, 100);
    }
    if (f === "first") {
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 25, 25);
    }

    if (f === "second") {
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 25, 25);
    }
        
    // --- NEW FIRST FLOOR ---
    if (f === "newfirst") {
        // Draw the office marker on the map
        ctx.fillStyle = grd; 
        ctx.fillRect(x1, y1, 25, 25);
        
        // Label on the map marker
   // --- Legend below the image ---
        var legendY = img.height + 30; // Positions legend 30px below the image
        ctx.fillStyle = "#000000"; // Black text for legend
         ctx.font = "bold 14px Arial";
        ctx.fillText("New Addition: First Floor", 200, legendY + 18);

             ctx.fillStyle = grd;
        ctx.fillRect(20, legendY, 25, 25); // Blue Square
        
        ctx.fillStyle = "#000000"; // Black text for legend
        ctx.font = "bold 14px Arial";
        ctx.fillText(" = Office", 50, legendY + 18);
    }

    // --- NEW SECOND FLOOR ---
    if (f === "newsecond") {
        // Draw the office marker on the map
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 25, 25);
        
        // Label on the map marker
 // --- Legend below the image ---
        var legendY = img.height + 30; // Positions legend 30px below the image
        ctx.fillStyle =  "#000000"; // Black text for legend
        ctx.font = "bold 14px Arial";
        ctx.fillText("New Addition: Second Floor", 200, legendY + 18);

        // --- Legend below the image ---
        var legendY = img.height + 30; // Positions legend 30px below the image
        ctx.fillStyle = grd;
        ctx.fillRect(20, legendY, 25, 25); // Blue Square
        
        ctx.fillStyle = "#000000"; // Black text for legend
        ctx.font = "bold 14px Arial";
        ctx.fillText(" = Office", 50, legendY + 18);
    }

    // Standard floors (maintaining original 25x25 logic)
    if (f === "first" || f === "second") { 
        ctx.fillStyle = grd; 
        ctx.fillRect(x1, y1, 25, 25); 
    }

      if (cubicle === "fieldservice") {
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 250, 25);
        ctx.fillStyle = "#ffffff"; //<======= here
        ctx.font = "12px Arial";
        ctx.fillText("Field Services (No Cubicle: Visiting Sites)",x1 + 18, y1 + 17);
    }
    if (cubicle === "newhire") {
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 250, 25);
        ctx.fillStyle = "#ffffff"; //<======= here
        ctx.font = "12px Arial";
        ctx.fillText("Location Unknown (Coming Soon!)",x1 + 18, y1 + 17);
    }
 if (cubicle === "shop") {
        ctx.fillStyle = grd;
        ctx.fillRect(x1, y1, 200, 25);
        ctx.fillStyle = "#ffffff"; //<======= here
        ctx.font = "12px Arial";
        ctx.fillText("Shop Area (Manufacturing)",x1 + 18, y1 + 17);
 }
 if (cubicle === "remote") {
     ctx.fillStyle = grd;
     ctx.fillRect(x1, y1, 200, 25);
     ctx.fillStyle = "#ffffff"; //<======= here
     ctx.font = "12px Arial";
     ctx.fillText("Remote Worker (Offsite)",x1 + 18, y1 + 17);
 }
}
catch(err) {
  //document.getElementById("demo").innerHTML = err.message;
}
   
// --- NEW: Hide loader and show canvas ---
// This runs after the window (and images) are loaded and the canvas is drawn
try {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myCanvas").style.display = "block";
} catch (e) {
    console.error("Error swapping loader and canvas:", e);
}
// --- END NEW ---


};











