import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import RecoveryForm from "@/app/components/pass-recovery/RecoveryForm";
import GraphQlProvider from "../../../GraphQLProvider";

const PasswordRecoveryPage = () => {
  return (
    <GraphQlProvider children={undefined}>
      <Container>
        <FormWrap>
          <RecoveryForm />
        </FormWrap>
      </Container>
    </GraphQlProvider>
  );
};

export default PasswordRecoveryPage;
