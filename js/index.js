$(document).ready(
	function() {
		//alert("Hola");
	}
);

var pieza    = [];
var posicion = [];
turno = "";
click = 0;
piezaXmover = "";

function empezar(){
	pieza.push("R","D","A1","A2","C1","C2","T1","T2","P1","P2","P3","P4","P5","P6","P7","P8", "r","d","a1","a2","c1","c2","t1","t2","p1","p2","p3","p4","p5","p6","p7","p8");
	posicion.push("E1","D1","C1","F1","B1","G1","A1","H1","A2","B2","C2","D2","E2","F2","G2","H2", "E8","D8","F8","C8","G8","B8","H8","A8","H7","G7","F7","E7","D7","C7","B7","A7");
	//Ciclo para mostrar 32 piezas
	for (var i = 0; i < 16; i++){
		mostrarB(pieza[i].substr(0,1),posicion[i]);
		mostrarN(pieza[i+16].substr(0,1),posicion[i+16]);
	};
	turnar("Blancas");
}
function turnar(jugador){
	document.getElementById("turnoactual").innerHTML = "Turno: "+ jugador;
	turno = jugador;
}

function mostrarB(letra,posicion){
	var pieza = ["R","D","A","C","T","P"];
	var dibujitos = ["&#9812;","&#9813;","&#9815;","&#9816;","&#9814;","&#9817;"];
	document.getElementById(posicion).innerHTML = dibujitos[pieza.indexOf(letra)];
}
function mostrarN(letra,posicion){
	var pieza = ["r","d","a","c","t","p"];
	var dibujitos = ["&#9818;","&#9819;","&#9821;","&#9822;","&#9820;","&#9823;"];
	document.getElementById(posicion).innerHTML = dibujitos[pieza.indexOf(letra)];
}
function moverB(pie,pos){
	document.getElementById(posicion[pieza.indexOf(pie)]).innerHTML = "";
	var letra = ["R","D","A","C","T","P"];
	var dibujitos = ["&#9812;","&#9813;","&#9815;","&#9816;","&#9814;","&#9817;"];
	document.getElementById(pos).innerHTML = dibujitos[letra.indexOf(pie.substr(0,1))];
}
function moverN(pie,pos){
	document.getElementById(posicion[pieza.indexOf(pie)]).innerHTML = "";
	var letra = ["r","d","a","c","t","p"];
	var dibujitos = ["&#9818;","&#9819;","&#9821;","&#9822;","&#9820;","&#9823;"];
	document.getElementById(pos).innerHTML = dibujitos[letra.indexOf(pie.substr(0,1))];
}

function check(id){
	if(turno=="Blancas"){
		if(click == 0){
			var letra = ["R","D","A","C","T","P"];
			for (var i=0;i < letra.length;i++){
				if (pieza[posicion.indexOf(id)].substr(0,1) == letra[i]){
					click++;
					piezaXmover = pieza[posicion.indexOf(id)];
				}
			}
			return;
		}else{
			//restriccion de casilla
			moverB(piezaXmover,id);
			//posicion[pieza.indexOf(piezaXmover)]=id;
			//mover(piezaXmover,posicion.indexOf(id));
			click = 0;
			turnar("Negras");
		}
	}
	if(turno=="Negras"){
		if(click == 0){
			var letra = ["r","d","a","c","t","p"];
			for (var i=0;i < letra.length;i++){
				if (pieza[posicion.indexOf(id)].substr(0,1) == letra[i]){
					click++;
					piezaXmover = pieza[posicion.indexOf(id)];
				}
			}
			return;
		}else{
			//restriccion de casilla
			moverN(piezaXmover,id);
			click = 0;
			turnar("Blancas");
		}
	}
}


function movimiento(){
	pieza.push("?");
	posicion.push("?");
}

/************************************
function peon(posicion){

}
function torre(posicion){

}
function caballo(posicion){

}
function alfil(posicion){

}
function rey(posicion){

}
function reina(posicion){

}
*/