const addThings = () => {
   let modal = document.getElementById("addThings-modal");
   modal.style.top = "100px";

   let TheModalBackground = document.getElementById("add-modal");

   TheModalBackground.style.width = "100%";
   TheModalBackground.style.height = "100%";
   TheModalBackground.style.top = "0";
   TheModalBackground.style.left = "0";
   TheModalBackground.style.backgroundColor = "rgba(0, 0, 0, 1)";
};

const closeAddThings = () => {
   let modal = document.getElementById("addThings-modal");
   modal.style.top = "-1000px";

   let TheModalBackground = document.getElementById("add-modal");

   TheModalBackground.style.width = "0";
   TheModalBackground.style.height = "0%";
   TheModalBackground.style.top = "50%";
   TheModalBackground.style.left = "50%";
   TheModalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
};
