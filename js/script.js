import books from "./booklist.js";

let content = document.querySelector("#content");
let addlist = document.querySelector("#addlist");

// function remove() {}

// function add() {
//   let addbook = {
//     subject: addsubject.value,
//     author: addauthor.value,
//     publisher: addpublisher.value,
//     date: adddate.value,
//     price: addprice.value,
//     summary: addsummary.value,
//     photo: addphotp.value,
//   };
//   books.push(addbook);
// }

let bookInfo = "<ul>";
for (let i in books) {
  bookInfo += `<li><div><img src="./images/${books[i].photo}" art="${[
    i,
  ]}번 표지"><p>${books[i].summary}</p></img></div>`;
  bookInfo += `<div class="subject">${books[i].subject}</div>`;
  bookInfo += `<div class="author">${books[i].author}</div>`;
  bookInfo += `<div>${books[i].publisher}</div>`;
  bookInfo += `<div>${books[i].date}</div>`;
  bookInfo += `<div>${books[i].price}</div>`;
  //   bookInfo += `<div>${books[i].summary}</div>`;
  bookInfo += `<div><button type="button"><i class="fa-solid fa-cart-plus"></i> 장바구니</button><button onclick="remove()"><i class="fa-solid fa-trash"></i> 삭제하기</button><div>`;
  //   bookInfo += `<div>${books[i].summary}</div></li>`;
}
bookInfo += "</ul>";
content.innerHTML = bookInfo;
