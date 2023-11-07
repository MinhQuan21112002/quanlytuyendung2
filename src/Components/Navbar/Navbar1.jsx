import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import mainlogo from "../../Components/req/jobpandacom-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar1 = () => {
  const navigate = useNavigate();

  const employers = useDisclosure();
  const jobs = useDisclosure();
  const companies = useDisclosure();
  const services = useDisclosure();
  const data = JSON.parse(localStorage.getItem("data"));
  
  return (
    
    <Box
      as={Container}
      zIndex={"3"}
      top={"0"}
      maxW={"100%"}
      h={"72px"}
      // border={"1px"}
      // borderColor={"black"}
      position={"fixed"}
      bgColor={"white"}
      mb="150px"
    >
      <Flex
        direction={"row"}
        w={"80%"}
        h={"100%"}
        m={"auto"}
        // border={"1px"}
        // borderColor={"black"}
        display={"flex"}
      >
        <Box
          // border={"1px"}
          // borderColor={"green"}
          w={"150px"}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          <Link to="/">
            <Image
              w={"90%"}
              src={mainlogo}
              alt="Logo"
              alignItems={"center"}
              cursor={"pointer"}
            />
          </Link>
        </Box>
        <Stack
          direction={"row"}
          // border={"1px"}
          // borderColor={"green"}
          w={"280px"}
          h={"100%"}
          ml={"80px"}
        >
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            w={"33.3%"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            <Menu isOpen={jobs.isOpen}>
              <Button
                _hover={{
                  background: "none",
                  border: "none",
                  textDecoration: "none",
                }}
                border={"none"}
                bgColor={"white"}
                as={Button}
                color={"#445578"}
              >
                <Link to="/jobpage">Jobs</Link>
              </Button>
              <MenuList onMouseEnter={jobs.onOpen} onMouseLeave={jobs.onClose}>
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Popular Categories
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  IT jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Sales jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Marketing jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Data Science jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  HR jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Engineering jobs
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            w={"33.3%"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            <Menu isOpen={companies.isOpen}>
              <MenuButton
                onClick={() => navigate("/companies")}
                _hover={{
                  background: "white",
                  border: "none",
                }}
                p={"0px"}
                border={"none"}
                bgColor={"white"}
                as={Button}
                onMouseEnter={companies.onOpen}
                onMouseLeave={companies.onClose}
                color={"#445578"}
              >
                Companies
              </MenuButton>
              <MenuList
                onMouseEnter={companies.onOpen}
                onMouseLeave={companies.onClose}
              >
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Explore Categories
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Unicorn
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  MNC
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Startup
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Product Based
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Internet
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            w={"33.3%"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            <Menu isOpen={services.isOpen}>
              <Button
                _hover={{
                  background: "white",
                  border: "none",
                }}
                border={"none"}
                bgColor={"white"}
                as={Button}
                color={"#445578"}
              >
                <Link to="/services"> Services </Link>
              </Button>
              <MenuList
                onMouseEnter={services.onOpen}
                onMouseLeave={services.onClose}
              >
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Resume Writing
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Visual Resume
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Resume critique
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Text Resume
                </MenuItem>
                <br />
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Find Jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Jobs4u
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Priority applicant
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Contact us
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Stack>
        <Stack
          display={"flex"}
          ml={"340px"}
          direction={"row"}
          // border={"1px"}
          // borderColor={"green"}
          h={"100%"}
          w={"350px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        > 
        {data!==null?
        <div style={{width:"100%"}}>
          <Button
            border={"1px"}
            borderColor={"#457eff"}
            borderRadius={"50px"}
            color={"#457eff"}
            bg={"white"}
            h={"40px"}
            w={"80px"}
            fontWeight={"600"}
            // onclick={()=>navigate("/login")}
          >
            <Link to="/userInfo">{data.data.username}</Link>
          </Button>
          <Button
            border={"none"}
            borderRadius={"50px"}
            color={"white"}
            borderColor={"#ff7555"}
            bgColor={"#ff7555"}
            w={"100px"}
          >
            <Link to="/logout">Log Out</Link>
          </Button>
          
          </div>
          :
          <div style={{width:"100%"}}>
          <Button
            border={"1px"}
            borderColor={"#457eff"}
            borderRadius={"50px"}
            color={"#457eff"}
            bg={"white"}
            h={"40px"}
            w={"80px"}
            fontWeight={"600"}
            // onclick={()=>navigate("/login")}
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            border={"none"}
            borderRadius={"50px"}
            color={"white"}
            borderColor={"#ff7555"}
            bgColor={"#ff7555"}
            w={"100px"}
          >
            <Link to="/signup">Register</Link>
          </Button>
          
          </div>
          }
        
          <Divider borderColor={"#445578"} orientation="vertical" h={"30%"} />
          
            {(data!==null && data.data.role==="RECRUITER")?
            <Button
            border={"none"}
            borderRadius={"50px"}
            color={"white"}
            borderColor={"#ff7555"}
            bgColor={"#33CC33"}
            w={"100px"}
          >
            <Link to="/job-posting">Đăng bài</Link>
          </Button>
          :
          <Button style={{visibility : 'hidden'}}>
          </Button>
          } 
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar1;
