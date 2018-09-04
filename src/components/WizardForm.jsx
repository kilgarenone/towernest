// @flow
import React, { Component } from "react";
import { Formik, Field } from "formik";
import PrevAndNextBtn from "./PrevAndNextBtn";

type Props = {
  setProgressBarWidth: (num: number) => void
};
class Wizard extends Component<Props> {
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

  // validate = async values => {
  //   console.log(values);
  //   const activePage = React.Children.toArray(this.props.children)[
  //     this.state.page
  //   ];
  //   return activePage.props.validate ? activePage.props.validate(values) : {};
  //   try {
  //     if (!activePage.props.validationSchema) {
  //       return {};
  //     }
  //     await activePage.props.validationSchema.validate(values);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  handleSubmit = (values, bag) => {
    const { children, onSubmit, setProgressBarWidth } = this.props;
    const { page } = this.state;
    const childrenCount = React.Children.count(children);
    const isLastPage = page === childrenCount - 1;

    if (setProgressBarWidth !== undefined) {
      setProgressBarWidth(((page + 1) / (childrenCount - 1)) * 100);
    }

    if (isLastPage) {
      return onSubmit(values);
    }

    this.next(values);

    bag.setSubmitting(false);
  };

  render() {
    const { children, validationSchema } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ values, errors, handleSubmit, isSubmitting, handleReset }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <PrevAndNextBtn
              showBackBtn={page > 0}
              handleBackBtnClick={this.previous}
              isLastPage={isLastPage}
              isSubmitting={isSubmitting}
            />
            {JSON.stringify(errors, null, 2)}
          </form>
        )}
      </Formik>
    );
  }
}

export default Wizard;
