import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import GraphQlProvider from "@/app/GraphQLProvider";
import NotLoggedInCheckoutForm from "@/app/components/checkout/NotLoggedInCheckout";

const Checkout: React.FC = () => {
    return (
        <GraphQlProvider  children={undefined}  >
            <Container>
                <FormWrap>
                    <NotLoggedInCheckoutForm />            
                </FormWrap>
            </Container>
        </GraphQlProvider>
      
    );
};

export default Checkout;