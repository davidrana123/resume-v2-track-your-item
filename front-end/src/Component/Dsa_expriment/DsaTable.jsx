import React , { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function DsaTable() {
  // const baseURL = "https://jsonplaceholder.typicode.com/comments";
  const baseURL = "https://jsonplaceholder.typicode.com/users"
  const [post, setPost] = React.useState([{ body: 'data on find', email: 'data on find', id:'1', name:'data on find', postId:'1' }]);
  const [origanlData, setOriginalData] = React.useState([ { body: 'data on find', email: 'data on find', id:'1', name:'data on find', postId:'1' } ]);

  useEffect(() => {
    // Declare and initialize newMoreData as an array
    const newMoreData = [
      {
        "id": 11,
        "name": "anna",
        "email": "Anna@april.biz",
        "pd" : "Anna"
      },
      {
        "id": 12,
        "name": "hannah",
        "email": "Hannah@april.biz",
        "pd" : "Hannah"
      },
      {
        "id": 13,
        "name": "otto",
        "email": "Otto@april.biz",
        "pd" : "Otto"
      },
      {
        "id": 13,
        "name": "otto",
        "email": "Otto@april.biz",
        "pd" : "Otto"
      },
      {
        "id": 13,
        "name": "otto",
        "email": "Otto@april.biz",
        "pd" : "Otto"
      },
      {
        "id": 13,
        "name": "otto",
        "email": "Otto@april.biz",
        "pd" : "Otto"
      }
    ];
    axios.get(baseURL).then((response) => {
      let arr = []
      findUniqueArray([...response.data, ...newMoreData])
    });
    // reverseInt()
    checkAnagrams()
  }, []);

  

  const searchHear =  (e) => {
    let value = e.target.value;
    const find = origanlData.filter((pro) => pro.name.toLocaleLowerCase().includes(value) || pro.email.toLocaleLowerCase().includes(value) || pro.body.toLocaleLowerCase().includes(value))
    setPost(find)
  }

  const reverseString = (data) => {
      if(data){
        let revereseData = ''
        for( let i = data.length - 1 ; i >= 0 ; i-- ){
          revereseData = revereseData + data[i];
        }
        return revereseData;
      }else{
        return '';
      }
  } 

  const factorialNumber = (number) => {
      let fact = 1;
      if(number === 0) return fact;
      for(let i = 1 ; i <= number ; i++){
        fact = fact * i;
      }
      return fact ; 
  }

  const isCheckPalindrome = (name) => {
      let reverseString = '';
      for(let i = name.length -1  ; i>=0; i--){
        reverseString =  reverseString + name[i]
      }
      if(reverseString === name){
        return 'True';
      }else{
        return 'False';
      }
  }

  const findLongestWordFun = (data) => {
      let sentanceArray = data.split(' ')
      let findedLongestWord = '';
      for(let i = 0 ;  i < sentanceArray.length  ; i++){
          if(sentanceArray[i].length > findedLongestWord.length){
            findedLongestWord = sentanceArray[i];
          }
    }
    return findedLongestWord;
  }

 const findIDFizzBuzz = (id) => {
    if(id % 3 === 0 || id % 5 === 0){
      if(id % 3=== 0){
        return 'Fizz'
      }else{
        return 'Buzz'
      }
    }else{
      return id;
    }
 }

 const findUniqueArray = (origanlData) => {
  const uniqueObjects = [];

  for (let i = 0; i < origanlData.length; i++) {
    const currentObject = origanlData[i];
    let isDuplicate = false;
  
    // Check if the currentObject's "id" already exists in uniqueObjects
    for (let j = 0; j < uniqueObjects.length; j++) {
      if (currentObject.id === uniqueObjects[j].id) {
        isDuplicate = true;
        break;
      }
    }
  
    // If it's not a duplicate, add it to uniqueObjects
    if (!isDuplicate) {
      uniqueObjects.push(currentObject);
    }
  }
  setPost(uniqueObjects);
  setOriginalData(uniqueObjects);
 }

 const reverseInt = () =>{
  let num = 123456;
  let str = num.toString();
  let reversStr = str.split('').reverse().join('')
  let backtoInt = parseInt(reversStr);
  console.log('reverseInt',backtoInt);
 }

 const checkAnagrams = () => {
  let firstName = "abc";
  let secondName = "cba";
  let firstSort = firstName.split('').sort().join('');
  console.log('firstSort',firstSort)
  let secondSort = secondName.split('').sort().join('');
  if(firstSort === secondSort){
    return "Anagrams"
  }else{
    return "Not Anagrams"
  }
 }

  return (
    <>
    
    <br />
    <br />
    <br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell >Id</TableCell>
          <TableCell >Name</TableCell>
            <TableCell >ReverseName</TableCell>
            {/* <TableCell >Email</TableCell> */}
            <TableCell >IdFactorial</TableCell>
            <TableCell >Palindrome</TableCell>
            <TableCell >LongestWord</TableCell>
            <TableCell >IDFizzBuzz</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {post.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell >{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                { reverseString(row.name) }
              </TableCell>
              {/* <TableCell >{row.email}</TableCell> */}
              <TableCell >{factorialNumber(row.id)}</TableCell>
              <TableCell >{isCheckPalindrome(row.name)}</TableCell>
              <TableCell >{findLongestWordFun(row.name)}</TableCell>
              <TableCell >{findIDFizzBuzz(row.id)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </>
  );
}

