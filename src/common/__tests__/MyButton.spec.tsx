import React from "react";
import { TouchableOpacity } from "react-native";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import { MyButton } from "../MyButton";

describe("MyButton tests", () => {
  let component: ReactTestRenderer;

  const onPressMock = jest.fn();
  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  it("should call onPressMock", () => {
    givenComponent();
    whenButtonIsPressed();
    thenOnPressHasBeenCalled();
  });

  function givenComponent() {
    component = renderer.create(
      <MyButton label={"label"} onPress={onPressMock} />
    );
  }

  function whenButtonIsPressed() {
    component.root.findByType(TouchableOpacity).props.onPress();
  }

  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

  function thenOnPressHasBeenCalled() {
    expect(onPressMock).toHaveBeenCalled();
  }
});
