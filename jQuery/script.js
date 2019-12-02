$(document).ready(function() {
    $(".SocialMedia, .text").css("color", "orange");
    $(".Streaming, .number").css("fontSize", "40px");
    $(".LookingFor, .number").css({ "fontWeight": "bold", "color": "green" });
    $(".SearchEngine").css("color", "black");
    $("input").attr("disabled", true);

    $("[href]").prepend("↗");
    $("[href]").attr("target", "_blank");
    $("[href]").each(function() {
        $(this).attr("href", $(this).attr("href").replace("http://", "https://"));
    });
    $(".DiscardChanges").click(function() {
        $("[href]").each(function() {
            $(this).contents().eq(0).remove();
        });
        $("[href]").removeAttr("target");
        $(this).attr('disabled', true);
    });

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cellText = document.createElement("div");
    cell.appendChild(cellText);
    cellText.innerHTML = "Text";
    let cell2 = document.createElement("td");
    let cellText2 = document.createElement("div");
    cell2.appendChild(cellText2);
    cellText2.innerHTML = "Animation";
    row.appendChild(cell);
    row.appendChild(cell2);
    tableBody.appendChild(row);
    for (var i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let cellText = document.createElement("div");
        cellText.setAttribute("class", i);
        cellText.innerHTML = "Here we go";
        cell.appendChild(cellText);
        row.appendChild(cell);
        let cell2 = document.createElement("td");
        let cellText2 = document.createElement("button");
        cellText2.setAttribute("class", i);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.getElementsByTagName('body')[0].appendChild(table);
    table.setAttribute('border', '2');
    $("button.0").html("fadeOut");
    $("button.0").click(function() {
        $("div.0").fadeOut();
    });
    $("div.1").hide();
    $("button.1").html("fadeIn");
    $("button.1").click(function() {
        $("div.1").fadeIn();
    });
    $("button.2").html("slideUp");
    $("button.2").click(function() {
        $("div.2").slideUp();
    });
    $("div.3").hide();
    $("button.3").html("slideDown");
    $("button.3").click(function() {
        $("div.3").slideDown();
    });
    $("button.4").html("animate");
    $("button.4").click(function() {
        $("div.4").animate({ fontSize: '10px' });
    });

    let button = document.createElement("button");
    button.setAttribute("id", "ajax");
    button.innerHTML = "Обновить страницу";
    document.getElementsByTagName('a')[0].setAttribute("id", "ajaxLoader");
    document.getElementsByTagName('body')[0].appendChild(button);
    $("button#ajax").click(function() {
        $("a#ajaxLoader").load("https://inxaoc.github.io/example/ajax-1.html");
    })

    let button2 = document.createElement("button");
    button2.setAttribute("id", "ajax2");
    button2.innerHTML = "JSON params";
    document.getElementsByTagName('body')[0].appendChild(button2);
    $("button#ajax2").click(function() {
        let obj = document.createElement("p");
        obj.setAttribute("id", "ajaxObj");
        document.getElementsByTagName('body')[0].appendChild(obj);
        $("p#ajaxObj").load("https://inxaoc.github.io/example/ajax.json", "abc=abc", parser);
    });

    function parser() {
        let json = document.getElementById('ajaxObj').innerHTML;
        document.getElementById('ajaxObj').innerHTML = '';
        let text = '';
        for (var i = 0; i < json.length; i++) {
            if (json[i] == '{' || json[i] == '[') {
                text += "<ul><li>";
            } else if (json[i] == '}' || json[i] == ']') {
                text += "</ul></ul>";
            } else if (json[i] == ',') {
                text += "</li><li>";
            } else if (json[i] == '"') {
                if (json[i - 1] == '{') {
                    text += "<li>";
                } else if (json[i + 1] == '}') {
                    text += "</li>";
                }
            } else text += json[i];
        }
        document.getElementById('ajaxObj').innerHTML = text;
        $("button#ajax2").attr("disabled",true);
    }
});