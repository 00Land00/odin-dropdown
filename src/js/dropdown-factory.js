import "styles/styles.css";

function createDropdownElement(title, items) {
    const dropdownElement = document.createElement("div");
    dropdownElement.classList.add("dropdown");

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    dropdownContent.classList.add("hidden");
    items.forEach(item => {
        const dropdownItem = document.createElement("div");
        dropdownItem.innerHTML = item.name;
        dropdownItem.addEventListener("click", item.callbackFn);
        dropdownContent.appendChild(dropdownItem);
    });

    const dropdownButton = document.createElement("button");
    dropdownButton.classList.add("dropdown-btn");
    dropdownButton.innerHTML = title;
    dropdownButton.addEventListener("click", () => {
        dropdownContent.classList.toggle("hidden");
    });

    dropdownElement.appendChild(dropdownButton);
    dropdownElement.appendChild(dropdownContent);

    return dropdownElement;
}

export default createDropdownElement;