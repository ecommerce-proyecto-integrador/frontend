import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import ChangePasswordForm from "@/app/components/pass-recovery/ChangePasswordForm";
import GraphQlProvider from "../../../GraphQLProvider";

const ChangePasswordPage = () => {
  return (
    <GraphQlProvider>
      <Container>
        <FormWrap>
          <ChangePasswordForm />
        </FormWrap>
      </Container>
    </GraphQlProvider>
  );
};

export default ChangePasswordPage;
