import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

import "../src/scss/normalize.scss";
import "./default.scss";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
