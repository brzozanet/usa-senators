import senators from "../data/senators.json";

const senatorsEl = document.querySelector("#senators");
const inputFilterEl = document.querySelector("#filter-senators");

// Alternative: create a function that builds the list of senator's names
// const senatorsNames = senators.objects.map((senator) => senator.person.name);

const buildSenatorsList = (senatorsData) => {
    const senatorsList = senatorsData.map((senator) => `<li>${senator.person.name}</li>`);
    senatorsEl.innerHTML = senatorsList.join("");
};

buildSenatorsList(senators.objects);

inputFilterEl.addEventListener("input", (event) => {
  const filter = event.currentTarget.value;
  const filteredSenators = senators.objects.filter((senator) => {
    return senator.person.name.toLowerCase().includes(filter.toLowerCase());
  });

buildSenatorsList(filteredSenators);
});
