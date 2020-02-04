/*
 * Should NOT touch this FILE
 * Please create an Additional Connector
 * OR
 * Connect Components to Redux Store how you NORMALLY would
 */

import { connect } from "react-redux";

const mapStateToProps = ({ params, markdown }) => ({
  markdown,
  section: params ? params.section : ""
});

export default connect(mapStateToProps); // Component Calls Connect
