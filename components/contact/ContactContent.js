// import EmailInput from './EmailInput.js'
// import NameInput from './NameInput.js'
// import InputItem2 from './InputItem2.js'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { emailjs_user_id, emailjs_access_token, emailjs_template_id } from '../../client';

function ContactContent() {

    const [firstNameValid, setFirstNameValid] = useState(false)
    const [lastNameValid, setLastNameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [messageValid, setMessageValid] = useState(false)

    function sendEmail(e) {
        if (!(firstNameValid & lastNameValid & emailValid & messageValid)) {
            e.preventDefault();
            alert("Please make sure all fields are completed!");
            console.log("NO");
        } else {
            emailjs.sendForm('gmail', emailjs_template_id, e.target, emailjs_user_id)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            alert("Your message has been submitted!");
        }
    }

    return (
        <Flex>
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}
                as='form'
                onSubmit={sendEmail}>
                <div>
                    <Flex>
                        <Box height="80px" width={1} padding="10px">
                            <Label>FIRST NAME</Label>
                            <Input
                                placeholder=''
                                type="text"
                                name="first_name"
                                onChange={() => {
                                    console.log(event.target.value)
                                    var inputText = event.target.value
                                    if (inputText != '') {
                                        setFirstNameValid(true)
                                    } else {
                                        setFirstNameValid(false)
                                    }
                                }}
                            />
                        </Box>
                        <Box height="80px" width={1 / 5} padding="10px">
                            {firstNameValid ? <Image src={'../static/check1.png'}></Image> : <Image src={'../static/redex1.png'}></Image>}
                        </Box>
                    </Flex>
                </div>


                <div>
                    <Flex>
                        <Box height="80px" width={1} padding="10px">
                            <Label>LAST NAME</Label>
                            <Input
                                placeholder=''
                                type="text"
                                name="last_name"
                                onChange={() => {
                                    console.log(event.target.value)
                                    var inputText = event.target.value
                                    if (inputText != '') {
                                        setLastNameValid(true)
                                    } else {
                                        setLastNameValid(false)
                                    }
                                }}
                            />
                        </Box>
                        <Box height="80px" width={1 / 5} padding="10px">
                            {lastNameValid ? <Image src={'../static/check1.png'}></Image> : <Image src={'../static/redex1.png'}></Image>}
                        </Box>
                    </Flex>
                </div>

                <div>
                    <Flex>
                        <Box height="80px" width={1} padding="10px">
                            <Label>EMAIL</Label>
                            <Input
                                placeholder=''
                                type="text"
                                name="user_email"
                                onChange={() => {
                                    console.log(event.target.value)
                                    var inputText = event.target.value
                                    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                    if (inputText.match(mailFormat)) {
                                        setEmailValid(true)
                                    } else {
                                        setEmailValid(false)
                                    }
                                }}
                            />
                        </Box>
                        <Box height="80px" width={1 / 5} padding="10px">
                            {emailValid ? <Image src={'../static/check1.png'}></Image> : <Image src={'../static/redex1.png'}></Image>}
                        </Box>
                    </Flex>
                </div>

                <div>
                    <Flex>
                        <Box height="80px" width={1} padding="10px 10px 240px 10px">
                            <Label>YOUR MESSAGE</Label>
                            <Textarea
                                height='200px'
                                type="text"
                                name="message"
                                onChange={() => {
                                    console.log(event.target.value)
                                    var inputText = event.target.value
                                    if (inputText != '') {
                                        setMessageValid(true)
                                    } else {
                                        setMessageValid(false)
                                    }
                                }}
                            />
                        </Box>
                        <Box height="80px" width={1 / 5} padding="10px">
                            {messageValid ? <Image src={'../static/check1.png'}></Image> : <Image src={'../static/redex1.png'}></Image>}
                        </Box>
                    </Flex>
                </div>

                <Button
                    variant='outline'
                    color='green'
                >SUBMIT</Button>

            </Box >

            <Box width={1 / 2} >
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['350px', '350px'],
                    }}
                    padding="30px"
                />

            </Box>
            <Box width={1 / 5}></Box>
        </Flex >
    );
}

export default ContactContent;