import { connect } from 'react-redux';
import { LeadeBord } from './LeaderBord';
import { getLeaders, loadLeadrs } from '../../store/LeadersReducer';

const mapStateToProps = state => ({
  leaders: getLeaders(state),
});

const mapDispatchToProps = {
  loadLeaders: loadLeadrs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadeBord);
