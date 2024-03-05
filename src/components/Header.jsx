import logImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logImg} alt="퀴즈 로고" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
