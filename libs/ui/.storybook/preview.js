import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

import "./default.scss";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
