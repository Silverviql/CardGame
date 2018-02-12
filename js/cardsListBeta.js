
//Ассоциативный массив
var cardsBeta = [
    { id : 1,
        imagelink : "style/img/Cards/0C.png"
    },
    { id : 2,
        imagelink : "style/img/Cards/0D.png"
    },
    { id : 3,
        imagelink : "style/img/Cards/0H.png"
    },
    { id : 4,
        imagelink : "style/img/Cards/0S.png"
    },
    { id : 5,
        imagelink : "style/img/Cards/2C.png"
    },
    { id : 6,
        imagelink : "style/img/Cards/2D.png"
    },
    { id : 7,
        imagelink : "style/img/Cards/2H.png"
    },
    { id : 8,
        imagelink : "style/img/Cards/2S.png"
    },
    { id : 9,
        imagelink : "style/img/Cards/3C.png"
    },
    { id : 10,
        imagelink : "style/img/Cards/3D.png"
    },
    { id : 11,
        imagelink : "style/img/Cards/3H.png"
    },
    { id : 12,
        imagelink : "style/img/Cards/3S.png"
    },
    { id : 13,
        imagelink : "style/img/Cards/4C.png"
    },
    { id : 14,
        imagelink : "style/img/Cards/4D.png"
    },
    { id : 15,
        imagelink : "style/img/Cards/4H.png"
    },
    { id : 16,
        imagelink : "style/img/Cards/4S.png"
    },
    { id : 17,
        imagelink : "style/img/Cards/5C.png"
    },
    { id : 18,
        imagelink : "style/img/Cards/5D.png"
    },
    { id : 19,
        imagelink : "style/img/Cards/5H.png"
    },
    { id : 20,
        imagelink : "style/img/Cards/5S.png"
    },
    { id : 21,
        imagelink : "style/img/Cards/6C.png"
    },
    { id : 22,
        imagelink : "style/img/Cards/6D.png"
    },
    { id : 23,
        imagelink : "style/img/Cards/6H.png"
    },
    { id : 24,
        imagelink : "style/img/Cards/6S.png"
    },
    { id : 25,
        imagelink : "style/img/Cards/7C.png"
    },
    { id : 26,
        imagelink : "style/img/Cards/7D.png"
    },
    { id : 27,
        imagelink : "style/img/Cards/7H.png"
    },
    { id : 28,
        imagelink : "style/img/Cards/7S.png"
    },
    { id : 29,
        imagelink : "style/img/Cards/8C.png"
    },
    { id : 30,
        imagelink : "style/img/Cards/8D.png"
    },
    { id : 31,
        imagelink : "style/img/Cards/8H.png"
    },
    { id : 32,
        imagelink : "style/img/Cards/8S.png"
    },
    { id : 33,
        imagelink : "style/img/Cards/9C.png"
    },
    { id : 34,
        imagelink : "style/img/Cards/9D.png"
    },
    { id : 35,
        imagelink : "style/img/Cards/9H.png"
    },
    { id : 36,
        imagelink : "style/img/Cards/9S.png"
    },
    { id : 37,
        imagelink : "style/img/Cards/AC.png"
    },
    { id : 38,
        imagelink : "style/img/Cards/AD.png"
    },
    { id : 39,
        imagelink : "style/img/Cards/AH.png"
    },
    { id : 40,
        imagelink : "style/img/Cards/AS.png"
    },
    { id : 41,
        imagelink : "style/img/Cards/JC.png"
    },
    { id : 42,
        imagelink : "style/img/Cards/JH.png"
    },
    { id : 43,
        imagelink : "style/img/Cards/JD.png"
    },
    { id : 44,
        imagelink : "style/img/Cards/JS.png"
    },
    { id : 45,
        imagelink : "style/img/Cards/KC.png"
    },
    { id : 46,
        imagelink : "style/img/Cards/KD.png"
    },
    { id : 47,
        imagelink : "style/img/Cards/KH.png"
    },
    { id : 48,
        imagelink : "style/img/Cards/KS.png"
    },
    { id : 49,
        imagelink : "style/img/Cards/QC.png"
    },
    { id : 50,
        imagelink : "style/img/Cards/QD.png"
    },
    { id : 51,
        imagelink : "style/img/Cards/QH.png"
    },
    { id : 52,
        imagelink : "style/img/Cards/QS.png"
    }
    ];

for (var i = 0; i < 2; i++) {
    var rand = Math.floor(Math.random() * cards.length);
}
document.getElementById("rand").src = ''  + cards[rand] + '';