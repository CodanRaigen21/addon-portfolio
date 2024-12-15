if(window.location.href.search('#') == -1){
	window.location.href += '#introduction';
}
document.querySelectorAll('[data-page]').forEach(i =>{
	i.addEventListener('click', e=>{
		document.getElementById(i.dataset.page).scrollIntoView({behavior:'smooth'});
		setTimeout(()=>{
			window.location.href = window.location.href.replace(/(.*)#.*/g, `$1#${i.dataset.page}`);
		}, 1000);
	});
});

function goto_experiments(t){
	t.parentNode.parentNode.classList.add('goto');
}
function goto_introduction(t){
	t.parentNode.parentNode.classList.remove('goto');
}