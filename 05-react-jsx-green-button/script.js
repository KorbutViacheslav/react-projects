const App = ({ initialButtonText, initialClassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClsssesList] = React.useState(initialClassesList);

  const onButtonClick = () => {
    setButtonText("New click");
    setClsssesList("green-btn");
  };
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassesList="" />);
