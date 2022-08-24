// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Table from "./Compoments/Tables";
// // import Tablecovid from "./Compoments/Tablecovid";

// export const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://covid19.ddc.moph.go.th/");

//     console.log(response.data);

//     setData(response.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log("data :", data);
//   return (
//     <div className="container-lg py-3">
//       <Table products={data} />
//     </div>
//   );
// };

// export default App;456789

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Table from "./Compoments/Tables";

// export const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get(
//       "https://covid19.ddc.moph.go.th/api/Cases/round-1to2-by-provinces"
//     );

//     console.log(response.data);

//     setData(response.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log("data :", data);
//   return (
//     <div className="container-lg py-3">
//       <Table products={data} />
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Components/Tables";

export const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"
    );

    console.log(response.data);

    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data :", data);
  return (
    <div className="container-lg py-2">
      <Table products={data} />
    </div>
  );
};

export default App;
