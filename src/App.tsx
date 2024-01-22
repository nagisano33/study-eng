import { ChakraProvider } from "@chakra-ui/react";
import { AppRoutes } from "./pages/AppRoutes";

/**
 * メインアプリ
 * 
 * @author nagisano33
 */
function App() {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
