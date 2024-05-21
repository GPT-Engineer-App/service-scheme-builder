import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Select, FormControl, FormLabel, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useToast, Box, IconButton } from "@chakra-ui/react";
import { FaUpload, FaTrash } from "react-icons/fa";

const Index = () => {
  const [documents, setDocuments] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState({});
  const [wordCounts, setWordCounts] = useState({});
  const [minWordCount, setMinWordCount] = useState(500);
  const [maxWordCount, setMaxWordCount] = useState(500000);
  const [surveyResponse, setSurveyResponse] = useState("");
  const [depositRate, setDepositRate] = useState(20);
  const toast = useToast();

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setDocuments([...documents, ...files]);
  };

  const handleServiceChange = (docIndex, service) => {
    setSelectedServices({
      ...selectedServices,
      [docIndex]: service,
    });
  };

  const handleWordCountChange = (docIndex, wordCount) => {
    setWordCounts({
      ...wordCounts,
      [docIndex]: wordCount,
    });
  };

  const handleRemoveDocument = (index) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setDocuments(newDocuments);
  };

  const handleCheckout = () => {
    let totalWordCount = 0;
    let totalPrice = 0;

    documents.forEach((_, index) => {
      const wordCount = wordCounts[index] || 0;
      const service = selectedServices[index];
      const serviceRate = services.find((s) => s.name === service)?.rate || 0;

      totalWordCount += wordCount;
      totalPrice += wordCount * serviceRate;
    });

    if (totalWordCount < minWordCount || totalWordCount > maxWordCount) {
      toast({
        title: "Error",
        description: `Word count must be between ${minWordCount} and ${maxWordCount}.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const deposit = (totalPrice * depositRate) / 100;

    // Here you would typically send the data to your backend server
    console.log("Documents:", documents);
    console.log("Selected Services:", selectedServices);
    console.log("Word Counts:", wordCounts);
    console.log("Survey Response:", surveyResponse);
    console.log("Total Price:", totalPrice);
    console.log("Deposit:", deposit);

    toast({
      title: "Checkout Successful",
      description: `Total Price: $${totalPrice.toFixed(2)}, Deposit: $${deposit.toFixed(2)}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Editing Services Pricing</Text>

        <FormControl>
          <FormLabel>Upload Documents</FormLabel>
          <Input type="file" multiple onChange={handleFileUpload} />
        </FormControl>

        {documents.map((doc, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>{doc.name}</Text>
            <FormControl mt={2}>
              <FormLabel>Word Count</FormLabel>
              <NumberInput min={0} value={wordCounts[index] || 0} onChange={(value) => handleWordCountChange(index, parseInt(value))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Select Service</FormLabel>
              <Select placeholder="Select service" onChange={(e) => handleServiceChange(index, e.target.value)}>
                {services.map((service, i) => (
                  <option key={i} value={service.name}>
                    {service.name} - ${service.rate}/word
                  </option>
                ))}
              </Select>
            </FormControl>
            <IconButton mt={2} aria-label="Remove document" icon={<FaTrash />} onClick={() => handleRemoveDocument(index)} />
          </Box>
        ))}

        <FormControl>
          <FormLabel>Survey</FormLabel>
          <Textarea placeholder="Please provide any further details that would help us provide the best service possible." value={surveyResponse} onChange={(e) => setSurveyResponse(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Deposit Rate (%)</FormLabel>
          <NumberInput min={0} max={100} value={depositRate} onChange={(value) => setDepositRate(parseInt(value))}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Button colorScheme="teal" onClick={handleCheckout}>
          Checkout
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
