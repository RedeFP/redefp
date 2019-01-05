<<<<<<< HEAD
function submitDirectoryTreeForm(last_directory_index) {
	if (document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex <= last_directory_index) {
		if (document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value != 'up') { 
			if (document.forms['DirectoryTreeForm'].directory.value == '/') {
				document.forms['DirectoryTreeForm'].directory.value = '/' + document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value; 
			}
			else {
				document.forms['DirectoryTreeForm'].directory.value = document.forms['DirectoryTreeForm'].directory.value + '/' + document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value; 
			}
		}
		else { 
			document.forms['DirectoryTreeForm'].directory.value = document.forms['DirectoryTreeForm'].updirectory.value; 
		}
	}
	else {
		document.forms['DirectoryTreeForm'].state.value  = 'followsymlink';
		document.forms['DirectoryTreeForm'].state2.value = 'popup';
		document.forms['DirectoryTreeForm'].entry.value  = document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value;
	}
	document.forms['DirectoryTreeForm'].submit();
=======
function submitDirectoryTreeForm(last_directory_index) {
	if (document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex <= last_directory_index) {
		if (document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value != 'up') { 
			if (document.forms['DirectoryTreeForm'].directory.value == '/') {
				document.forms['DirectoryTreeForm'].directory.value = '/' + document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value; 
			}
			else {
				document.forms['DirectoryTreeForm'].directory.value = document.forms['DirectoryTreeForm'].directory.value + '/' + document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value; 
			}
		}
		else { 
			document.forms['DirectoryTreeForm'].directory.value = document.forms['DirectoryTreeForm'].updirectory.value; 
		}
	}
	else {
		document.forms['DirectoryTreeForm'].state.value  = 'followsymlink';
		document.forms['DirectoryTreeForm'].state2.value = 'popup';
		document.forms['DirectoryTreeForm'].entry.value  = document.forms['DirectoryTreeForm'].DirectoryTreeSelect.options[document.forms['DirectoryTreeForm'].DirectoryTreeSelect.selectedIndex].value;
	}
	document.forms['DirectoryTreeForm'].submit();
>>>>>>> 6c5a0eae472b47947e37c523b6389aff713b93b4
}