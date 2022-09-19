
let board = [];
let num = 1;
let auxp = 0;

const darClick = (row, col) =>{

    if(num==1){
        board[row][col].suValor = true
        board[row][col].signo = "X"
        num = 2
    }else{
        board[row][col].suValor = true
        board[row][col].signo = "O"
        num = 1
    }
    
    
    actualizarBoard(board)
}

const clickJugador = () => {
    let caja = document.getElementById("jugar")
    if(num ==1){
        caja.innerHTML = "Haga clik. si termino de elegir jugador 2"
        num = num + 1
    }else{
        caja.innerHTML = "Haga clik. si termino de elegir jugador 1"
        num = num - 1
    }
}

const actualizarBoard = (board) =>{
    for(let i = 0; i<board.length; i++){
        let casillas = board[i]
        for(let j = 0; j<casillas.length;j++){
            let caja = document.getElementById(i+"_"+j)
            if(casillas[j].suValor){
                caja.innerHTML=casillas[j].signo
            }else{
            }
        }
    }
    //  verificarGanador()
    if(estanLlenos(board)){
        if(aux==0){
            let caja = document.getElementById("ganar")
            caja.innerHTML="Tres en Raya: EMPATE"
        }
    }
}

const verificarGanador = () => {
    let aux = 0
    let numx = 0
    let numo = 0
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board.length; j++){
            if(board[i][j].signo == "X"){
                numx = numx +1
                numo = 0
                
            }else if(board[i][j].signo == "O"){
                numo = numo +1
                numx = 0
            }
        }
        if(numx == 3 || numo == 3){ 
            aux = 1;
            break;
        }
    }
    if(aux==1){
        let caja = document.getElementById("ganar")
        caja.innerHTML="Tres en Raya: GANO EL JUGADOR "+ num
    }

}

const estanLlenos = (board) => {
    for(let i =0; i<board.length;i++){
        let caja = board[i]
        for(let j = 0; j<caja.length;j++){
            if(caja[j].signo==""){
                return false
            }
        }
    }
    return true
}

const crearBoard = (row, col) => {
    const list = []
    for(let i = 0; i<row; i++){
        let casillas = []
        for(let j = 0; j<col;j++){
            casillas.push({ suValor : false , signo : "X"})
        }
        list.push(casillas)
    }
    return list
}

const main = () => {
    board = crearBoard(3,3)
    actualizarBoard(board)

}

main()