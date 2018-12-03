import React, { Component } from "react";
import Button from "./components/Button/button";
import Toggle from "./components/Toggle/toggle";
import Input from "./components/Input/input";
import TextArea from "./components/TextArea/textarea";
import Select from "./components/Select/select";
import Modal from "./components/Modal/modal";
import Checkbox from "./components/Checkbox/checkbox";
import Link from "./components/Link/link";
import ComposedModal from "./components/ComposedModal/composedModal";

import "./App.css";
import composedModalIcon from "./assets/error.png";

class App extends Component {
  state = {
    toggleOn: false,
    checkboxOn: false,
    modalOpen: false,
    composedModalOpen: false
  };

  handleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleCheckbox = () => {
    this.setState({ checkboxOn: !this.state.checkboxOn });
  };

  handleToggle = () => {
    this.setState({ toggleOn: !this.state.toggleOn });
  };

  handleSelect = () => {
    console.log("Button selected");
  };

  handleComposedModal = () => {
    this.setState({ composedModalOpen: !this.state.composedModalOpen });
  };

  render() {
    return (
      <div className="App">
        <div className="showcase">
          <Button
            text="Primary Button"
            disabled={false}
            type="primary"
            onClick={() => {}}
          />
          <Button
            text="Danger Button"
            disabled={false}
            type="danger"
            onClick={() => {}}
          />
          <Button
            text="Default Button"
            disabled={false}
            type="default"
            onClick={() => {}}
          />
          <Button
            text="Disabled Button"
            disabled={true}
            type="default"
            onClick={() => {}}
          />
        </div>
        <div className="showcase">
          <Toggle
            isOn={this.state.toggleOn}
            handleToggle={() => this.handleToggle()}
            states={["PUBLIC", "PRIVATE"]}
          />
          <Toggle
            isOn={this.state.toggleOn}
            handleToggle={() => this.handleToggle()}
          />
        </div>
        <div className="showcase">
          <Input type="text" placeholder="Enter email address" />
          <Input type="password" />
          <Input type="number" placeholder="Enter email address" />
          <Input type="text" placeholder="Disabled input" disabled={true} />
        </div>
        <div className="showcase">
          <TextArea label="Message" placeholder="Write a message..." />
          <TextArea
            label="Disabled"
            placeholder="Write a message..."
            disabled={true}
          />
        </div>
        <div className="showcase">
          <Select
            options={["Design Team", "Dev Team"]}
            handleSelect={() => this.handleSelect()}
          />
          <Select
            options={["Dev Team", "Design Team"]}
            handleSelect={() => this.handleSelect()}
          />
        </div>
        <div className="showcase">
          <Button
            text="Open Modal"
            type="primary"
            onClick={() => this.handleModal()}
          />
          <Modal
            title="Modal Title"
            isOpen={this.state.modalOpen}
            handleModal={() => this.handleModal()}
          >
            <p>Enter your password</p>
            <Input type="password" />
            <Button
              text="Submit"
              type="primary"
              onClick={() => this.handleModal()}
            />
          </Modal>
        </div>
        <div className="showcase">
          <Checkbox
            isChecked={this.state.checkboxOn}
            handleCheckbox={() => this.handleCheckbox()}
          />
        </div>
        <div className="showcase">
          <div>
            <Link location="https://witts-stratts.com" external={true}>
              See our billing guidelines.
            </Link>
          </div>
          <div style={{ margin: "0 1em" }}>
            <Link
              location="https://github.com/samakintunde37/design-system"
              external={false}
            >
              See source code.
            </Link>
          </div>
        </div>
        <div className="showcase">
          <Button
            text="Open Composed Modal"
            type="primary"
            onClick={() => this.handleComposedModal()}
          />
          <ComposedModal
            title="Invite new members"
            iconSrc={composedModalIcon}
            isComposedModalOpen={this.state.composedModalOpen}
            handleComposedModalOpen={() => this.handleComposedModal()}
          >
            <Input type="email" placeholder="Enter email address" />
          </ComposedModal>
        </div>
      </div>
    );
  }
}

export default App;
