import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../actions/index'

  const Menu = ({changeOpenModal, openPodcasts}) => {


    
    return (
        <div className="App">
            <button onClick={()=> changeOpenModal("Record")}>Start a recording session</button>
            <button onClick={()=> changeOpenModal("Podcasts")}>Podcasts</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
  openModal: state.openModal
})

const mapDispatchToProps = dispatch => ({
  changeOpenModal: status => dispatch(openModal(status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)