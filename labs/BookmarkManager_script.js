// Bookmark Manager Local Application

// import HTML document elements
const mainSection = document.getElementById("main-section");
const viewCategoryButton = document.getElementById("view-category-button");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const formSection = document.getElementById("form-section");
const nameInputBtn = document.getElementById("name");
const urlInputBtn = document.getElementById("url");
const closeFormBtn = document.getElementById("close-form-button");
const addFormBookmarkBtn = document.getElementById("add-bookmark-button-form");
const listSection = document.getElementById("bookmark-list-section");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {

}

const displayOrCloseForm = () => {
    addBookmarkButton.addEventListener("click", () =>{
        mainSection.classList.toggle("hidden")
    })
    closeFormBtn.addEventListener("click", () => {
        formSection.classList.toggle("hidden")
    })
}
