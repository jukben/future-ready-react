// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Link,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  Layout,
  Fit,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  how: require("../assets/how.gif")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How to build future-ready React Dev Stack in 5 minutes
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold />
          <Link textColor="tertiary" href="https://twitter.com/jukben">@jukben</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading>What we really want:</Heading>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Webpack 2</ListItem>
            <ListItem>WPA support 🚀</ListItem>
            <ListItem>Dynamic imports</ListItem>
            <ListItem>Code Splitting with Dynamic import()</ListItem>
            <ListItem>Testing (Jest🃏)</ListItem>
            <ListItem>ESLint</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Image fit width={"80%"} src={images.how} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane>npm install -g create-react-app</CodePane>
          <Text margin={30}>🍺</Text>
          <CodePane>create-react-app swag-app</CodePane>
        </Slide>

        <Slide transition={["spin"]} bgColor="primary">
          <Text textSize={100}>🎉</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Link textColor="tertiary" href="https://github.com/facebookincubator/create-react-app">
            https://github.com/facebookincubator/create-react-app
          </Link>
        </Slide>

        <Slide transition={["spin"]} bgColor="primary">
          <Text textSize={100}>👏</Text>
        </Slide>
      </Deck>
    );
  }
}
