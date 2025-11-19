import { Link } from "react-router-dom";
import { ROUTES } from "../const";

export default function HomePage() {
  return (
    <>
      <h1> My Quiz</h1>
      <Link to={ROUTES.QUIZ}>Start!</Link>
    </>
  );
}
