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

const saveMoney = () => {
   closeAddThings();

   let spendingsDate = document.getElementById("date-input").value;
   let spendingsCategorie = document.getElementById("categorie-input").value;
   let spendingsAmount = document.getElementById("amount-input").value;

   let earningsDate = document.getElementById("Edate-input").value;
   let earningsCategorie = document.getElementById("Ecategorie-input").value;
   let earningsAmount = document.getElementById("Eamount-input").value;

   const container = document.getElementById("container");

   let addedthing = document.createElement("div");
   addedthing.classList = "addedThing";

   let hello = document.createElement("div");
   hello.classList = "hello";
   hello.innerHTML = spendingsDate;

   let hello1 = document.createElement("div");
   hello1.classList = "hello1";
   hello1.innerHTML = spendingsAmount;

   let hello2 = document.createElement("div");
   hello2.classList = "hello2";
   hello2.innerHTML = spendingsCategorie;

   let hello3 = document.createElement("div");
   hello3.classList = "hello3";
   hello3.innerHTML = earningsDate;

   let hello4 = document.createElement("div");
   hello4.classList = "hello4";
   hello4.innerHTML = earningsAmount;

   let hello5 = document.createElement("div");
   hello5.classList = "hello5";
   hello5.innerHTML = earningsCategorie;

   container.appendChild(addedthing);

   addedthing.appendChild(hello);
   addedthing.appendChild(hello1);
   addedthing.appendChild(hello2);
   addedthing.appendChild(hello3);
   addedthing.appendChild(hello4);
   addedthing.appendChild(hello5);
};
