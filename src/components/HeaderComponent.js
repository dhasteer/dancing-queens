import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; 

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}


	render() {
		return (
		        <Navbar dark expand="md">
		          <div className="container">
		          	<NavbarToggler onClick={this.toggleNav} />
		            <NavbarBrand className="mr-auto">
		            	<img src={require('../assets/dancing-queens.png')} height="60" width="45"
		            		alt="DancingQueens" />
		            </NavbarBrand>
		            <Collapse isOpen={this.state.isNavOpen} navbar>
		            	<Nav navbar>          		
		            		<NavItem>
		            			<NavLink className="nav-link" to="/home">
		            				<span className="fa fa-home fa-lg"></span> Home
		            			</NavLink>
		            		</NavItem>
		            		<NavItem>
		            			<NavLink className="nav-link" to="/instructors">
		            				<span className="fa fa-user fa-lg"></span> Instructors
		            			</NavLink>
		            		</NavItem>
                            <NavItem>
		            			<NavLink className="nav-link" to="/donation">
		            				<span className="fa fa-dollar fa-lg"></span> Donation
		            			</NavLink>
		            		</NavItem>
                            <NavItem>
		            			<NavLink className="nav-link" to="/contact-us">
		            				<span className="fa fa-envelope fa-lg"></span> Contact Us
		            			</NavLink>
		            		</NavItem>		  
		            	</Nav>
		            </Collapse>
		          </div>
		        </Navbar>
		)
	}
}

export default Header;