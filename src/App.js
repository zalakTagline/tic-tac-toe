import { useState, useEffect } from "react";
function App() {
  const [gameObj, setGameObj] = useState({
    game: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" },
    symbol: "O",
    player: "1",
    status:""
  });

  useEffect(() => {
    console.log('gameObj :>> ', gameObj);
    checkWinner();
  }, [gameObj]);

  useEffect(() => {
    if(gameObj.status){

      alert(gameObj.status)
      resetGame()
    }
   
  }, [gameObj.status]);

  const checkWinner = () => {
    if (
      (gameObj.game["1"] !== "" &&
        gameObj.game["1"] === gameObj.game["2"] &&
        gameObj.game["2"] === gameObj.game["3"]) ||
      (gameObj.game["4"] !== "" &&
        gameObj.game["4"] === gameObj.game["5"] &&
        gameObj.game["5"] === gameObj.game["6"]) ||
      (gameObj.game["7"] !== "" &&
        gameObj.game["7"] === gameObj.game["8"] &&
        gameObj.game["8"] === gameObj.game["9"]) ||
      (gameObj.game["1"] !== "" &&
        gameObj.game["1"] === gameObj.game["4"] &&
        gameObj.game["4"] === gameObj.game["7"]) ||
      (gameObj.game["2"] !== "" &&
        gameObj.game["2"] === gameObj.game["5"] &&
        gameObj.game["5"] === gameObj.game["8"]) ||
      (gameObj.game["3"] !== "" &&
        gameObj.game["3"] === gameObj.game["6"] &&
        gameObj.game["6"] === gameObj.game["9"]) ||
      (gameObj.game["1"] !== "" &&
        gameObj.game["1"] === gameObj.game["5"] &&
        gameObj.game["5"] === gameObj.game["9"]) ||
      (gameObj.game["3"] !== "" &&
        gameObj.game["3"] === gameObj.game["5"] &&
        gameObj.game["5"] === gameObj.game["7"])
    ) {
      let player;
      if (gameObj.player === "1") {
        player = "2";
      } else {
        player = "1";
      }
     setGameObj(()=> ({...gameObj ,status : `winner is player ${player}`}) )
    }else{
      if(Object.values(gameObj.game).every((val) => val)){
       setGameObj(()=> ({...gameObj ,status : "Game over on one wins"}) )
         
       }    
    }
  };
 
  const resetGame =() =>{
    setGameObj(() => ({
      game: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" },
      symbol: "O",
      player: "1",
    }));
  }

  const handleChange = (e) => {
    if (!e.target.textContent) {
      const { name } = e.target;
      let symbol;
      if (gameObj.symbol === "X") {
        symbol = "O";
      } else {
        symbol = "X";
      }
      let player;
      if (gameObj.player === "1") {
        player = "2";
      } else {
        player = "1";
      }
     setGameObj(prev =>{
      let game = prev.game
      return { game : {...game, [name] : symbol} ,symbol , player}
     })
    
  }};

  return (
    <div className="App">
      <h1>
        player : {gameObj["player"]} {gameObj["player"] === "1" ? "= X" : "= O"}
      </h1>
      <div className="btn-container">
        {Object.keys(gameObj.game).map((val) => (
          <button key={val} id={val} name={val} onClick={handleChange}>
            {gameObj.game[val]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
