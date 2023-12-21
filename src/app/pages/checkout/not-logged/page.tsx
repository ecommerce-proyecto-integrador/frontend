import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import GraphQlProvider from "@/app/GraphQLProvider";
import NotLoggedInCheckoutForm from "@/app/components/checkout/LoggedInCheckout";

const Checkout: React.FC = () => {
    return (
        <GraphQlProvider>
            <Container>
                <FormWrap>
                    <NotLoggedInCheckoutForm />            
                </FormWrap>
            </Container>
        </GraphQlProvider>
      
    );
};

export default Checkout;