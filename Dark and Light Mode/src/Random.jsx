import { useTheme } from "./theme-context.jsx";

const Random = () => {
  const { theme, toggleTheme } = useTheme();
  //console.log(theme);
  return (
    <>
      <h1>Hello</h1>
      <p className="para">Dark and light Mode </p>
      <label>Theme Change</label>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "Dark"}
      ></input>
    </>
  );
};

export default Random;
