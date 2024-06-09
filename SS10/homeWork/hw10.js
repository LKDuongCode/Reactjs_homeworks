"use strict";
class hw10Book {
    constructor(title, author, quantity) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    //lấy thông tin
    get hw10title() {
        return this.title;
    }
    get hw10author() {
        return this.author;
    }
    hw10quantity() {
        return this.quantity;
    }
    //thay đổi thông tin
    hw10quanBy1() {
        this.quantity = 1;
    }
    increaseHw10quanBy1() {
        this.quantity += 1;
    }
}
//kho sách
class hw10Library {
    constructor() {
        this.bookList = [];
    }
    addBook(book) {
        if (book.hw10quantity === undefined) {
            book.hw10quantity = 1;
        }
    }
    checkBook() {
        this.bookList.forEach((e, i) => {
            console.log(`#${i + 1} - Tiêu đề: ${e.hw10title} - Tác giả:${e.hw10author} - Số lượng:${e.hw10quantity}`);
        });
    }
}
let book11 = new hw10Book("Raise of Kingdom", "Dương", 1);
let book12 = new hw10Book("Arena of Valor", "Gảena", 1);
let book13 = new hw10Book("The lord of the Rings", "unknown", 1);
let book14 = new hw10Book("Harry Porter", "Dương", 1);
let book15 = new hw10Book("Ô Long Viện", "Tung Cua", 1);
let library10 = new hw10Library;
// đẩy sách vào kho
library10.addBook(book11);
library10.addBook(book12);
library10.addBook(book13);
library10.addBook(book14);
library10.addBook(book15);
library10.checkBook();
