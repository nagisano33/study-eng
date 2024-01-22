import { Routes, Route } from "react-router-dom";
import { Main } from "./main/Main";
import { Registration } from "./registration/Registration";

/**
 * アプリメインのルーティング
 * 
 * @author nagisano33
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
