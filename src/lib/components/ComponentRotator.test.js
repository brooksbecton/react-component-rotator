import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import ComponentRotator from "./ComponentRotator";

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe("ComponentRotator", () => {
  const defaultComponents = [<h2>Lie</h2>, <h2>Cheat</h2>, <h2>Steal</h2>];

  it("renders correctly", () => {
    const wrapper = shallow(<ComponentRotator children={defaultComponents} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("delays start of child by 'startDelay' prop", () => {
    const mockStartDelay = Math.random();

    shallow(
      <ComponentRotator
        children={defaultComponents}
        startDelay={mockStartDelay}
      />
    );
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      mockStartDelay
    );
  });

  it("sets interval of child change by 'delay' prop", () => {
    const mockDelay = Math.random();

    shallow(
      <ComponentRotator children={defaultComponents} delay={mockDelay} />
    );

    expect(setInterval).toHaveBeenLastCalledWith(
      expect.any(Function),
      mockDelay
    );
  });

  it("clears intervals on unmount", () => {
    const mockIntervalId = Math.random();
    const mockTimeoutId = Math.random();

    const wrapper = shallow(<ComponentRotator children={defaultComponents} />);

    wrapper.setState({
      intervalId: mockIntervalId,
      timeoutId: mockTimeoutId
    });

    wrapper.unmount();

    expect(clearInterval).toHaveBeenCalledWith(mockIntervalId);
    expect(clearInterval).toHaveBeenCalledWith(mockTimeoutId);
  });

  it("clears intervals on prop change", () => {
    const mockIntervalId = Math.random();
    const mockTimeoutId = Math.random();

    const wrapper = shallow(<ComponentRotator children={defaultComponents} />);

    const moreComponents = [<h1>RTJ</h1>, ...defaultComponents];

    wrapper.setState({
      intervalId: mockIntervalId,
      timeoutId: mockTimeoutId
    });

    wrapper.setProps({ children: moreComponents });

    expect(clearInterval).toHaveBeenCalledWith(mockIntervalId);
    expect(clearInterval).toHaveBeenCalledWith(mockTimeoutId);
  });

  it("incrementIndex increments index", () => {
    const wrapper = shallow(<ComponentRotator children={defaultComponents} />);

    wrapper.instance().incrementIndex();

    expect(wrapper.instance().state.activeIndex).toBe(1);
  });

  it("incrementIndex keeps index within bounds", () => {
    const wrapper = shallow(<ComponentRotator children={defaultComponents} />);
    wrapper.instance().setState({ activeIndex: defaultComponents.length - 1 });
    wrapper.instance().incrementIndex();

    expect(wrapper.instance().state.activeIndex).toBe(0);
  });
});
