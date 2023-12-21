import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import LoginForm from "../../components/login/LoginForm";//loginform del componente
import GraphQlProvider from '../../GraphQLProvider';

const LoginLab: React.FC = () => {
    return (
        <GraphQlProvider>
            <Container>
                <FormWrap>
                    <LoginForm />            
                </FormWrap>
            </Container>
        </GraphQlProvider>
      
    );
};

export default LoginLab;