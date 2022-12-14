import React, { useEffect, useRef } from "react";
import {
  Button,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Box,
  Text,
  useColorModeValue,
  Divider,
  Image,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function SelectButton(props) {
  const BoxBgColor = useColorModeValue("gray.200", "#243036");
  const BoxBorderColor = useColorModeValue("gray.200", "gray.500");
  const ButtonColorMode = useColorModeValue("#319795", "#00AF91");
  const ButtonColorMode1 = useColorModeValue("gray.300", "#303E46");
  const ButtonBorderColorMode1 = useColorModeValue("gray.300", "gray.600");

  const ref = useRef(null);
  useForm();

  const myfunc = () => {
    console.log("I was activated 1 seconds later");
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 1000);
  }, []);

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      right={0}
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={BoxBgColor}
      borderColor={BoxBorderColor}
      borderRightWidth="1px"
      w="55"
      borderRadius="xl"
    >
      <Flex justifyContent="flex-end" mx={2} mt={5}>
        <form onSubmit={props.getApi}>
          <FormControl>
            <Stack spacing={1} direction="row">
              <Select
                textAlign="center"
                maxW={118}
                name="chainId"
                type="number"
                borderWidth={1}
                borderColor={ButtonBorderColorMode1}
                bg={ButtonColorMode1}
                shadow="md"
              >
                <option name="chainId" value="1">
                  Ethereum
                </option>
                <option name="chainId" value="137">
                  Polygon
                </option>
                <option name="chainId" value="43114">
                  Avalanche
                </option>
                <option name="chainId" value="56">
                  Binance
                </option>
                <option name="chainId" value="1284">
                  Moonbeam
                </option>
                <option name="chainId" value="42161">
                  Arbitrum
                </option>
                <option name="chainId" value="250">
                  Fantom
                </option>
              </Select>
              <Button
                ref={ref}
                onClick={myfunc}
                borderRadius="lg"
                right="0"
                bg={ButtonColorMode}
                type="submit"
                textTransform="uppercase"
                shadow="lg"
              >
                analyse
              </Button>
            </Stack>
          </FormControl>
          <Flex justifyContent="space-around">
            <RadioGroup
              my={5}
              textAlign="left"
              maxW={150}
              name="dexName"
              type="number"
              defaultValue="sushiswap"
            >
              <Text
                mb={2}
                color={"gray.400"}
                letterSpacing={0.3}
                fontSize="md"
                fontWeight="thin"
                decoration="lightblue"
                textTransform="uppercase"
              >
                Dexes Selection
              </Text>
              <Stack
                spacing={1.5}
                direction="column"
                textTransform="uppercase"
                fontWeight="semibold"
                fontSize="xs"
              >
                <Radio
                  size="sm"
                  colorScheme="red"
                  name="dexName"
                  value="uniswap_v2"
                  borderColor="gray.600"
                >
                  Uniswap
                </Radio>
                <Radio
                  size="sm"
                  name="dexName"
                  colorScheme="green"
                  value="sushiswap"
                  borderColor="gray.600"
                >
                  Sushiswap
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="orange"
                  name="dexName"
                  value="pancakeswap"
                  borderColor="gray.600"
                
        borderColor="gray.600"
        alignContent="space-between"
        mx={6}
        maxWidth={180}
      >
        <Divider />
      </Box>
      <Flex mx="16" bottom={1} pos="fixed">
        <Image shadow="xl" width={120} src="/logo.png" alt="covalent logo" />
      </Flex>
    </Box>
  );
}
