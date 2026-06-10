let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if (value === "AC") {
            string = "";
            inputBox.value = "";
        }

        else if (value === "DE") {
            string = string.slice(0, -1);
            inputBox.value = string;
        }

        else if (value === "=") {
            try {
                string = eval(string).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        }

        else {
            string += value;
            inputBox.value = string;
        }
    });
});