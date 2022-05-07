import "./App.css";
import Button from "./Button/Button";
import React from "react";
import EditIcon from "./assets/editIcon.svg";

function App() {
  const renderButtonSizes = () => {
    const sizes = [
      {
        size: "small",
        label: "Click me",
        onClick: () => console.log("I am small"),
      },
      {
        size: "medium",
        label: "Click me",
        plain: true,
        onClick: () => console.log("I am medium"),
      },
      {
        size: "large",
        label: "Click me",
      },
    ];
    return (
      <div className={"sizes"}>
        Button sizes
        <div className={"container"}>
          {sizes.map(({ size, label, plain, onClick }) => (
            <Button
              onClick={onClick}
              label={label}
              small={size === "small"}
              medium={size === "medium"}
              large={size === "large"}
              key={size}
              plain={plain}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {renderButtonSizes()}
      <Button
        onClick={() => {}}
        label={"Label"}
        icon={<img width="14px" src={EditIcon} />}
      />
      <Button
        onClick={() => {}}
        label={"Label"}
        reverse
        icon={<img width="14px" src={EditIcon} />}
      />
      <Button onClick={() => {}} medium label={"Label"} primary />
      <Button onClick={() => {}} medium label={"Label"} secondary />
      <Button onClick={() => {}} medium label={"Label"} accent />
      <Button onClick={() => {}} medium label={"Label"} critical />
      <Button onClick={() => {}} medium label={"Label"} secondary fill />
      <Button onClick={() => {}} medium label={"Label"} accent fill />
      <Button onClick={() => {}} medium label={"Label"} critical fill />
    </div>
  );
}

export default App;
