import { Row } from 'reactstrap'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Wallet from './wallet'
import Params from './params'

class Data extends Component {

	componentDidMount(){}

	render () {
		return (
			<Row className="tools_changes_proposals ">
				<Wallet/>
				<Params/>
			</Row>
		)
	}
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Data)

