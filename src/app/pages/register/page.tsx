import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import RegisterForm from "@/app/components/register/RegisterForm";
import GraphQlProvider from '../../GraphQLProvider';

const Register = () => {

    return (
        <GraphQlProvider  children={undefined}  >
        
        <Container>
            <FormWrap>
            <RegisterForm />           
            </FormWrap>
        </Container>
      </GraphQlProvider>
      
    )
}

export default Register;