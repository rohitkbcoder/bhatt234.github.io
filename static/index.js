const chatbtn = document.getElementById("chatbtn");
const chatbot = document.getElementById("chatbot");
const chatbtn1 = document.getElementById("chatbtn1")
const chatin = document.getElementById("chatin").value;



// console.log(chatin);
// const chatin = document.getElementById("chatin").value;
chatbtn1.addEventListener("click", () => {
    console.log(chatin)
})

// function bot() {
//     
// }
// bot()
function chat() {
    chatbtn.addEventListener("mouseover", () => {
        if (chatbot.style.display != "flex") {
            chatbot.style.display = "flex";
            chatbtn.innerText = "close chatbot";
        } else {
            chatbot.style.display = "none";
            chatbtn.innerText = "chat with us";
        }
    })
}
chat()

