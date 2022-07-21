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
  Button,
  Center,
} from "@chakra-ui/react";
import Popup from "../components/AddUser";
import React, { useEffect } from "react";
import { mainGetUsersData, getUsersSuccess } from "../Redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import Unit from "../components/Unit";
import { useNavigate, useSearchParams } from "react-router-dom";


const Homepage = () => {
  const navigator = useNavigate();
  const state = useSelector(state => state.users)
  const dispatch = useDispatch()
  const [url, setUrl] = useSearchParams()
  const valu = url.get("order")


  const arr = state.users.map(item => {
    return (
      <Unit key={item.id} obj={item} />
    )
  })






  useEffect(() => {
    dispatch(mainGetUsersData())
  }, [])

  return (
    <>
      <Center>
        <Popup />

        <Button onClick={
          () => {
            localStorage.removeItem('email');
            navigator('/login');
          }
        } ml={'20px'}>Log Out</Button>
      </Center>
      <Box>
        <Flex padding="0 1rem" mb="2rem">

          <RadioGroup>
          </RadioGroup>
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th w='1fr'>Name</Th>
                <Th w='1fr'> Email</Th>
                <Th w='1fr'>Address</Th>
                <Th w='1fr'>Password</Th>
                <Th w='1fr'>Phone</Th>
                <Th w='.25fr'>Edit</Th>
                <Th w='.25fr'>Delete</Th>
              </Tr>
            </Thead>
            <Tbody data-cy="table-body">
              {/* map through the fetched country list, to form table rows */}
              {arr}
            </Tbody>
          </Table>
        </TableContainer>

      </Box>

    </>
  );
};

export default Homepage;
