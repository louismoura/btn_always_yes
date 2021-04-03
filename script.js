document.addEventListener('DOMContentLoaded', function(){
	const btn = document.getElementById('btn_input');
	const btn2 = document.getElementById('btn_input2');
	const title = document.querySelector('.tittle');
	const outpot = document.querySelector('.elemtos')

	btn.onclick = function(){	
		console.log('Dijiste que si :D')
		outpot.innerHTML = 'Dijiste que si :D'
	}

	btn2.onclick = function(){
		console.log('Dijiste que si :D')
		outpot.innerHTML = 'Dijiste que si :D'
	}

	btn.onmouseover = function(){
		btn.firstChild.data = 'Si'
		btn2.firstChild.data = 'No'
	}

	btn2.onmouseover = function(){
		btn.firstChild.data = 'No'
		btn2.firstChild.data = 'Si'
	}
})

