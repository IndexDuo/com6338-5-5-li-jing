var form = document.querySelector("form");
var list = document.getElementById("todo-list");
var input = document.querySelector("input");
var allListItems = document.getElementsByClassName("listItems");
// console.log(form);
// console.log(list);

form.onsubmit = function (e) {
    e.preventDefault();
    // console.log("submitted");
    var inputText = document.querySelector("input").value;
    // console.log(inputText);

    // trim() removes whitespaces, link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

    var containsCharacter = inputText.trim();

    //if nothing left after trimming, returns false
    if (inputText.trim() == "") {
        containsCharacter = false;
        // console.log("all spaces");
    }

    if (inputText && containsCharacter) {
        list.innerHTML += `<li class ="listItems"><button>${inputText}</button></li>`;
        input.value = "";
    }
    allListItems = document.getElementsByClassName("listItems");
    // console.log(allListItems[0]);

    for (let i = 0; i < allListItems.length; i++) {
        // console.log("im looping " + i);
        allListItems[i].addEventListener("click", function (e) {
            // console.log("clicked");
            e.preventDefault();
            if (this.firstElementChild.style.textDecoration == "line-through") {
                // console.log("click twice");
                this.remove();
            } else {
                // console.log("click once");
                this.firstElementChild.style.textDecoration = "line-through";
            }
        });
    }
};
// console.log("test " + allListItems.length);


// for (let i = 0; i < allListItems.length; i++) {
//     console.log("looping " + i);
// }

// for (const item of allListItems) {
//     console.log("looping");
//     item.addEventListener("click", function (e) {
//         console.log("clicked");
//         e.preventDefault();
//         // var itemButtonClicked = e.target;
//         // var itemListClicked = e.target.parentElement;
//         // console.log(itemListClicked.outerHTML + " is clicked");

//         console.log(item.id);

//         if (this.style.textDecoration == "line-through") {
//             // console.log("click twice");
//             this.remove();
//         } else {
//             // console.log("click once");
//             this.style.textDecoration = "line-through";
//         }
//     });
// }

// allListItems.forEach((item) => {
//     addEventListener("click", function (e) {
//         e.preventDefault();
//         // var itemButtonClicked = e.target;
//         // var itemListClicked = e.target.parentElement;
//         // console.log(itemListClicked.outerHTML + " is clicked");

//         console.log(item);

//         if (this.style.textDecoration == "line-through") {
//             // console.log("click twice");
//             this.remove();
//         } else {
//             // console.log("click once");
//             this.style.textDecoration = "line-through";
//         }
//     });
// });
