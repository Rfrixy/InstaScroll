import { connect } from 'react-redux'
import Header from '../components/Header'
import { InfiniteTrue } from '../actions'
import { InfiniteFalse } from '../actions'

const mapStateToProps = state => ({
  infiniteView: state.infiniteView,
})

const mapDispatchToProps = (dispatch) => ({
  setInfinite: () =>dispatch(InfiniteTrue()),
  setPaginated: ()=>dispatch(InfiniteFalse()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
