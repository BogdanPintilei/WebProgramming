var Menu = ["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5"];

var nav = document.createElement("nav");
nav.setAttribute("id", "menu");
    
    var parent_ul = document.createElement("ul");
    parent_ul.setAttribute("class","parent-menu");

    for (var j=0; j<Menu.length; j++) {    
    
        var li_home = document.createElement("li");
            var text = "li_" + j;
            li_home.setAttribute("id",text);
            var a_home = document.createElement("a");
            a_home.setAttribute("href","#");
            var text = Menu[j];
            var txt_home = document.createTextNode(text);
            a_home.appendChild(txt_home);
            li_home.appendChild(a_home);    
        parent_ul.appendChild(li_home);
    }

    nav.appendChild(parent_ul);
document.body.appendChild(nav);

$('#li_0').click(function(){ 
    check_prev();
    if (!document.getElementById("div_1")) {
        create_Menu1();
    }
    
});

$('#li_1').click(function(){ 
    check_prev();
    if (!document.getElementById("div_2")) {
        create_Menu2();
    }
});

$('#li_2').click(function(){ 
    check_prev();
    if (!document.getElementById("div_3")) {
        create_Menu3();
    }
});

$('#li_3').click(function(){ 
    check_prev();
    if (!document.getElementById("div_4")) {
        create_Menu4();
    }
});

$('#li_4').click(function(){ 
    check_prev();
    if (!document.getElementById("div_5")) {
        create_Menu5();
    }
});

function check_prev() {
    if (document.getElementById("div_1")) {document.getElementById("div_1").remove();}
    if (document.getElementById("div_2")) {document.getElementById("div_2").remove();}
    if (document.getElementById("div_3")) {document.getElementById("div_3").remove();}
    if (document.getElementById("div_4")) {document.getElementById("div_4").remove();}
    if (document.getElementById("div_5")) {document.getElementById("div_5").remove();}
}

function create_Menu1() {
    
    var text_1 = ["1. Mopsul este o rasă de câini de mici dimensiuni, caracterizați de o față puternic ridată.", 
                  "1. Blana este fină și strălucitoare, corpul compact cu mușchi bine dezvoltați.", 
                  "1. Funcția lor este de animale de companie, fiind descriși prin sintagma multum in parvo."
    ];
    var div_1 = document.createElement("div");
        div_1.setAttribute("id","div_1");
    for (var i=0; i<3; i++) {
        var div = document.createElement("div");
            var p_text_1 = document.createElement("p");
                var txt = text_1[i];
                var txtt =  document.createTextNode(txt);
            p_text_1.appendChild(txtt);
        div.appendChild(p_text_1);
        div_1.appendChild(div);
    }
    div_1.appendChild(div);
    
    for (var i=0; i<2; i++) {
        var img = document.createElement("img");
            img.setAttribute('src','img.jpg')
            img.setAttribute('height', '300px');
            img.setAttribute('width', '300px');
            img.style.cssText = 'margin: 10px';
        div_1.appendChild(img);
    }
    document.body.appendChild(div_1);
}

function create_Menu2() {
    
    var text_2 = ["2. Mopsul este o rasă de câini de mici dimensiuni, caracterizați de o față puternic ridată.", 
                  "2. Blana este fină și strălucitoare, corpul compact cu mușchi bine dezvoltați.", 
                  "2. Funcția lor este de animale de companie, fiind descriși prin sintagma multum in parvo."
    ];
    var div_2 = document.createElement("div");
        div_2.setAttribute("id","div_2");
    for (var i=0; i<3; i++) {
        var div = document.createElement("div");
            var p_text_1 = document.createElement("p");
                var txt = text_2[i];
                var txtt =  document.createTextNode(txt);
            p_text_1.appendChild(txtt);
        div.appendChild(p_text_1);
        div_2.appendChild(div);
    }
    div_2.appendChild(div);
    
    for (var i=0; i<2; i++) {
        var img = document.createElement("img");
            img.setAttribute('src','img.jpg')
            img.setAttribute('height', '300px');
            img.setAttribute('width', '300px');
            img.style.cssText = 'margin: 10px';
        div_2.appendChild(img);
    }
    document.body.appendChild(div_2);
}

function create_Menu3() {
    
    var text_3 = ["3. Mopsul este o rasă de câini de mici dimensiuni, caracterizați de o față puternic ridată.", 
                  "3. Blana este fină și strălucitoare, corpul compact cu mușchi bine dezvoltați.", 
                  "3. Funcția lor este de animale de companie, fiind descriși prin sintagma multum in parvo."
    ];
    var div_3 = document.createElement("div");
        div_3.setAttribute("id","div_3");
    for (var i=0; i<3; i++) {
        var div = document.createElement("div");
            var p_text_1 = document.createElement("p");
                var txt = text_3[i];
                var txtt =  document.createTextNode(txt);
            p_text_1.appendChild(txtt);
        div.appendChild(p_text_1);
        div_3.appendChild(div);
    }
    div_3.appendChild(div);
    
    for (var i=0; i<2; i++) {
        var img = document.createElement("img");
            img.setAttribute('src','img.jpg')
            img.setAttribute('height', '300px');
            img.setAttribute('width', '300px');
            img.style.cssText = 'margin: 10px';
        div_3.appendChild(img);
    }
    document.body.appendChild(div_3);
}

function create_Menu4() {
    
    var text_4 = ["4. Mopsul este o rasă de câini de mici dimensiuni, caracterizați de o față puternic ridată.", 
                  "4. Blana este fină și strălucitoare, corpul compact cu mușchi bine dezvoltați.", 
                  "4. Funcția lor este de animale de companie, fiind descriși prin sintagma multum in parvo."
    ];
    var div_4 = document.createElement("div");
        div_4.setAttribute("id","div_4");
    for (var i=0; i<3; i++) {
        var div = document.createElement("div");
            var p_text_1 = document.createElement("p");
                var txt = text_4[i];
                var txtt =  document.createTextNode(txt);
            p_text_1.appendChild(txtt);
        div.appendChild(p_text_1);
        div_4.appendChild(div);
    }
    div_4.appendChild(div);
    
    for (var i=0; i<2; i++) {
        var img = document.createElement("img");
            img.setAttribute('src','img.jpg')
            img.setAttribute('height', '300px');
            img.setAttribute('width', '300px');
            img.style.cssText = 'margin: 10px';
        div_4.appendChild(img);
    }
    document.body.appendChild(div_4);
}

function create_Menu5() {
    
    var text_5 = ["5. Mopsul este o rasă de câini de mici dimensiuni, caracterizați de o față puternic ridată.", 
                  "5. Blana este fină și strălucitoare, corpul compact cu mușchi bine dezvoltați.", 
                  "5. Funcția lor este de animale de companie, fiind descriși prin sintagma multum in parvo."
    ];
    var div_5 = document.createElement("div");
        div_5.setAttribute("id","div_5");
    for (var i=0; i<3; i++) {
        var div = document.createElement("div");
            var p_text_1 = document.createElement("p");
                var txt = text_5[i];
                var txtt =  document.createTextNode(txt);
            p_text_1.appendChild(txtt);
        div.appendChild(p_text_1);
        div_5.appendChild(div);
    }
    div_5.appendChild(div);
    
    for (var i=0; i<2; i++) {
        var img = document.createElement("img");
            img.setAttribute('src','img.jpg')
            img.setAttribute('height', '300px');
            img.setAttribute('width', '300px');
            img.style.cssText = 'margin: 10px';
        div_5.appendChild(img);
    }
    document.body.appendChild(div_5);
}