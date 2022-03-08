'use strict';
const cardItem = document.querySelectorAll('.js-list-card');

function dragStart(e) {
  e.dataTransfer.setData('content', e.target.id)
  console.log('start', this);
}
function dragOver(e) {
  e.preventDefault();
  e.stopPropagation();
}
function dragEnter(e) {
  console.log('enter');
}
function dragLeave() {
  console.log('leave', this);
}
function dragDrop(e) {
  e.preventDefault();
  let el = document.getElementById(e.dataTransfer.getData('content'));

  this.append(el);
  console.log('drop', this);
}
function dragEnd(e) {
  console.log('end', this, e.dataTransfer);
}

cardItem.forEach(area => {
  area.addEventListener('dragstart', dragStart);
  area.addEventListener('dragend', dragEnd);
  area.addEventListener('dragenter', dragEnter);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('dragover', dragOver);
  area.addEventListener('drop', dragDrop);
});
