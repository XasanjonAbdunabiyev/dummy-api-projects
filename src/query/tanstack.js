import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Tanstack = ({ children }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</>
	);
};

export default Tanstack;
