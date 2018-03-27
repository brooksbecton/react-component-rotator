import React, { Component } from "react";
import PropTypes from "prop-types";

class ComponentRotator extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0,
      intervalId: undefined,
      timeoutId: undefined
    };
  }

  static defaultProps = {
    delay: 1000,
    startDelay: 0
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    delay: PropTypes.number,
    startDelay: PropTypes.number
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.clearComponentTimers();
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearComponentTimers();
  }

  clearComponentTimers = () => {
    clearInterval(this.state.intervalId);
    clearInterval(this.state.timeoutId);
  };

  incrementIndex = () => {
    this.setState(prevState => ({
      activeIndex: (prevState.activeIndex + 1) % this.props.children.length
    }));
  };

  startInterval = () => {
    const intervalId = setInterval(this.incrementIndex, this.props.delay);
    this.setState({ intervalId });
  };

  startTimer = () => {
    if (this.props.startDelay !== 0) {
      const timeoutId = setTimeout(this.startInterval, this.props.startDelay);
      this.setState({ timeoutId });
    } else {
      this.startInterval();
    }
  };

  render() {
    return <span>{this.props.children[this.state.activeIndex]}</span>;
  }
}

export default ComponentRotator;
