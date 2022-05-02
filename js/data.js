const icons = [

	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}

];

const main = document.getElementsByTagName('main')[0];
const mainUl = document.createElement('ul');
main.append(mainUl);

const selectElement = document.getElementsByTagName('select')[0];
console.log(selectElement);

icons.forEach((element) => {
	const newCard = document.createElement('li');
	const iconBox = document.createElement('div');
	const newIcon = document.createElement('i');
	newIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`,`${element.color}`);
	iconBox.append(newIcon);
	const textBox = document.createElement('div');
	const newText = document.createElement('span');
	newText.innerHTML = element.name.toUpperCase();
	textBox.append(newText);
	newCard.append(iconBox, textBox);
	mainUl.append(newCard);
})

selectElement.addEventListener('click', function() {
	if (this.value === 'animal') {
		mainUl.innerHTML = '';
		icons.forEach((element) => {
			if (element.type === 'animal') {
				const newCard = document.createElement('li');
				const iconBox = document.createElement('div');
				const newIcon = document.createElement('i');
				newIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`,`${element.color}`);
				iconBox.append(newIcon);
				const textBox = document.createElement('div');
				const newText = document.createElement('span');
				newText.innerHTML = element.name.toUpperCase();
				textBox.append(newText);
				newCard.append(iconBox, textBox);
				mainUl.append(newCard);
			}
		})	
	} else if (this.value === 'vegetable') {
		mainUl.innerHTML = '';
		icons.forEach((element) => {
			if (element.type === 'vegetable') {
				const newCard = document.createElement('li');
				const iconBox = document.createElement('div');
				const newIcon = document.createElement('i');
				newIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`,`${element.color}`);
				iconBox.append(newIcon);
				const textBox = document.createElement('div');
				const newText = document.createElement('span');
				newText.innerHTML = element.name.toUpperCase();
				textBox.append(newText);
				newCard.append(iconBox, textBox);
				mainUl.append(newCard);
			}
		})
	} else if (this.value === 'user') {
		mainUl.innerHTML = '';
		icons.forEach((element) => {
			if (element.type === 'user') {
				const newCard = document.createElement('li');
				const iconBox = document.createElement('div');
				const newIcon = document.createElement('i');
				newIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`,`${element.color}`);
				iconBox.append(newIcon);
				const textBox = document.createElement('div');
				const newText = document.createElement('span');
				newText.innerHTML = element.name.toUpperCase();
				textBox.append(newText);
				newCard.append(iconBox, textBox);
				mainUl.append(newCard);
			}
		})
	} else {
		mainUl.innerHTML = '';
		icons.forEach((element) => {
			const newCard = document.createElement('li');
			const iconBox = document.createElement('div');
			const newIcon = document.createElement('i');
			newIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`,`${element.color}`);
			iconBox.append(newIcon);
			const textBox = document.createElement('div');
			const newText = document.createElement('span');
			newText.innerHTML = element.name.toUpperCase();
			textBox.append(newText);
			newCard.append(iconBox, textBox);
			mainUl.append(newCard);
		})		
	}

	console.log(mainUl);
})