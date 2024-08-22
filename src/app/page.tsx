"use client";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (false) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, []);
  return <></>;
}
