"use client";
import { Button, Dialog, Group, TextInput, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMessageCircleFilled } from "@tabler/icons-react";
import React from "react";

function Chat({}) {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <div className="absolute right-5 bottom-2 z-50 cursor-pointer">
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Send</Button>
        </Group>
      </Dialog>
    </div>
  );
}

export default Chat;
