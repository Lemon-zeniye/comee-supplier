"use client";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import React from "react";
import Image from "next/image";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
// import { useLoginMutation } from "@/store/api/auth/auth.api";
import { notifications } from "@mantine/notifications";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z.string(),
  })
  .required();

type FormSchema = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(schema) });
  const router = useRouter();

  //   const [login, { isLoading: isLogginIn}] = useLoginMutation()

  const onSubmit = async (data: FormSchema) => {
    router.push("/dashboard");
    // try {
    //     const res = await login(data).unwrap()
    //     setCookie("token", res.token)
    //
    // } catch {
    //     notifications.show({
    //         title: "Error",
    //         message: "Incorrect email or password.",
    //         color: "red"
    //     })
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container w={"50%"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper withBorder shadow="md" radius="md">
            <Flex>
              <Box
                w="50%"
                p={15}
                bg={"white"}
                style={{ overflow: "hidden", borderRadius: "10px" }}
                className="my-auto"
                visibleFrom="sm"
              >
                <Image
                  src="/comee_logo.png"
                  alt="Maveko Logo"
                  width={150}
                  height={100}
                  className="flex mx-auto my-2"
                />
                <Title
                  style={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 600,
                    fontSize: "30px",
                  })}
                  classNames={{
                    root: "flex justify-center",
                  }}
                >
                  Product & Pricing
                </Title>
                <Image
                  src="/MavekoBig.svg"
                  alt="Maveko Logo"
                  width={120}
                  height={50}
                  className="flex mx-auto my-2"
                />
                <Divider my="sm" />
                <Text p={6} className="text-slate-600 text-justify">
                  MAVEKO provides services that cover the entire customer life
                  cycle to support your business. Innovative services from
                  design to delivery, optimized business integration and
                  customer specific supply chain solutions.
                </Text>
              </Box>
              <Paper
                p={30}
                w={{ base: "100%", sm: "50%" }}
                className="bg-gray-100 slef-center"
              >
                <Box className="mt-[20%]">
                  <Title
                    // align="center"
                    style={(theme) => ({
                      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                      fontWeight: 900,
                    })}
                  >
                    Sign In
                  </Title>
                  <TextInput
                    className="mt-4"
                    label="Email"
                    placeholder="Your email"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    error={errors.password?.message}
                    {...register("password")}
                    mt="md"
                  />
                  <Group mt="lg" justify="space-between">
                    <Checkbox label="Remember me" style={{ lineHeight: 1 }} />
                    <Anchor<"a">
                      onClick={(event) => event.preventDefault()}
                      href="#"
                      size="sm"
                    >
                      Forgot password?
                    </Anchor>
                  </Group>
                  <Button
                    fullWidth
                    mt="xl"
                    type="submit"
                    className="bg-blue-950 hover:bg-blue-900"
                    loading={false}
                  >
                    Sign in
                  </Button>
                  <Text c="dimmed" size="sm" mt={5} className="text-center">
                    Do not have an account yet?{" "}
                    <Link
                      href="/signup"
                      className="text-blue-950 underline hover:text-blue-800"
                    >
                      Sign Up
                    </Link>
                  </Text>
                </Box>
              </Paper>
            </Flex>
          </Paper>
        </form>
        <Flex justify={"center"} direction={"column"} gap={4} mt={8} pb={20}>
          <Text style={{ alignSelf: "center" }} fz={"xs"}>
            Copyright &copy; 2024, Maveko
          </Text>
          <Flex justify={"center"} gap={4}>
            <Text
              style={{ justifySelf: "center", alignSelf: "center" }}
              fz={"xs"}
            >
              Powered by:{" "}
            </Text>
            <Image
              src="/MavekoBig.svg"
              width={80}
              height={80}
              alt="Maveko logo"
            />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
