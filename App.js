const name1 ="Kabil";
const name2 ="Kabil";
const object1 ={name:"Kabil"};
const object2 ={name:"Kabil"};
// function compare1(object1,object2) {
//     return (
//     object1 === object2
    
//   )
// }
function compare2() {
    
    console.log(name1 === name2)
    console.log(object1===object2)
    
  
}
    function App()
    {
        return (
        <div>
            <button onClick={compare2}>click</button>
            </div>

        )
    }

ReactDOM.render(<App/>,document.getElementById("mydiv"));