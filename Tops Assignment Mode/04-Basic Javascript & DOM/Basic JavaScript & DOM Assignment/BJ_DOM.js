// JAVASCRIPT FOR QUESTION NO-6 START
function addNode() {
    var tag = document.createElement("p");
    var text = document.createTextNode("You have Successfully added a new 'P' Element by clicking 'Add Element Buttton'.");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
}
// JAVASCRIPT FOR QUESTION NO-6 END

// JAVASCRIPT FOR QUESTION NO-9 START
function changeClass() {
    var element = document.getElementById("myDIV");
    element.classList.remove("flex_box");
    element.classList.add("block_box");
}
// JAVASCRIPT FOR QUESTION NO-9 END

// JAVASCRIPT FOR QUESTION NO-10 START

file = fopen(getScriptPath("js.text"), 0);


var fs = require("fs");
console.log("Going to write into existing file");
// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('js.txt', 'Simply Easy Learning!', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    // Read the newly written file and print all of its content on the console
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
// JAVASCRIPT FOR QUESTION NO-10 END

// JAVASCRIPT FOR QUESTION NO-12 START
function convertString() {
    var string_val_to_show = "";
    let StringConversion = (string_value, base) => {
        // "String value is : " + string_value +
        // " and base value is: " + base1
        // ;
        let Integer_value = parseInt(string_value, base);
        // console.log("Integer value is: " + Integer_value);
        string_val_to_show += "<br>Integer value is: " + Integer_value;
    };
    string_val_to_show = '';
    console.clear();
    StringConversion("1011", 2);
    StringConversion("101", 10);
    StringConversion("10002", 8);
    var pinteger = document.getElementById("integer");
    pinteger.innerHTML = string_val_to_show;

}
// JAVASCRIPT FOR QUESTION NO-12 END

// JAVASCRIPT FOR QUESTION NO-16 START
function force_load_gfg() {
    window.location =
        "https://www.geeksforgeeks.org/how-can-a-page-be-forced-to-load-another-page-in-javascript/?ref=rp#:~:text=Approach%3A%20We%20can%20use%20window,a%20window%20by%20accessing%20it."
}
// JAVASCRIPT FOR QUESTION NO-16 END



// document.getElementById("demo").innerHTML = "You have Successfully added a new 'P' Element by clicking 'Add Element Buttton'.";

// function changeClass() {
//     document.getElementsByClassName("flex_box").innerHTML = "You have Successfully added a new 'P' Element by clicking 'Add Element Buttton'.";
// }