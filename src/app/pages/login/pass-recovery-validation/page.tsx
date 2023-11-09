import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import ValidationForm from "@/app/components/pass-recovery/ValidationForm";
import GraphQlProvider from "../../../GraphQLProvider";

const PasswordRecoveryValidationPage = () => {
  return (
    <GraphQlProvider children={undefined}>
      <Container>
        <FormWrap>
          <ValidationForm />
        </FormWrap>
      </Container>
    </GraphQlProvider>
  );
};

export default PasswordRecoveryValidationPage;
