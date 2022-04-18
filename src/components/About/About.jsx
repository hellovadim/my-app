import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Card border="primary" style={{ width: "100%", margin: "50px 0" }}>
        <Card.Header>Обо мне</Card.Header>
        <Card.Body>
          <Card.Text>
            Здравствуйте <br /> В последние годы я работал по другой
            специальности.
            <br />
            В данной специальности опыта нет. Сейчас работаю в не большой IT
            компании <br /> Занимаюсь самообучением на платформе Udemy около
            года, проходил курсы от Ивана Петреченко по Web-разработке куда
            входили HTML CSS SASS SCSS Gulp Git , и курс по JS + React <br />{" "}
            Вот некоторые из моих работ
            <br /> Приложение Marvel (React + библиотеки) Ссылка на готовый
            проект https://hellovadim.github.io/marvel <br /> Ссылка на
            репозиторий с описанием библиотек
            https://github.com/hellovadim/marvel <br /> Приложение Админ панель
            (React-redux + библиотеки) Ссылка на готовый проект
            https://hellovadim.github.io/heroes Ссылка на репозиторий с
            описанием библиотек https://github.com/hellovadim/heroes <br /> Так
            же есть не большой проект на чистом Js Ссылка на готовый проект
            https://hellovadim.github.io/FoodJs/ Ссылка на репозиторий
            https://github.com/hellovadim/FoodJs
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
