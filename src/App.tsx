import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppRoutes } from "./pages/AppRoutes";

/**
 * テーマ
 */
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f0f0f0",
      },
    },
  },
});

/**
 * メインアプリ
 *
 * @author nagisano33
 */
function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
