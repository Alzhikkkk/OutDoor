import About from "../components/About";
import Card from "../components/Card";
import Promise from "../components/Promise";
import Shop from "../components/Shop";
import View from "../components/View";
import Guide from "../components/Guide"
import Magazine from "../components/Magazine";
function Main() {
    return (
      <main className="main">
           <View></View>
           <About></About>
           <Promise></Promise>
           <Card></Card>
           <Shop></Shop>
           <Guide></Guide>
           <Magazine></Magazine>
      </main>
    );
  }
  
  export default Main;