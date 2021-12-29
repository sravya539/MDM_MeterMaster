import React,{useState,useEffect} from "react";
import axios from "axios"
import { Table,TableCell,TableHead,TableRow,TableBody} from "@mui/material";

 function Search(){
     const[posts,setPosts]=useState([])
     useEffect(()=>{
         axios.get("https://fakestoreapi.com/products")
         .then(res =>{
             console.log(res)
             setPosts(res.data)
         })
         .catch(err =>{
             console.log(err)
         })
     })
     return(
         <div>
             <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>

           

          </TableRow>

        </TableHead>

        <TableBody>

          {posts.map((post) => (

            <TableRow key={post.id}>

              <TableCell>{post.category}</TableCell>

              <TableCell>{post.title}</TableCell>

              <TableCell>{post.rating.count}</TableCell>

              <TableCell>{post.rating.rate}</TableCell>

             

            </TableRow>

          ))}

        </TableBody>

      </Table>



         </div>
     )
 }
 export default Search;

