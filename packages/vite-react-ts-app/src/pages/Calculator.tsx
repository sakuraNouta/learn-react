import React, { ChangeEvent } from 'react';

interface CalculatorProps {
  temperature: string;
  onTemperatureChange: Function;
  scale: 'c' | 'f';
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: Function) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component<CalculatorProps> {
  constructor(props: CalculatorProps) {
    super(props);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render(): React.ReactNode {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}: </legend>
        <input
          className="border"
          value={temperature}
          onChange={e => this.handleChange(e)}
        ></input>
      </fieldset>
    );
  }
}

class Calculator extends React.Component<
  any,
  Pick<CalculatorProps, 'scale' | 'temperature'>
> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = { scale: 'c', temperature: '' };
  }
  handleCelsiusChange(temperature: string) {
    this.setState({ scale: 'c', temperature });
  }
  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: 'f', temperature });
  }
  render(): React.ReactNode {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div className="m-auto">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={(v: string) => this.handleCelsiusChange(v)}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={(v: string) => this.handleFahrenheitChange(v)}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
