// Formatting button event listeners
document.getElementById("bold-btn").addEventListener("click", function() {
    document.execCommand("bold", false, null);
});

document.getElementById("italic-btn").addEventListener("click", function() {
    document.execCommand("italic", false, null);
});

document.getElementById("underline-btn").addEventListener("click", function() {
    document.execCommand("underline", false, null);
});
// dfsgsdfsdfsd


document.getElementById("editor")

function Changecolor(event) {
    editor.style.color = event.target.value;
}



// document.getElementById("color-picker")
//     .addEventListener("click", function() {
//         document.getElementById("color-picker").innerHTML = ""

//     });




// sajasjdasjdasj
// Save document
document.getElementById("save-btn").addEventListener("click", function() {
    var content = document.getElementById("editor").innerHTML;
    var filename = prompt("Enter a filename:");

    if (filename) {
        var blob = new Blob([content], { type: "text/html;charset=utf-8" });
        saveAs(blob, filename + ".html");
    }
});

// Open document
document.getElementById("open-btn").addEventListener("change", function(event) {
    var file = event.target.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("editor").innerHTML = e.target.result;
        };

        reader.readAsText(file);
    }
});

// Clear document
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("editor").innerHTML = "";
});