import { Routes, Route } from "react-router-dom";
import { Main } from "./main/Main";
import { Registration } from "./registration/Registration";
import { QuestionPage } from "./main/question/QuestionPage";

/**
 * アプリメインのルーティング
 *
 * @author nagisano33
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/answer" element={<>answer</>} />
      </Route>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
