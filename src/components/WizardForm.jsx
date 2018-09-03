import React, { Component } from "react";
import { Formik, Field } from "formik";
import PrevAndNextBtn from "./PrevAndNextBtn";

class Wizard extends Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = async values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];

    try {
      if (!activePage.props.validationSchema) {
        return {};
      }
      await activePage.props.validationSchema.validate(values);
    } catch (err) {
      console.log("err", err);
    }
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit, setProgressBarWidth } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;

    if (setProgressBarWidth !== undefined) {
      setProgressBarWidth(50);
    }

    if (isLastPage) {
      return onSubmit(values);
    }

    this.next(values);

    bag.setSubmitting(false);
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
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
            {activePage}
            <PrevAndNextBtn
              displayBackBtn={page > 0}
              handleBackBtnClick={this.previous}
              isLastPage={isLastPage}
              isSubmitting={isSubmitting}
            />
          </form>
        )}
      </Formik>
    );
  }
}

export default Wizard;
