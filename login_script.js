
function marksheet(){
	
	// Cleare Fields
	document.getElementById('obt').innerHTML=('---');
	document.getElementById('percentage').innerHTML=("---");
	document.getElementById('grade').innerHTML=("---");
	document.getElementById('remarks').innerHTML=('');
	
	var kitso = parseInt(document.getElementById('kitso').value);
	var web = parseInt(document.getElementById('web').value);
	var clang = parseInt(document.getElementById('clang').value);
	
	var obtmarks = (kitso+web+clang);
	var total = 300; // three subjects Marks, every sub has 100 marks.
	var p = obtmarks*100/total;
	var per=p.toFixed(2);
	var grade;
	var fail=33;
	
	if(kitso>=0 && kitso<=100 && web>=0 && web<=100 && clang>=0 && clang<=100){
		if(kitso<fail || web<fail || clang<fail){
			grade="Fail";
		} else {
			if(per>=80 && per<=100){
				grade="A-1";
			} else if(per<80 && per>=70){
				grade="A";
			} else if(per<70 && per>=60){
				grade="B";
			} else if(per<60 && per>=50){
				grade="C";
			} else if(per<50 && per>=40){
				grade="D";
			} else if(per<40 && per>=33){
				grade="E";
			} else {
				grade="F";
			}
		}
		document.getElementById('obt').innerHTML=(obtmarks);
		document.getElementById('percentage').innerHTML=(per + "%");
		document.getElementById('grade').innerHTML=(grade);
	} else {
		document.getElementById('remarks').innerHTML=('Marks should be 0 to 100.');
	}


}