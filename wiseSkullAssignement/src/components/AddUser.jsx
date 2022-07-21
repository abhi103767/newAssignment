import React, { useReducer } from 'react'
import {
    Modal,
    Box,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
    useDisclosure,
    Center,
    Form

} from '@chakra-ui/react'
import { addUserData } from '../Redux/actions'
import { useDispatch } from 'react-redux'
export default function Popup() {
    const dispatch2 = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const init = {
        name: "",
        password: "",
        email: "",
        mobile: "",
        address: ""

    }

    function reducer(state, action) {
        switch (action.type) {
            case 'name':
                return {
                    ...state,
                    name: action.payload
                }
            case 'password':
                return {
                    ...state,
                    password: action.payload
                }
            case 'email':
                return {
                    ...state,
                    email: action.payload
                }
            case 'mobile':
                return {
                    ...state,
                    mobile: action.payload
                }
            case 'address':
                return {
                    ...state,
                    address: action.payload
                }
        }
    }


    const [state, dispatch] = useReducer(reducer, init)

    function handleAddUser() {
        dispatch2(addUserData(state))

    }






    return (
        <>
            <Center>
                <Button m='auto' onClick={onOpen}>Add User</Button>
            </Center>
            {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form>
                        <FormControl>
                            <FormLabel> Name</FormLabel>
                            <Input required value={state.name} onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} ref={initialRef} placeholder=' Name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input required value={state.email} onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} placeholder='Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input required value={state.password} onChange={(e) => dispatch({ type: 'password', payload: e.target.value })} type={'password'} placeholder='Password' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Phone</FormLabel>
                            <Input required type='number' value={state.mobile} onChange={(e) => dispatch({ type: 'mobile', payload: e.target.value })} placeholder='Phone' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input required value={state.address} onChange={(e) => dispatch({ type: 'address', payload: e.target.value })} placeholder='Address' />
                        </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={async () => {
                            await handleAddUser();
                            onClose()
                        }} colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}