import { Box, Button, Heading, Input, Text, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { mainUpdateUsers } from "../Redux/EditActions";
import { useDispatch, useSelector } from "react-redux";


export const Editpage = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector(state => state.editInfo)
  const success = state.isSuccess

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    mobile: ""
  })

  const [city, setCity] = useState("")
  const [population, setPopulation] = useState(0)

  async function handleUpdate() {

    await dispatch(mainUpdateUsers(id, user))

    navigate('/')
  }

  function handleChange(e) {
    setUser((perv) => {

      return {
        ...perv,
        [e.target.name]: e.target.value
      }
    }
    )
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id}`)
      .then(res => {
        // console.log(res.data)
        setUser(res.data);
      })
      .catch(err => {
        console.log("edit err", err)
      })
  }, [])

  return (
    <Container>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Name</Text>
        <Input value={user.name} onChange={(e) => handleChange(e)} name='name' />
      </Box>
      <Box>
        <Text>Email</Text>
        <Input value={user.email} onChange={(e) => handleChange(e)} name='email' />
      </Box>
      <Box>
        <Text>Address</Text>
        <Input value={user.address} onChange={(e) => handleChange(e)} name='address' />
      </Box>
      <Box>
        <Text>Password</Text>
        <Input value={user.password} onChange={(e) => handleChange(e)} name='password' />
      </Box>
      <Box>
        <Text>Phone</Text>
        <Input value={user.mobile} onChange={(e) => handleChange(e)} name='mobile' />
      </Box>


      <Button onClick={handleUpdate} data-cy="update-button">Update</Button>
      {/* { success && <Text textAlign={'center'}> Edit Successfull</Text>} */}
    </Container>
  );
};

export default Editpage;
