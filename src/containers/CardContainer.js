import { connect } from 'react-redux'
import { getInstaData } from '../actions'
import { LoadingTrue } from '../actions'
import { cardClick } from '../actions'

import CardList from '../components/CardList'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }
//
const mapStateToProps = state => ({
  instaData: state.instaData,
  isLoading: state.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getInstaData()),
  loadingData: () =>dispatch(LoadingTrue()),
  cardClick: (id) =>dispatch(cardClick(id)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
