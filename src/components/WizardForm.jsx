import React, { Component } from "react";
import { Formik, Field } from "formik";
import { css } from "react-emotion";

class Wizard extends Component {
  static Page = ({ children }) => children;
  constructor(props) {
    super(props);
    this.questionsNodes = new Map();
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("121212");
  };
  next = values => {
    // this.setState(state => ({
    //   page: Math.min(state.page + 1, this.props.children.length - 1),
    //   values
    // }));
    const question = this.questionsNodes.get(1);
    question.scrollIntoView({ behavior: "smooth" });
  };

  previous = () => {
    const question = this.questionsNodes.get(0);
    question.scrollIntoView({ behavior: "smooth" });
    // this.setState(state => ({
    //   page: Math.max(state.page - 1, 0)
    // }));
  };

  validate = async values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];

    try {
      if (!activePage.props.validationSchema) {
        return {};
      }
      await activePage.props.validationSchema.validate(values);
      // setTimeout(() => this.next(values), 250);
    } catch (err) {
      console.log("err", err);
    }
  };

  handleSubmit = (values, bag) => {
    // const { children, onSubmit } = this.props;
    // const { page } = this.state;
    // const isLastPage = page === React.Children.count(children) - 1;

    // if (isLastPage) {
    //   return onSubmit(values);
    // }
    console.log("aa23");
    this.next(values);

    bag.setSubmitting(false);
  };

  activePages = () => {
    const { children } = this.props;
    const { page } = this.state;

    return React.Children.map(children, (child, index) => (
      <div
        ref={el => this.questionsNodes.set(index, el)}
        key={`q_${index}`}
        // className={index !== page && opacity}
      >
        {child}
      </div>
    ));
    // .slice(0, page + 1);
  };
  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form onSubmit={handleSubmit}>
            {this.activePages()}
            <div className="buttons">
              {/* {page > 0 && ( */}
              <button type="button" onClick={this.previous}>
                « Previous
              </button>
              {/* )} */}
              <button type="submit">Next »</button>
              {/* {!isLastPage && <button type="submit">Next »</button>} */}
              {/* {isLastPage && (
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )} */}
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default Wizard;
