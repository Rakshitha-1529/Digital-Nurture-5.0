import officeImage from "./office.jpeg";
import "./App.css";

function App() {

    const office = {
        Name: "DBS",
        Rent: 50000,
        Address: "Chennai"
    };

    const officeList = [
        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },
        {
            Name: "Regus",
            Rent: 75000,
            Address: "Hyderabad"
        },
        {
            Name: "SmartWorks",
            Rent: 45000,
            Address: "Bangalore"
        }
    ];

    const element = "Office Space";

    const jsxatt = (
        <img
            src={officeImage}
            width="25%"
            height="25%"
            alt="Office Space"
        />
    );

   return (
<div className="container">

<h1>{element}, at Affordable Range</h1>

{jsxatt}

<h2>Name: {office.Name}</h2>

<h3 className={office.Rent <= 60000 ? "textRed" : "textGreen"}>
    Rent: Rs. {office.Rent}
</h3>

<h3>Address: {office.Address}</h3>

<hr/>

<div className="officeList">

{
officeList.slice(1).map((item,index)=>{

let colors=[];

if(item.Rent<=60000)
{
colors.push("textRed");
}
else
{
colors.push("textGreen");
}

return(

<div className="officeCard" key={index}>

<h2>Name: {item.Name}</h2>

<h3 className={colors}>
Rent: Rs. {item.Rent}
</h3>

<h3>Address: {item.Address}</h3>

</div>

)

})
}

</div>

</div>
);
}

export default App;