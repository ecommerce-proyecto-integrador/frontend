import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import GraphQlProvider from "@/app/GraphQLProvider";
import LoggedInCheckoutForm from "@/app/components/checkout/NotLoggedInCheckout";

const Checkout: React.FC = () => {
    return (
        <GraphQlProvider>
            <Container>
                <FormWrap>
                    <LoggedInCheckoutForm />            
                </FormWrap>
            </Container>
        </GraphQlProvider>
      
    );
};

export default Checkout;