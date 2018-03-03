var addLi = document.getElementById('addElem'),
	list = document.getElementById('list');

addLi.addEventListener('click', function() {
	var element = document.createElement('li'),
		numberElements = document.getElementsByTagName('li');

	element.innerHTML = 'item '+numberElements.length;
	list.appendChild(element);
	});
