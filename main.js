const btn = document.getElementById("btnAdvice");
const advice = document.querySelector(".advice-body");
const adviceHeader = document.querySelector('.advice-id')

btn.addEventListener("click", () => {
  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      adviceHeader.innerHTML = `Advice #${data.slip.id}`
      advice.innerHTML = `"${data.slip.advice}"`
      console.log(data);
    } catch (error) {
      console.log("failed call");
    }
  };
  getAdvice();
});
