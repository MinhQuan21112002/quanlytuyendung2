import { Alert, AlertIcon, Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import { BsBag ,BsFillStarFill} from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { loadJobDetail } from '../../redux/JobDetail/Action';
import {
    
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
  
import { ToastContainer, toast } from "react-toastify";

function JobDetail() {
    const accessToken = JSON.parse(localStorage.getItem("data"))!==null?JSON.parse(localStorage.getItem("data")).access_token:null;
    const submitHandler=async (e) => {
        console.log( e.target.value)
        const jobId=e.target.value;
        try {
           
            const{Data}=await axios.post('http://localhost:8080/apply-job',  jobId , {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
                },
              });
            console.log("user login succesfully done");
            
            toast.success("Apply Job Successfully", {
                position: "top-center",
              });
          } catch (error) {
           
            toast.error(error, {
              position: "top-center",
            });
          
          }
       
    }


    const params = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadJobDetail(params.id));
      },[params.id]);
    const data = useSelector((store) => store.jobDetail.data);


    return (
        <Box >
          
            <Text mb='100px'>hello</Text>
            <Box display='flex' justifyContent='space-evenly'>
                <Box w='850px' >
                    <Box ml='50px'  p='20px' boxShadow= 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' color='RGBA(0, 0, 0, 0.76)' >
            
            <Text fontSize='20px' fontWeight='bold'>{data.name}</Text>
            <Image style={{width:"200px"}} src={`${data.image}`} />
            <Text fontSize='15px' >{data.language} ({data.position})</Text>
           <Box display='flex' justifyContent='space-between' mb='20px'>
            <Box>
            <Text display='flex' alignContent='center'><Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'> <BsBag/> </Box> {data.experience}</Text>
            <Text display='flex' alignContent='center'><Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'> <CiLocationOn/> </Box> {data.location} </Text>
            
            </Box>
            <Box>
            <Button width='100px' bg='blue.400' value={data.id} onClick={submitHandler}>Apply</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
        
          <Alert
                bg=''
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
                >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your application. Our team will get back to you soon.
                </AlertDescription>
            </Alert>
         
        </AlertDialogContent>
      </AlertDialog>
               
            </Box>
            </Box>
            <hr/>
            <Text mt='10px'display='flex' fontSize='12px' >Posted : 14/10/2023<Text ml='10px'  mr='10px' fontWeight='bold'>{data.timetopost}  </Text>jobAplicable : <Text ml='10px'  mr='10px' fontWeight='bold'>less than {data.blanksheet}  </Text></Text>
                    </Box>

                    <Box mt='30px' ml='50px'  p='20px' boxShadow= 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' color='RGBA(0, 0, 0, 0.76)'>
            <Text fontSize="20px" fontWeight='bold'>Job description</Text>
            <Text width='60%' lineHeight='30px'>{data.dis}</Text>

            <Box >
            <Text mt='30px' color='RGBA(0, 0, 0, 0.50)'>Vị trí</Text>
            <Text  > {data.position} </Text>
            <Text  color='RGBA(0, 0, 0, 0.50)'>Skill</Text>
            <Text  > {data.requirements} </Text>
            <Text  color='RGBA(0, 0, 0, 0.50)'>Doanh nghiệp</Text>
            <Text > {data.detailLocation} </Text>
            <Text  color='RGBA(0, 0, 0, 0.50)'>Công việc</Text>
            <Text > {data.name} </Text>
            <Text mt='30px' fontWeight='bold'> Education </Text>
            <Text  color='RGBA(0, 0, 0, 0.50)'>UG :</Text>
            <Text>Graduation Not Required</Text>
           
            </Box>
                    </Box>
                    <Box ml='50px' mt='30px'  p='20px' boxShadow= 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' color='RGBA(0, 0, 0, 0.76)' >
                        <Text fontSize="20px" fontWeight='bold'>About Compony </Text>
                        <Text>Our dream is to become an top  in {data.industry}, multi-dimensional service provider in the {data.industry} world. Through industry oriented solutions and next gen technologies,</Text>
                            <Text mt='30px'><Text color='RGBA(0, 0, 0, 0.40)'>Location :</Text> {data.location}</Text>
                        </Box>

                        <Box ml='50px' mt='30px'  p='20px' mb='60px' >
                        <Text fontSize="20px" fontWeight='bold'>Beware of imposters!</Text>
                        <Text color='RGBA(0, 0, 0, 0.35)'>JobPanda.com does not promise a job or an interview in exchange of money. Fraudsters may ask you to pay in the pretext of registration fee, Refundable Fee...</Text>
                        </Box>
              

              </Box>
              <Box width='400px' height='400px'>
                <Box p='20px' boxShadow= 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'>
                    <Text fontSize='18px' mb='20px' fontWeight='bold'> Jobs you might be interested in</Text>
                    <Text fontSize='15px' fontWeight='bold'> DTP Operator</Text>
                    
                     <Text display='flex' textAlign='center'> <Text fontSize='13px' mt='1px' mr='10px' > Brilliant Prakashan </Text> 4.1 <Text mt='2.5px' color='orange' ml='2px' mr='10px'> <BsFillStarFill/>  </Text> (41 reviews)</Text>
                     <Text display='flex' alignContent='center'><Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'> <CiLocationOn/> </Box> {data.location} </Text>
                    <Text ml='70%' mb='20px'>19 days ago</Text>
                    <hr/>

                    <Text fontSize='15px' fontWeight='bold'> DTP Operator</Text>
                    
                     <Text display='flex' textAlign='center'> <Text fontSize='13px' mt='1px' mr='10px' > Physicswallah </Text> 4.1 <Text mt='2.5px' color='orange' ml='2px' mr='10px'> <BsFillStarFill/>  </Text> (41 reviews)</Text>
                     <Text display='flex' alignContent='center'><Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'> <CiLocationOn/> </Box> Siliguri </Text>
                    <Text ml='70%' mb='20px'>5 days ago</Text>
                    <hr/>

                    <Text fontSize='15px' fontWeight='bold'> DTP Designer</Text>
                    <Text display='flex' textAlign='center'> <Text fontSize='13px' mt='1px' mr='10px' > Edwiser Innovation Hub Pvt. </Text> 4.1 <Text mt='2.5px' color='orange' ml='2px' mr='10px'> <BsFillStarFill/>  </Text> (41 reviews)</Text>
                    <Text display='flex' alignContent='center'><Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'> <CiLocationOn/> </Box> Hydrabad </Text>
                   <Text ml='70%' mb='20px'>1 day ago</Text>
                   <hr/>

                   <Text mt='5px' fontWeight='bold' color='blue.500'>View All</Text>
                </Box>
                <Box p='20px' mt='20px' boxShadow= 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'>
                    <Text fontSize='18px' mb='20px' fontWeight='bold'> Reviews</Text>
                    <Text fontSize='15px' fontWeight='bold'> H.O.D Mathematics in Rachi</Text>
                    
                     <Text display='flex' textAlign='center'> <Text fontSize='13px' mt='1px' mr='10px' > Anonymous </Text> <Text mt='2.5px' color='orange' ml='2px' mr='10px'>   </Text></Text>
                     <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                            <BsFillStarFill
                                key={i}
                                color={i < 3 ? 'orange' : 'yellow'}
                            />
                            ))}
                            </Box>
                  
                    <Text ml='70%' mb='20px'>19 days ago</Text>
                    <Text fontSize='16px' fontWeight='bold'>Likes</Text>
                    <Text fontSize='16px' >Only Clear envirment</Text>
                    <hr/>

                    

                  

                   <Text mt='5px' fontWeight='bold' color='blue.500'>View All</Text>
                </Box>

                </Box>
            </Box>
            <ToastContainer />
        </Box>
        
    )
}

export default JobDetail