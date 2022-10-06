import './App.css';
import React, {useState} from "react";
import { BarList,
  Card,
  Title,
  Bold,
  Flex,
  Text,
  BarChart
} from "@tremor/react";
import '@tremor/react/dist/esm/tremor.css';

const orders = [
  { name: 'Team 1', value: 456 },
  { name: 'Team 2', value: 351 },
  { name: 'Team 3', value: 271 }
];

const dataFormatter = (input) => {
  return "$ " + Intl.NumberFormat("us").format(input).toString();
};



var teamRev = [{}]; 
var items=[{}];

// function fetchAnalytics() {
//   fetch(
//     "https://raw.githubusercontent.com/end0cr1ne/eg_insta_tracker/master/gmv.json")
//                 .then((res) => res.json())
//                 .then((json)=>{
//                   items.push(json);           
                         
//                 })
//                 .then(()=>{                  
//                   teamRev[0]["topic"]="Revenue";
//                   Object.keys(items[1]).forEach(
//                     key=>{
//                       if(!key.includes("localhost"))
//                       {
//                         teamRev[0][key.toString()]=items[1][key]
//                       }
//                     });
//                   this.setDataisLoaded(true);                                
//                 })
// }


function App() {
  const [dataisLoaded, setDataIsLoaded] = useState(false);

  // const data = fetchAnalytics(setDataIsLoaded);
  
  fetch(
    "https://raw.githubusercontent.com/end0cr1ne/eg_insta_tracker/master/gmv.json")
                .then((res) => res.json())
                .then((json)=>{
                  items.push(json);           
                         
                })
                .then(()=>{                  
                  teamRev[0]["topic"]="Revenue";
                  Object.keys(items[1]).forEach(
                    key=>{
                      if(!key.includes("localhost"))
                      {
                        teamRev[0][key.toString()]=items[1][key]
                      }
                    });
                  setDataIsLoaded(true);                                
                })  

  return (
    dataisLoaded && <div className="App">
      <span>
        <a href="https://eguerra.in/"> <img className="EguerraIcon" src='https://venky.eguerra.in/icons/logo.webp' /> </a>
        <Title> <a className="HomePageLink" href="https://eguerra.in/"> eguerra </a> </Title>
      </span>
      <div className="SpaceDiv"></div>
      <h2>Leader Board</h2>
      <div className="SpaceDiv"></div>
      <Card>
        <Title>Ranking : Revenue</Title>     
        <BarChart
          data={teamRev}
          dataKey="topic"
          categories={["192", "eguerra3", "store1", "venky"]}
          colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
          valueFormatter={dataFormatter}
          marginTop="mt-6"
          yAxisWidth="w-12"
          showTooltip={true}         
        />
      </Card> 
    </div>
  );
}

export default App;