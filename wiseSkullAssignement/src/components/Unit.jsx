import React from 'react'
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { deleteUserData } from '../Redux/actions';

function Unit({ obj }) {
  // console.log(obj)
  const dispatch = useDispatch()
  function handleDelete() {
    dispatch(deleteUserData(obj.id))
  }

  {/* <Flex ml='30px'>
        <Box w='1fr'></Box>
        <Box w='1fr'></Box>
        <Box w='1fr'></Box>
        <Box border='.5px solid green' bg='blue.400'  w='.25fr'><Link to={`/country/${obj.id}`}><Box ml='30px'  cursor='pointer'  >Edit</Box></Link></Box>
        <Box border='.5px solid green' pl='30px' onClick={handleDelete} cursor='pointer' bg='red.400'  w='.25fr'>Delete</Box>
    </Flex> */}
  {/* <Table>
    <Tbody> */}
  return (


    <Tr>
      <Td >{obj.name}</Td>
      <Td > {obj.email}</Td>
      <Td>{obj.address}</Td>
      <Td  >{obj.password}</Td>
      <Td >{obj.mobile}</Td>
      <Td color='blue' > <Link to={`/country/${obj.id}`}>Edit</Link></Td>
      <Td color={'red'} onClick={handleDelete} cursor='pointer' >Delete</Td>
    </Tr>



  )
}

export default Unit