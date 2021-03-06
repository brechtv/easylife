var colors = [];
var colors_sorted = [];
var colors_text = "";

function PickColors(id) {
    // clear colors just in case
    colors = [];
    colors_sorted = colors.slice();

    switch (id) {

        case "random":

            var counter = 12;

            while (counter > 0) {
                colors.push('#' + Math.random().toString(16).slice(2, 8).toUpperCase());
                counter--;
            }

            printColors(colors)

            break;

        case "material_random":

            var shade = (Math.floor(Math.random() * 6) * 100) + 100

            console.log(shade);

            colors_result = COLORS.filter(function(el) {
                    return el.shade === shade;
                });

            var j, x, i;
                for (i = colors_result.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = colors_result[i - 1];
                    colors_result[i - 1] = colors_result[j];
                    colors_result[j] = x;
                }

            returnColors(colors_result)

            break;

        case "google_charts":

            colors_results = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#3B3EAC"];

            $.each(colors_results, function(i, v) {
                color = v;
                colors.push(color);
            });

            printColors(colors);

            break;

        case "show_me_the_numbers":

            colors_results = ["#5DA5DA","#F15854","#DECF3F","#60BD68","#B276B2","#FAA43A","#F17CB0"]


            $.each(colors_results, function(i, v) {
                color = v;
                colors.push(color);
            });

            printColors(colors);

            break;

        case "material_four":

            // filter on colors
            colors_result = COLORS.filter(function(el) {
                    return el.color === "Blue" || el.color === "Red" || el.color === "Amber" || el.color === "Green";
                })
                // then on shade
                .filter(function(el) {
                    return el.shade === 500;
                });

            returnColors(colors_result)

            break;

        case "material_primaries":


            shade = 500;
            colors_result = COLORS.filter(function(el) {
                return el.shade === shade;
            });
            returnColors(colors_result)

            break;

        case "material_primaries_light":


            shade = 400;
            colors_result = COLORS.filter(function(el) {
                return el.shade === shade;
            });
            returnColors(colors_result)

            break;

        case "material_primaries_lighter":


            shade = 300;
            colors_result = COLORS.filter(function(el) {
                return el.shade === shade;
            });
            returnColors(colors_result)

            break;

        case "blue_gradient":

            color = "Blue";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });
            returnColors(colors_result)

            break;

        case "better_blue_gradient":

            colors_results = ["#5DA5DA","#6DAEDD","#7DB7E1","#8DC0E5","#9DC9E8","#AED2EC","#BEDBF0","#CEE4F3","#DEEDF7","#EEF6FB"];

            $.each(colors_results, function(i, v) {
                color = v;
                colors.push(color);
            });

            printColors(colors);

            break;

        case "red_gradient":

            color = "Red";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });
            returnColors(colors_result)

            break;

        case "green_gradient":

            color = "Green";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });
            returnColors(colors_result)

            break;

        case "amber_gradient":

            color = "Amber";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });
            returnColors(colors_result)

            break;

        case "purple_gradient":

            color = "Purple";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });
            returnColors(colors_result)

            break;

        case "deep_orange_gradient":

            color = "Deep Orange";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });

            // colors_result.splice(0, 2);

            returnColors(colors_result)

            break;

        case "grey_gradient":

            color = "Grey";
            colors_result = COLORS.filter(function(el) {
                return el.color === color;
            });
            returnColors(colors_result)

            break;

        case "always_blue":

            // filter on colors
            colors_result = COLORS.filter(function(el) {
                    return el.color === "Blue";
                })
                // then on shade
                .filter(function(el) {
                    return el.shade === 500;
                });
            colors_result = [colors_result[0].hex];

            result = new Array(200);
            result.fill(colors_result);

            printColors(result);

            break;
    }
}

function returnColors(result) {

    $.each(result, function(i, v) {
        color = v.hex;
        colors.push(color);
    });

    printColors(colors);
}

function reverseColors() {
    colors.reverse();
    printColors(colors);
}

function printColors(colors) {

    var color_text = "";
    var color_html = "";

    $.each(colors, function(i, v) {
        color = v;
        color_text += color + ", ";
        color_html += "<span class='badge badge-pill rounded' style='background-color: " + color + "'>" + color + "</span> ";
    });

    color_text = color_text.substring(0, color_text.length - 2);

    $(".output_colors").html(color_html);
    $("#output_colors_text").val(color_text);
}

function shuffleColors() {
    colors_sorted = colors.slice();
    var j, x, i;
    for (i = colors.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = colors[i - 1];
        colors[i - 1] = colors[j];
        colors[j] = x;
    }
    printColors(colors);
}

function sortColors() {
    colors = colors_sorted.slice();
    printColors(colors_sorted);
}

function narrowColors() {
    colors.splice(0, 2);
    colors.splice(-3);
    printColors(colors);
}

function evenColors() {
    // remove every odd element in the color array
    // makes the gradients 'pop' more I guess
    colors = colors.filter(function(el, index) {
    return index % 2 === 1;
    });
    printColors(colors);
}

function fillArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}
