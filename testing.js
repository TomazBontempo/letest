//Creates arrawy of motivational phrases that will be randomly picked and displayed when the cookie is clicked.
const fortunes = [
  "Wow! Your hair looks amazing today.",
  "I know it's been a long year, but it's only going uphills from here!",
  "I know where you live.",
  "You never cease to amaze me. you got this, keep at it!",
  "Fires would be easier to prevent if they didn't sound like rats.",
  "Your energy is just perfect today, I might just be a cookie but... I love it!",
  "Your outfit is amazing, honestly where did you buy it?",
  "Remember that there's always a new happy to be found.",
  "Waking up is already an impressive feat, you're doing great!",
  "Don't forget to water your plants! Seriously, do not!",
  "I predict that in your future... Wow. holy shit! Am I allowed to say? It says that you're gonna be really happy!",
];

document.querySelector(".animation").addEventListener("click", function () {
  console.log("Starting Fortune animation.");
  const random = Math.random();

  //FORTUNE (50% chance):
  if (random < 0.5) {
    document.querySelector(".animation").removeEventListener;
    document.querySelector(".animation").style.pointerEvents = "none"; // Remove pointer attribute from .animation
    document.querySelector(".animation").style.backgroundImage =
      "url('imgs/cookieOut.gif')"; // Change the div image to cookieOut.gif
    setTimeout(() => {
      document.querySelector(".animation").style.backgroundImage =
        "url('imgs/fullPic.png')"; // Change the div image to fullPic.png
      const cAnimation = document.createElement("div");
      cAnimation.classList.add("container", "text-center", "cAnimation");
      document.querySelector(".animation").appendChild(cAnimation);
      setTimeout(() => {
        document.querySelector(".cAnimation").style.backgroundImage =
          "url('imgs/openCookie.png')"; // Change the div image to openCookie.png
        const rFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        const fortune = document.createElement("p");
        fortune.textContent = rFortune;
        fortune.classList.add("fortune");
        cAnimation.appendChild(fortune);
        document.querySelector(".cAnimation").style.pointerEvents = "auto";

        document
          .querySelector(".cAnimation")
          .addEventListener("click", function (event) {
            event.stopPropagation();
            document.querySelector(".fortune").remove();
            document.querySelector(".cAnimation").remove();
            document.querySelector(".animation").style.pointerEvents = "auto";
          });
      }, 2400);
    }, 2450);
  }
  //SHAKE (25% chance):
  else if (random < 0.75) {
    document.querySelector(".animation").removeEventListener;
    document.querySelector(".animation").style.pointerEvents = "none"; // Remove pointer attribute from .animation
    document.querySelector(".animation").style.backgroundImage =
      "url('imgs/shake.gif')"; // Change the div image to shake.gif
    setTimeout(() => {
      document.querySelector(".animation").style.backgroundImage =
        "url('imgs/fullPic.png')"; // Change the div image to fullPic.png
      document.querySelector(".animation").style.pointerEvents = "auto";
    }, 1300);
  }
  //SHAKE AND FORTUNE (25% chance)
  else {
    document.querySelector(".animation").removeEventListener;
    document.querySelector(".animation").style.pointerEvents = "none"; // Remove pointer attribute from .animation
    document.querySelector(".animation").style.backgroundImage =
      "url('imgs/shake.gif')"; // Change the div image to shake.gif
    setTimeout(() => {
      document.querySelector(".animation").style.backgroundImage =
        "url('imgs/cookieOut.gif')"; // Change the div image to cookieOut.gif
      setTimeout(() => {
        document.querySelector(".animation").style.backgroundImage =
          "url('imgs/fullPic.png')"; // Change the div image to fullPic.png
        const cAnimation = document.createElement("div");
        cAnimation.classList.add("container", "text-center", "cAnimation");
        document.querySelector(".animation").appendChild(cAnimation);
        setTimeout(() => {
          document.querySelector(".cAnimation").style.backgroundImage =
            "url('imgs/openCookie.png')"; // Change the div image to openCookie.png
          const rFortune =
            fortunes[Math.floor(Math.random() * fortunes.length)];

          const fortune = document.createElement("p");
          fortune.textContent = rFortune;
          fortune.classList.add("fortune");
          cAnimation.appendChild(fortune);
          document.querySelector(".cAnimation").style.pointerEvents = "auto";

          document
            .querySelector(".cAnimation")
            .addEventListener("click", function (event) {
              event.stopPropagation();
              document.querySelector(".fortune").remove();
              document.querySelector(".cAnimation").remove();
              document.querySelector(".animation").style.pointerEvents = "auto";
            });
        }, 2400);
      }, 2500);
    }, 1300);
  }
});
