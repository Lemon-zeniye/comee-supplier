"use client";
import {
  Select,
  TextInput,
  Group,
  Text,
  Button,
  Image,
  SimpleGrid,
} from "@mantine/core";
import React, { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { IconUpload } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

function NewProductComponent() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        alt={`preview-${index}`}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        fit="contain"
      />
    );
  });

  return (
    <div className="rounded-xl bg-white p-10">
      <form>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-1 row-span-4">
            <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
              <Group align="center" justify="center" mih={60}>
                <IconUpload color="#172554" />
                <Text ta="center" className="text-primary-950">
                  Select Product images here
                </Text>
              </Group>
            </Dropzone>
            <div className="w-full p-4  border rounded-lg mt-2">
              <Carousel slideGap="xs" height={200}>
                {previews.map((preview, index) => (
                  <Carousel.Slide key={index}>{preview}</Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex gap-5 mb-5">
              <Select
                label="Category"
                placeholder="Category"
                className="w-full"
                withAsterisk
              />
              <TextInput
                label="Code"
                placeholder="Code"
                className="w-full"
                withAsterisk
              />
              <TextInput
                label="Name"
                placeholder="Name"
                className="w-full"
                withAsterisk
              />
            </div>
            <div className="flex gap-5 my-5">
              <TextInput
                label="Description"
                placeholder="Description"
                className="w-full"
                withAsterisk
              />
              <TextInput
                label="Dimensions"
                placeholder="Dimensions"
                className="w-full"
                withAsterisk
              />
              <TextInput
                type="number"
                label="Weight"
                placeholder="Weight"
                className="w-full"
                withAsterisk
              />
            </div>
            <div className="flex gap-5 my-5">
              <Select
                label="Weight Unit"
                placeholder="Weight Unit"
                className="w-full"
                withAsterisk
              />
              <Select
                label="Preferred Unit"
                placeholder="Preferred Unit"
                className="w-full"
                withAsterisk
              />
              <TextInput
                label="HS Code"
                placeholder="HS Code"
                className="w-full"
                withAsterisk
              />
            </div>
            <div className="flex gap-5 my-5">
              <TextInput
                label="HS Description"
                placeholder="HS Description"
                className="w-full"
                withAsterisk
              />
              <TextInput
                label="Customs Description"
                placeholder="Customs Description"
                className="w-full"
                withAsterisk
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-5">
            <Button color="green">Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewProductComponent;
