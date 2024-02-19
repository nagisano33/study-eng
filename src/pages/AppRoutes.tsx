import { Routes, Route } from "react-router-dom";
import { Main } from "./main/Main";
import { Registration } from "./registration/Registration";
import { QuestionPage } from "./main/question/QuestionPage";
import { ExplanationPage } from "./main/explanation/ExplanationPage";

/**
 * アプリメインのルーティング
 *
 * @author nagisano33
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/explanations" element={<ExplanationPage />} />
      </Route>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
