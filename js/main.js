//main 
chrome.tabs.query({active:true}, function(tab) {
	chrome.tabs.sendMessage(tab[0].id, {text:''}, function(response) {
		url = tab[0].url;
		title = tab[0].title;
	result = "["+ title + "](" + url + ' "' + title + '")';
	execCopy(result);
	});
});

//copy to clipbored
function execCopy(string){
	var temp = document.createElement('div');
	temp.appendChild(document.createElement('pre')).textContent = string;
	document.body.appendChild(temp);
	document.getSelection().selectAllChildren(temp);
	var result = document.execCommand('copy');
	document.body.removeChild(temp);
	return result;
}
