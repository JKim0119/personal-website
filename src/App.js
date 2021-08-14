import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Welcome from "./components/welcome";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Links from "./components/links";

const originalColors = ["#EBEBE3", "#254666", "#EBEBE3", "#254666"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
    };
  }

  render() {
    return (
      <div className="app">
        <Links></Links>
        <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          sectionsColor={this.state.sectionsColor}
          scrollingSpeed={750}
          navigation
          navigationTooltips={["Home", "About", "Experience", "Works"]}
          render={() => (
            <div>
              <ReactFullpage.Wrapper>
                <Welcome />
                <About />
                <Experience />
                <Projects />
              </ReactFullpage.Wrapper>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
