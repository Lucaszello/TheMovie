import { useForm } from "@mantine/form";
import { contactProp } from "../type/type";
import { Box, Button, Group, Text, TextInput } from "@mantine/core";

const ContactForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handle = (value: contactProp) => {
    console.log(value);
    form.reset();
  };

  return (
    <Box
      mt={10}
    >
      <form onSubmit={form.onSubmit((value) => handle(value))}>
        <TextInput
          mb={8}
          label={
            <Text
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
                opacity: 0.8,
                paddingBottom : 10
              }}
            >
              Email
            </Text>
          }
          placeholder="Email"
          {...form.getInputProps("email")}
        />

        <Group position="right" mt="md">
          <Button w={'100%'} color="red" type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ContactForm;
