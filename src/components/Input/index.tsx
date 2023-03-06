import { Container, CustomInput, CustomLabel } from "./style";

export default function Input() {
  return (
    <Container>
      <CustomLabel>
        The first input is for you to type your own prompts.
      </CustomLabel>
      <CustomInput placeholder="Type Your Prompts..." />
      <CustomLabel>
        The second input will extend the prompts that you provided in the first
        input. Also you have the option to edit it in case you don't like some
        of the prompts.
      </CustomLabel>
      <CustomInput />
    </Container>
  );
}
