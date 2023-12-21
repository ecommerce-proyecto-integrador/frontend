'use client'; 
import { ApolloProvider } from '@apollo/client'; 
import client from './apolloClient';

interface IGraphQlProviderProps {
    children: React.ReactNode; 
}

const GraphQlProvider: React.FC<IGraphQlProviderProps> = ({
    children
}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>

    )
}

export default GraphQlProvider; 