console.log("........... volani this......");
	
var proved={
		HOD: 22,
		MIN: 15,
		TEXT: "Uz jsme doma",
		VLOZ: "nevlozeno",
		}
proved.tisk= function(VNOR){
	console.log(this.TEXT);
	console.log(VNOR);
	this.VLOZ = VNOR;
	console.log(this.VLOZ);
	console.log(this.HOD);
	console.log(this.MIN);
	}
proved.tisk("Julecek");
proved.HOD = 21;
proved.tisk("Mariana");
// pokus s vice objekty 
var uzi1= {JMENO:"Já"}
var uzi2={JMENO:"Ty"}
var uzi3={JMENO:"On"}
	
uzi1.vypis = function(){
	console.log(this.JMENO);
	}
uzi1.vypis();