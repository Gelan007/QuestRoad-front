// import React, { useEffect, useState } from "react";
// import {  Switch, Link, NavLink } from "react-router-dom";
// import { Route } from "react-router";
// import { BrowserRouter } from "react-router-dom";
// import { Button } from "react-admin";
//
//
//
// function Database(props){
//
//     async function createBackup(){
//
//         let res = await fetch("https://localhost:44312/api/Database", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Authorization": "Bearer "+ localStorage.getItem("tok"),
//             },
//         });
//         console.log(res.status);
//     }
//     async function getLastBackup(){
//         let res = await fetch("https://localhost:44312/api/Database/RestoreByLastBackup", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Authorization": "Bearer "+ localStorage.getItem("tok"),
//             },
//         });
//         console.log(res.status);
//
//     }
//
//
//     return (
//         <BrowserRouter>
//             <div >
//                 <nav>
//                     <div >
//                         <ul >
//                             <li>
//                                 {/* <NavLink>dsads</NavLink> */}
//                                 <Link to={'./Database'} onClick={createBackup} className="nav-link">Create Backup</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to={'./Database'} onClick={getLastBackup} className="nav-link">Restore</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <br></br>
//                 <Switch>
//
//                 </Switch>
//             </div>
//         </BrowserRouter>
//
//     )
//
//
// }
//
// export default  Database;