#!/usr/bin/node
const headers = document.getElementsByTagName('header');
if (headers.length > 0) {
    const header = headers[0];
    header.style.color = '#FF0000';
}
