const nameText = document.getElementById('text1');
const degreeText = document.getElementById('text2');
const image = document.getElementById('image1');
const clickButton = document.getElementById('btn1');
const doubleClickButton = document.getElementById('btn2');
const nameInput = document.getElementById('input1');
const courseSelect = document.getElementById('combobox');

clickButton.addEventListener('click', () => {
  nameText.textContent = "Let's go";
  nameText.style.backgroundColor = 'coral';
});

doubleClickButton.addEventListener('dblclick', () => {
  nameText.textContent = 'Hehehe';
});

image.addEventListener('mouseover', () => {
  nameText.textContent = 'Your mouse reached the image!';
});

image.addEventListener('mouseout', () => {
  nameText.textContent = 'Your mouse left the image!';
});

nameInput.addEventListener('input', () => {
  nameText.textContent = nameInput.value;
});

nameInput.addEventListener('focus', () => {
  nameInput.style.backgroundColor = 'lightyellow';
});

nameInput.addEventListener('blur', () => {
  nameInput.style.backgroundColor = 'white';
});

courseSelect.addEventListener('change', () => {
  degreeText.textContent = courseSelect.value;
});