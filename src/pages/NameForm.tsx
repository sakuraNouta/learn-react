import React, { ChangeEvent, FormEvent } from 'react';

interface NameFromProps {
  name: string;
  text: string;
  flavor: Array<string>;
}

const Flavors = ['Grapefruit', 'Lime', 'Coconut', 'Mango'];

class NameForm extends React.Component<any, NameFromProps> {
  constructor(props: NameFromProps) {
    super(props);
    this.state = { name: '', text: '', flavor: [] };
  }
  handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }
  handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ text: event.target.value });
  }
  handleFlavorChange(event: ChangeEvent<HTMLSelectElement>) {
    this.setState(prevState => {
      let flavor = [...prevState.flavor];
      const index = prevState.flavor.findIndex(
        item => item === event.target.value
      );
      if (index >= 0) {
        flavor = [...flavor.slice(0, index), ...flavor.slice(index + 1)];
      } else {
        flavor.push(event.target.value);
      }
      return { flavor };
    });
  }
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    const { name, text, flavor } = this.state;
    alert('name: ' + name + ' text: ' + text + ' flavor: ' + flavor);
    event.preventDefault();
  }
  render(): React.ReactNode {
    return (
      <form
        className="flex flex-wrap justify-around m-auto w-1/2 p-4 border bg-light-400"
        onSubmit={event => this.handleSubmit(event)}
      >
        <label className="w-1/5 mb-4">名字:</label>
        <input
          className="w-4/5 mb-4"
          type="text"
          value={this.state.name}
          onChange={event => this.handleNameChange(event)}
        ></input>
        <label className="w-1/5 mb-4">文章</label>
        <textarea
          className="w-4/5 mb-4"
          value={this.state.text}
          onChange={event => this.handleTextChange(event)}
        ></textarea>
        <label className="w-1/3 mb-4">Pick your favorite flavor: </label>
        <select
          className="w-2/3 mb-4"
          value={this.state.flavor}
          multiple={true}
          onChange={event => this.handleFlavorChange(event)}
        >
          {Flavors.map(flavor => (
            <option key={flavor} value={flavor}>
              {flavor}
            </option>
          ))}
        </select>
        <input
          className="px-4 py2 bg-green-300 cursor-pointer"
          type="submit"
          value="提交"
        ></input>
      </form>
    );
  }
}

export default NameForm;
