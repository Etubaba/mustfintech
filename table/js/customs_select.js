var x, i, j, l, ll, selectElement, a, b, c, arrowIcon;

x = document.getElementsByClassName("custom_select");


function createElements(elementName, attributes) {
    const a = document.createElement(elementName);
        for (const key in attributes) {
            a.setAttribute(key, attributes[key]);
        }
    return a
}


l = x.length;
for (i = 0; i < l; i++) {
    selectElement = x[i].getElementsByTagName("select")[0];
    ll = selectElement.length;
    a = createElements("DIV",{class:"select-selected"})
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    let arrow = createElements("I", {class:"bx bx-chevron-down"})
    a.append(arrow)

    x[i].appendChild(a);
    b = createElements("BUTTON",{class:"select-items select-hide"})

    for (j = 0; j < ll; j++) {
        c = createElements("DIV",{class:"select-item",value:selectElement.options[j].value})
        c.innerHTML = selectElement.options[j].innerHTML;
        b.appendChild(c);
    }




    b.addEventListener("click", (e) => {
        if (e.target.className.includes("select-item")) {
            const selectItem = e.target;
            let selectContainer = selectItem.parentNode
            let select = selectContainer.parentNode.children[0]
            if (select.tagName === "SELECT") {
                const value = selectItem.attributes.value.value
                removeActiveOnEvent(selectItem, "active")
                selectItem.classList.add("active")
                select.value = value
                selectContainer.previousElementSibling.childNodes[0].textContent = selectItem.textContent
            }
        }
    })

    x[i].appendChild(b);


    a.addEventListener("click", (e) => {
        e.stopPropagation()
        closeAllSelect();
        e.target.classList.add("selected-show")
        e.target.nextSibling.classList.toggle("select-hide");
        e.target.classList.toggle("select-arrow-active");
    })

}

function closeAllSelect() {
    const nextSiblings = document.querySelectorAll(`.select-items`)
    const selectedItems = document.querySelectorAll(".select-selected")
    nextSiblings.forEach(sibling => {
        sibling.classList.add("select-hide")
    })
    selectedItems.forEach(selectedItem => {
        selectedItem.classList.remove("selected-show")
    })
}

function removeActiveOnEvent(e, activeName) {
    const parent = e.parentNode
    const children = parent.children
    removeActive(children, activeName)
}

function removeActive(items, activeName) {
    for (let k = 0; k < items.length; k++) {
        if (items[k].classList.contains(activeName)) {
            items[k].classList.remove(activeName)
        }
    }
}


document.addEventListener("click", closeAllSelect);