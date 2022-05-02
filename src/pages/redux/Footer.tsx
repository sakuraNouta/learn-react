import { connect } from 'react-redux';

import { setVisibilityFilter } from './actions';

const Link = ({
  active,
  children,
  onClick
}: {
  active: boolean;
  children: any;
  onClick: Function;
  filter: string;
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      className="text-sky-300"
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (
  state: { visibilityFilter: string },
  ownProps: { filter: string }
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (
  dispatch: Function,
  ownProps: { filter: string }
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);
