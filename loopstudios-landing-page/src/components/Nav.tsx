import styles from '@/styles/c/Nav.module.css';

const Nav = (props: {styles?: string}) => {
  return (
    <ul className={props.styles}>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Careers</a>
      </li>
      <li>
        <a>Events</a>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Support</a>
      </li>
    </ul>
  );
};

export default Nav;