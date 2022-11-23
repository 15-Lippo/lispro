const data = await response.json();
    setItems(data.data.items);
    console.log(items);
  };

  return (
    <>
      <DexTicker />
      <Box>
        <Text
          ml={10}
          right={2}
          letterSpacing={1}
          fontSize="xl"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Tokens Analytics
        </Text>
        <Text
          ml={10}
          right={2}
          color="gray.400"
          letterSpacing={1}
          fontSize="md"
          fontWeight="thin"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Overview
        </Text>
      </Box>
      <DexSelectBtn getApi={getApi} />
      <TokenTable data={items} />
    </>
  );
}
export default Tokens;


  
    
    
