import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  InputGroup,
  Image,
  Text,
  Button,
  FormErrorMessage,
  Heading,
  InputLeftElement,
  Divider,
  useToast,
} from "@chakra-ui/react";

import user from "../../assets/Images/user.png";
import sms from "../../assets/Images/sms.png";
import smsTracking from "../../assets/Images/sms-tracking.png";
import exportIcon from "../../assets/Images/exportWhite.png";

const GetInTouch = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mzzbvrdg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        toast({
          title: "Message sent successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} p={"10px"}>
      <Heading size={"md"} fontWeight={"regular"} color={"#333333"}>
        Get In Touch
      </Heading>
      <Text mb={8} color={"#8A8A8A"}>
        Love to hear from you
      </Text>

      <FormControl isInvalid={errors.name} mb={4}>
        <FormLabel fontWeight={"regular"}>Name</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Image src={user} alt="user icon" />
          </InputLeftElement>
          <Input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Minimum length is 2 characters",
              },
            })}
            placeholder="Your name"
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email} mb={4}>
        <FormLabel fontWeight={"regular"}>Email</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Image src={sms} alt="email icon" />
          </InputLeftElement>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Your email"
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.message} mb={4}>
        <FormLabel fontWeight={"regular"}>Message</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Image src={smsTracking} alt="message icon" />
          </InputLeftElement>
          <Textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            placeholder="Your message"
            pl={10}
            rows={4}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        mt={4}
        type="submit"
        colorScheme="blackAlpha"
        w="full"
        gap={4}
        alignItems="center"
        isLoading={isSubmitting}
        loadingText="Sending..."
      >
        Send Message
        <Image src={exportIcon} alt="send icon" />
      </Button>

      <Divider my="32px" color="orange" />
    </Box>
  );
};

export default GetInTouch;
